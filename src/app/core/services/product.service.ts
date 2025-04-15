import { Injectable } from "@angular/core"
import type { Product } from "../../models/product"

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private products: Product[] = [
    {
      id: "1",
      name: "Brinquedo prático para crianças: Guindaste de madeira",
      price: 960,
      oldPrice: 1160,
      discount: 35,
      imageUrl: "assets/img/6bca124e-2984-4a1d-9a60-9a92749cf036.png",
      description:
        "Este guindaste de madeira é perfeito para desenvolver habilidades motoras e criatividade em crianças. Fabricado com madeira de reflorestamento de alta qualidade, possui acabamento liso e seguro, sem farpas ou rebarbas. O brinquedo inclui peças móveis que permitem simular operações reais de um guindaste, estimulando o raciocínio lógico e a coordenação motora. Ideal para crianças a partir de 3 anos, este guindaste resistente proporcionará horas de diversão educativa.",
      isFavorite: false,
    },
    {
      id: "2",
      name: "Grande conjunto de presente com chocalhos e mordedores para bebês",
      price: 375,
      oldPrice: 400,
      discount: 25,
      imageUrl: "assets/img/83e1e786-a077-46e0-b3f2-afeaa8052e0c.png",
      description:
        "Este conjunto completo de chocalhos e mordedores é o presente ideal para bebês em fase de desenvolvimento sensorial. Contém 8 peças coloridas com diferentes texturas, sons e formatos, projetadas para estimular os sentidos do bebê. Os mordedores possuem partes macias e texturizadas que aliviam o desconforto durante a dentição. Todos os itens são fabricados com materiais atóxicos, livres de BPA e fáceis de limpar. Recomendado para bebês a partir de 3 meses.",
      isFavorite: false,
    },
    {
      id: "3",
      name: "Estrutura de escalada para crianças",
      price: 120,
      imageUrl: "assets/img/fceb8ab1-7e1a-416a-8b77-f34987ce397d.png",
      description:
        "Esta estrutura de escalada foi projetada para proporcionar diversão e desenvolvimento físico para crianças. Fabricada com plástico resistente e durável, suporta até 50kg e pode ser usada tanto em ambientes internos quanto externos. A estrutura inclui diferentes níveis de escalada, escorregador e túnel, estimulando a coordenação motora, equilíbrio e confiança. As cores vibrantes e o design lúdico tornam este brinquedo irresistível para as crianças. Montagem fácil e rápida, sem necessidade de ferramentas especiais.",
      isFavorite: false,
    },
    {
      id: "4",
      name: "Conjunto de chocalhos de madeira",
      price: 370,
      oldPrice: 400,
      discount: 30,
      imageUrl: "assets/img/090319b0-9695-4ca2-b7e3-21908538d7e0.png",
      description:
        "Este conjunto de chocalhos de madeira traz 5 peças artesanais, cada uma com um som único e agradável. Fabricados com madeira natural e tingidos com corantes não tóxicos à base de água, são seguros para o contato com a boca do bebê. Os diferentes formatos e cores estimulam a percepção visual, enquanto os sons distintos desenvolvem a discriminação auditiva. O tamanho é ideal para as mãozinhas dos bebês, ajudando no desenvolvimento da preensão. Recomendado para bebês a partir de 6 meses.",
      isFavorite: false,
    },
    {
      id: "5",
      name: "Kit de blocos de construção magnéticos",
      price: 450,
      oldPrice: 520,
      discount: 15,
      imageUrl: "assets/img/6bca124e-2984-4a1d-9a60-9a92749cf036.png",
      description:
        "Este kit de blocos magnéticos contém 60 peças coloridas que se conectam facilmente através de ímãs embutidos. Ideal para estimular a criatividade e o raciocínio espacial, permite a construção de estruturas 2D e 3D. As peças são grandes o suficiente para evitar riscos de engasgamento e fabricadas com plástico ABS de alta qualidade. O conjunto vem em uma caixa organizadora e inclui um guia com sugestões de construções. Perfeito para crianças a partir de 3 anos que gostam de criar e explorar.",
      isFavorite: false,
    },
    {
      id: "6",
      name: "Boneca interativa com sons e movimentos",
      price: 290,
      oldPrice: 350,
      discount: 20,
      imageUrl: "assets/img/83e1e786-a077-46e0-b3f2-afeaa8052e0c.png",
      description:
        "Esta boneca interativa responde ao toque e à voz com mais de 50 sons e frases diferentes. Seus braços e pernas são articulados, permitindo diversas posições. Os olhos se abrem e fecham, e ela emite sons de risada quando balançada. Vem vestida com roupas removíveis e laváveis, e acompanha mamadeira, chupeta e uma muda extra de roupa. Funciona com 3 pilhas AA (inclusas). A boneca estimula o cuidado, a afetividade e a imaginação em crianças a partir de 2 anos.",
      isFavorite: false,
    },
    {
      id: "7",
      name: "Tapete de atividades com piano para bebês",
      price: 180,
      imageUrl: "assets/img/fceb8ab1-7e1a-416a-8b77-f34987ce397d.png",
      description:
        "Este tapete de atividades multifuncional possui um mini piano que emite sons quando pressionado pelos pezinhos do bebê. Inclui 5 brinquedos pendentes removíveis com diferentes texturas e sons, além de um espelho seguro para o bebê se reconhecer. O Atapete é acolchoado, com tecido macio e lavável, proporcionando conforto durante as brincadeiras. As cores vibrantes e os elementos interativos estimulam o desenvolvimento sensorial, motor e cognitivo. Ideal para bebês desde o nascimento até 12 meses.",
      isFavorite: false,
    },
    {
      id: "8",
      name: "Kit de instrumentos musicais infantis",
      price: 210,
      oldPrice: 250,
      discount: 16,
      imageUrl: "assets/img/090319b0-9695-4ca2-b7e3-21908538d7e0.png",
      description:
        "Este kit completo de instrumentos musicais infantis contém 10 peças, incluindo tambor, xilofone, maracas, castanholas, pandeiro e apito. Todos os instrumentos são fabricados com materiais resistentes e seguros, em tamanhos adequados para mãos pequenas. O conjunto estimula a percepção auditiva, o senso rítmico e a coordenação motora, além de proporcionar momentos de diversão em família. Vem em uma sacola de tecido para fácil armazenamento. Recomendado para crianças a partir de 2 anos que amam música e sons.",
      isFavorite: false,
    },
  ]

  constructor() {}

  getAllProducts(): Product[] {
    console.log("getAllProducts called, returning", this.products.length, "products")
    return this.products
  }

  getFeaturedProducts(): Product[] {
    console.log("getFeaturedProducts called, returning first 4 products")
    return this.products.slice(0, 4)
  }

  getProductById(id: string): Product | undefined {
    console.log("getProductById called with id:", id)
    const product = this.products.find((product) => product.id === id)
    console.log("Product found:", product ? "Yes" : "No")
    return product
  }

  getRelatedProducts(currentProductId: string): Product[] {
    console.log("getRelatedProducts called for product id:", currentProductId)
    const related = this.products.filter((product) => product.id !== currentProductId).slice(0, 3)
    console.log("Related products found:", related.length)
    return related
  }
}
