import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProductService } from "../../core/services/product.service";
import { Product } from "../../services/types/product";
import { FavoritosService } from "../../favoritos.service";
import { CategoryService } from "../../services/category.service";
import { categorias } from "../../services/types/types";

@Component({
  selector: "app-product-page",
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent, HeaderComponent, FooterComponent],
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"],
})
export class ProductPageComponent implements OnInit {
  products: Product[] = [];
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  displayedProducts: Product[] = [];
  produto!: Product;
  currentPage = 1;
  itemsPerPage = 16;
  totalPages = 1;
  pages: number[] = [];
  isLoading = true;

  searchTerm = "";

  // Filtros avançados
  ageRanges: string[] = ["0-12 meses", "1-3 anos", "4-6 anos", "7-9 anos", "10-12 anos", "13+ anos"];
  selectedAgeRanges: string[] = [];

  minPrice = 0;
  maxPrice = 1000;
  priceRange: [number, number] = [0, 1000];

  categorias: categorias[] = [];
  selectedCategorias: string[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private favoritosService: FavoritosService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.loadCategorias();
  }

  loadCategorias(): void {
    this.categoryService.listar().subscribe((categorias) => {
      this.categorias = categorias;
      this.loadProductsWithCategories();
    });
  }

  loadProductsWithCategories(): void {
    this.productService.getProducts().subscribe((products) => {
      this.allProducts = products.map((product) => {
        const categoria = this.categorias.find((cat) => cat.id === product.categoryId);
        return {
          ...product,
          categoriaNome: categoria ? categoria.nome : "",
        };
      });

      if (this.allProducts.length > 0) {
        this.minPrice = Math.min(...this.allProducts.map((p) => p.value));
        this.maxPrice = Math.max(...this.allProducts.map((p) => p.value));
        this.priceRange = [this.minPrice, this.maxPrice];
      }

      this.loadProducts();

      this.route.queryParams.subscribe((params) => {
        const pageParam = params["page"];
        const searchParam = params["search"];

        this.currentPage = pageParam ? Number(pageParam) : 1;

        if (searchParam) {
          this.searchTerm = searchParam;
          this.filterProducts();
        } else {
          this.updateDisplayedProducts();
        }
      });

      this.isLoading = false;
    });
  }

  loadProducts(): void {
    this.filteredProducts = this.allProducts;
    this.updatePagination();
    this.updateDisplayedProducts();
  }

  filterProducts(): void {
    let filtered = this.allProducts;

    if (this.searchTerm.trim()) {
      const searchTermLower = this.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTermLower) ||
          (product.description && product.description.toLowerCase().includes(searchTermLower))
      );
    }

    if (this.selectedAgeRanges.length > 0) {
      filtered = filtered.filter(
        (product) => product.ageRange && this.selectedAgeRanges.includes(product.ageRange)
      );
    }

    filtered = filtered.filter(
      (product) => product.value >= this.priceRange[0] && product.value <= this.priceRange[1]
    );

    if (this.selectedCategorias.length > 0) {
      filtered = filtered.filter(
        (product) => product.categoriaNome && this.selectedCategorias.includes(product.categoriaNome)
      );
    }

    this.filteredProducts = filtered;

    if (this.isAnyFilterActive() || this.searchTerm) {
      this.updateUrlWithFilters();
    }

    this.currentPage = 1;
    this.updatePagination();
    this.updateDisplayedProducts();
  }

  updateUrlWithFilters(): void {
    const queryParams: any = {};

    if (this.searchTerm) {
      queryParams.search = this.searchTerm;
    }

    if (this.selectedAgeRanges.length > 0) {
      queryParams.ageRanges = this.selectedAgeRanges.join(",");
    }

    if (this.priceRange[0] !== this.minPrice || this.priceRange[1] !== this.maxPrice) {
      queryParams.priceMin = this.priceRange[0];
      queryParams.priceMax = this.priceRange[1];
    }

    if (this.selectedCategorias.length > 0) {
      queryParams.categorias = this.selectedCategorias.join(",");
    }

    if (this.currentPage > 1) {
      queryParams.page = this.currentPage;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      replaceUrl: true,
    });
  }

  clearSearch(): void {
    this.searchTerm = "";
    this.filterProducts();
  }

  toggleAgeRange(age: string): void {
    if (this.selectedAgeRanges.includes(age)) {
      this.selectedAgeRanges = this.selectedAgeRanges.filter((a) => a !== age);
    } else {
      this.selectedAgeRanges.push(age);
    }
    this.filterProducts();
  }

  toggleCategoria(categoriaNome: string): void {
    if (this.selectedCategorias.includes(categoriaNome)) {
      this.selectedCategorias = this.selectedCategorias.filter((c) => c !== categoriaNome);
    } else {
      this.selectedCategorias.push(categoriaNome);
    }
    this.filterProducts();
  }

  clearAllFilters(): void {
    this.selectedAgeRanges = [];
    this.priceRange = [this.minPrice, this.maxPrice];
    this.selectedCategorias = [];
    this.filterProducts();
  }

  isAnyFilterActive(): boolean {
    return (
      this.selectedAgeRanges.length > 0 ||
      this.priceRange[0] !== this.minPrice ||
      this.priceRange[1] !== this.maxPrice ||
      this.selectedCategorias.length > 0
    );
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    this.totalPages = this.totalPages === 0 ? 1 : this.totalPages;
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);

    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }

  updateDisplayedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page !== this.currentPage && page >= 1 && page <= this.totalPages) {
      this.currentPage = page;

      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
      });

      this.updateDisplayedProducts();
      window.scrollTo(0, 0);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  toggleFavorite(event: Event, product: Product): void {
    event.preventDefault();

    if (product.isFavorite) {
      this.favoritosService.remover(Number(product.id));
    } else {
      this.favoritosService.adicionar(product);
    }

    product.isFavorite = !product.isFavorite;
  }
}
