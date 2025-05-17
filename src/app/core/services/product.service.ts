import { Injectable } from "@angular/core"
import { Product } from "../../services/types/product"

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Brinquedo prático para crianças: Guindaste de madeira",
      description:
        "Este guindaste de madeira é perfeito para desenvolver habilidades motoras e criatividade em crianças. Fabricado com madeira de reflorestamento de alta qualidade, possui acabamento liso e seguro, sem farpas ou rebarbas. O brinquedo inclui peças móveis que permitem simular operações reais de um guindaste, estimulando o raciocínio lógico e a coordenação motora. Ideal para crianças a partir de 3 anos, este guindaste resistente proporcionará horas de diversão educativa.",
      categoryId: 1, // Categoria: Brinquedos educativos
      color: "Natural",
      size: "Médio",
      value: 960,
      oldValue: 1160,
      discount: 35,
      quantity: 15,
      image: "assets/img/6bca124e-2984-4a1d-9a60-9a92749cf036.png",
      images: [
        "assets/img/6bca124e-2984-4a1d-9a60-9a92749cf036.png",
      ],
      isFavorite: false,
      feedbacks: [
        {
          name: "Roberto Almeida",
          rating: 5,
          date: "2023-11-05",
          comment:
            "Meu filho de 4 anos adora este guindaste! A qualidade da madeira é excelente e as peças móveis funcionam perfeitamente. Ótimo para estimular a coordenação motora.",
        },
        {
          name: "Fernanda Santos",
          rating: 4,
          date: "2023-10-18",
          comment:
            "Brinquedo muito bem feito e resistente. Meu filho brinca todos os dias e ainda não mostrou sinais de desgaste. Só não dou 5 estrelas porque a montagem inicial foi um pouco complicada.",
        },
        {
          name: "Lucas Pereira",
          rating: 5,
          date: "2023-09-30",
          comment:
            "Excelente brinquedo educativo! Ajuda muito no desenvolvimento da coordenação motora e raciocínio lógico. Meu filho fica horas brincando de construir.",
        },
      ],
    },
    {
      id: 2,
      name: "Grande conjunto de presente com chocalhos e mordedores para bebês",
      description:
        "Este conjunto completo de chocalhos e mordedores é o presente ideal para bebês em fase de desenvolvimento sensorial. Contém 8 peças coloridas com diferentes texturas, sons e formatos, projetadas para estimular os sentidos do bebê. Os mordedores possuem partes macias e texturizadas que aliviam o desconforto durante a dentição. Todos os itens são fabricados com materiais atóxicos, livres de BPA e fáceis de limpar. Recomendado para bebês a partir de 3 meses.",
      categoryId: 2, // Categoria: Brinquedos para bebês
      color: "Colorido",
      size: "Pequeno",
      value: 375,
      oldValue: 400,
      discount: 25,
      quantity: 20,
      image: "assets/img/83e1e786-a077-46e0-b3f2-afeaa8052e0c.png",
      images: [
        "assets/img/83e1e786-a077-46e0-b3f2-afeaa8052e0c.png",
      ],
      isFavorite: false,
      feedbacks: [
        {
          name: "Mariana Costa",
          rating: 5,
          date: "2023-10-25",
          comment:
            "Kit perfeito para bebês! Minha filha de 5 meses adora todos os chocalhos, especialmente os coloridos. Os mordedores ajudaram muito durante a fase de dentição.",
        },
        {
          name: "Paulo Ribeiro",
          rating: 5,
          date: "2023-09-12",
          comment:
            "Presente de qualidade! Dei para meu sobrinho e ele não larga. Os pais adoraram porque são fáceis de limpar e muito seguros para o bebê.",
        },
        {
          name: "Camila Duarte",
          rating: 4,
          date: "2023-08-30",
          comment:
            "Ótimo conjunto, com boa variedade de texturas e sons. Meu bebê se diverte muito. Só acho que poderia vir com uma bolsinha para guardar todas as peças.",
        },
      ],
    },
    {
      id: 3,
      name: "Estrutura de escalada para crianças",
      description:
        "Esta estrutura de escalada foi projetada para proporcionar diversão e desenvolvimento físico para crianças. Fabricada com plástico resistente e durável, suporta até 50kg e pode ser usada tanto em ambientes internos quanto externos. A estrutura inclui diferentes níveis de escalada, escorregador e túnel, estimulando a coordenação motora, equilíbrio e confiança. As cores vibrantes e o design lúdico tornam este brinquedo irresistível para as crianças. Montagem fácil e rápida, sem necessidade de ferramentas especiais.",
      categoryId: 3, // Categoria: Brinquedos para atividades físicas
      color: "Multicolorido",
      size: "Grande",
      value: 120,
      quantity: 8,
      image: "assets/img/fceb8ab1-7e1a-416a-8b77-f34987ce397d.png",
      images: [
        "assets/img/fceb8ab1-7e1a-416a-8b77-f34987ce397d.png",
      ],
      isFavorite: false,
      feedbacks: [
        {
          name: "Pedro Santos",
          rating: 5,
          date: "2023-11-10",
          comment:
            "Estrutura excelente! Meus filhos de 3 e 5 anos adoram. É resistente, segura e fácil de montar. Estamos usando na área externa e tem aguentado bem o sol e chuva.",
        },
        {
          name: "Juliana Mendes",
          rating: 4,
          date: "2023-10-05",
          comment:
            "Ótimo custo-benefício. As crianças se divertem muito e ajuda no desenvolvimento físico. A montagem foi mais simples do que eu esperava.",
        },
        {
          name: "André Gomes",
          rating: 5,
          date: "2023-09-18",
          comment:
            "Comprei para minha filha de 4 anos e foi um sucesso! Ela convida os amiguinhos e todos adoram. A estrutura é bem firme e não balança durante o uso.",
        },
      ],
    },
    {
      id: 4,
      name: "Conjunto de chocalhos de madeira",
      description:
        "Este conjunto de chocalhos de madeira traz 5 peças artesanais, cada uma com um som único e agradável. Fabricados com madeira natural e tingidos com corantes não tóxicos à base de água, são seguros para o contato com a boca do bebê. Os diferentes formatos e cores estimulam a percepção visual, enquanto os sons distintos desenvolvem a discriminação auditiva. O tamanho é ideal para as mãozinhas dos bebês, ajudando no desenvolvimento da preensão. Recomendado para bebês a partir de 6 meses.",
      categoryId: 2, // Categoria: Brinquedos para bebês
      color: "Madeira",
      size: "Pequeno",
      value: 370,
      oldValue: 400,
      discount: 30,
      quantity: 12,
      image: "assets/img/090319b0-9695-4ca2-b7e3-21908538d7e0.png",
      images: [
        "assets/img/090319b0-9695-4ca2-b7e3-21908538d7e0.png",
      ],
      isFavorite: false,
      feedbacks: [
        {
          name: "Ana Silva",
          rating: 5,
          date: "2023-10-15",
          comment:
            "Meu bebê adorou! Os chocalhos têm sons suaves e agradáveis, e a madeira é de ótima qualidade. Recomendo para estimular a audição e coordenação motora.",
        },
        {
          name: "Carlos Oliveira",
          rating: 4,
          date: "2023-09-28",
          comment:
            "Produto bom, com acabamento impecável. Os sons são diferentes entre si, o que é ótimo para o desenvolvimento auditivo. Só não dou 5 estrelas porque um dos chocalhos veio com o som mais baixo que os outros.",
        },
        {
          name: "Beatriz Lima",
          rating: 5,
          date: "2023-09-03",
          comment:
            "Chocalhos lindos e de excelente qualidade! Minha filha adora as cores vibrantes e os diferentes sons. Ótimo para estimular os sentidos do bebê.",
        },
      ],
    },
    {
      id: 5,
      name: "Kit de blocos de construção magnéticos",
      description:
        "Este kit de blocos magnéticos contém 60 peças coloridas que se conectam facilmente através de ímãs embutidos. Ideal para estimular a criatividade e o raciocínio espacial, permite a construção de estruturas 2D e 3D. As peças são grandes o suficiente para evitar riscos de engasgamento e fabricadas com plástico ABS de alta qualidade. O conjunto vem em uma caixa organizadora e inclui um guia com sugestões de construções. Perfeito para crianças a partir de 3 anos que gostam de criar e explorar.",
      categoryId: 1, // Categoria: Brinquedos educativos
      color: "Colorido",
      size: "Médio",
      value: 450,
      oldValue: 520,
      discount: 15,
      quantity: 10,
      image: "assets/img/6bca124e-2984-4a1d-9a60-9a92749cf036.png",
      images: [
        "assets/img/6bca124e-2984-4a1d-9a60-9a92749cf036.png",
      ],
      isFavorite: false,
      feedbacks: [
        {
          name: "Marcelo Souza",
          rating: 5,
          date: "2023-11-02",
          comment:
            "Brinquedo fantástico! Meu filho de 4 anos fica horas construindo diferentes estruturas. Os ímãs são fortes e as peças se encaixam perfeitamente. Ótimo para desenvolver a criatividade.",
        },
        {
          name: "Daniela Ferreira",
          rating: 4,
          date: "2023-10-14",
          comment:
            "Kit muito bom para estimular o raciocínio espacial. As crianças adoram construir e os ímãs facilitam a montagem. Só não dou 5 estrelas porque a caixa organizadora poderia ser mais resistente.",
        },
        {
          name: "Rodrigo Martins",
          rating: 5,
          date: "2023-09-25",
          comment:
            "Excelente brinquedo educativo! Meus filhos de 3 e 6 anos brincam juntos e desenvolvem habilidades importantes. As peças são coloridas e de ótima qualidade.",
        },
      ],
    },
    {
      id: 6,
      name: "Boneca interativa com sons e movimentos",
      description:
        "Esta boneca interativa responde ao toque e à voz com mais de 50 sons e frases diferentes. Seus braços e pernas são articulados, permitindo diversas posições. Os olhos se abrem e fecham, e ela emite sons de risada quando balançada. Vem vestida com roupas removíveis e laváveis, e acompanha mamadeira, chupeta e uma muda extra de roupa. Funciona com 3 pilhas AA (inclusas). A boneca estimula o cuidado, a afetividade e a imaginação em crianças a partir de 2 anos.",
      categoryId: 4, // Categoria: Bonecas e bonecos
      color: "Rosa",
      size: "Médio",
      value: 290,
      oldValue: 350,
      discount: 20,
      quantity: 18,
      image: "assets/img/83e1e786-a077-46e0-b3f2-afeaa8052e0c.png",
      images: [
        "assets/img/83e1e786-a077-46e0-b3f2-afeaa8052e0c.png",
      ],
      isFavorite: false,
      feedbacks: [
        {
          name: "Patrícia Lopes",
          rating: 5,
          date: "2023-10-30",
          comment:
            "Minha filha amou esta boneca! As interações são muito realistas e as roupas são de ótima qualidade. Ela brinca de mamãe e filhinha o dia todo.",
        },
        {
          name: "Gabriel Moreira",
          rating: 4,
          date: "2023-10-08",
          comment:
            "Boneca muito bem feita e com ótimas funções interativas. As pilhas duram bastante tempo. O único ponto negativo é que algumas frases são um pouco baixas.",
        },
        {
          name: "Luciana Vieira",
          rating: 5,
          date: "2023-09-15",
          comment:
            "Presente perfeito! Minha sobrinha não larga a boneca. Os sons são variados e as roupas são fáceis de trocar. Ótimo para estimular o cuidado e a responsabilidade.",
        },
      ],
    },
    {
      id: 7,
      name: "Tapete de atividades com piano para bebês",
      description:
        "Este tapete de atividades multifuncional possui um mini piano que emite sons quando pressionado pelos pezinhos do bebê. Inclui 5 brinquedos pendentes removíveis com diferentes texturas e sons, além de um espelho seguro para o bebê se reconhecer. O Atapete é acolchoado, com tecido macio e lavável, proporcionando conforto durante as brincadeiras. As cores vibrantes e os elementos interativos estimulam o desenvolvimento sensorial, motor e cognitivo. Ideal para bebês desde o nascimento até 12 meses.",
      categoryId: 2, // Categoria: Brinquedos para bebês
      color: "Azul",
      size: "Grande",
      value: 180,
      quantity: 14,
      image: "assets/img/fceb8ab1-7e1a-416a-8b77-f34987ce397d.png",
      images: [
        "assets/img/fceb8ab1-7e1a-416a-8b77-f34987ce397d.png",
      ],
      isFavorite: false,
      feedbacks: [
        {
          name: "Renata Campos",
          rating: 5,
          date: "2023-11-08",
          comment:
            "Tapete maravilhoso! Meu bebê de 5 meses adora os sons do piano e os brinquedos pendurados. O tecido é super macio e fácil de limpar.",
        },
        {
          name: "Thiago Barros",
          rating: 4,
          date: "2023-10-22",
          comment:
            "Ótimo produto para estimulação do bebê. As cores são vibrantes e os brinquedos bem fixados. Só não dou 5 estrelas porque o piano poderia ter um volume ajustável.",
        },
        {
          name: "Carla Nunes",
          rating: 5,
          date: "2023-09-29",
          comment:
            "Melhor tapete de atividades que já vi! Minha filha fica entretida por muito tempo com todos os estímulos. O espelho é um diferencial que ela adora.",
        },
      ],
    },
    {
      id: 8,
      name: "Kit de instrumentos musicais infantis",
      description:
        "Este kit completo de instrumentos musicais infantis contém 10 peças, incluindo tambor, xilofone, maracas, castanholas, pandeiro e apito. Todos os instrumentos são fabricados com materiais resistentes e seguros, em tamanhos adequados para mãos pequenas. O conjunto estimula a percepção auditiva, o senso rítmico e a coordenação motora, além de proporcionar momentos de diversão em família. Vem em uma sacola de tecido para fácil armazenamento. Recomendado para crianças a partir de 2 anos que amam música e sons.",
      categoryId: 5, // Categoria: Instrumentos musicais infantis
      color: "Multicolorido",
      size: "Médio",
      value: 210,
      oldValue: 250,
      discount: 16,
      quantity: 9,
      image: "assets/img/090319b0-9695-4ca2-b7e3-21908538d7e0.png",
      images: [
        "assets/img/090319b0-9695-4ca2-b7e3-21908538d7e0.png",
      ],
      isFavorite: false,
      feedbacks: [
        {
          name: "Fábio Cardoso",
          rating: 5,
          date: "2023-11-12",
          comment:
            "Kit fantástico! Meu filho de 3 anos está adorando explorar os diferentes sons. A qualidade dos instrumentos é surpreendente para o preço. Ótimo para desenvolver habilidades musicais.",
        },
        {
          name: "Amanda Rocha",
          rating: 4,
          date: "2023-10-19",
          comment:
            "Excelente conjunto de instrumentos. As crianças adoram e os sons são agradáveis (para instrumentos infantis). A sacola para guardar é muito útil. Só não dou 5 estrelas porque o tambor poderia ser um pouco mais resistente.",
        },
        {
          name: "Eduardo Mello",
          rating: 5,
          date: "2023-09-27",
          comment:
            "Comprei para minha escola de música infantil e foi um sucesso! As crianças adoram explorar os diferentes instrumentos e sons. Ótima qualidade e durabilidade.",
        },
      ],
    },
  ]

  constructor() { }

  getAllProducts(): Product[] {
    console.log("getAllProducts called, returning", this.products.length, "products")
    return this.products
  }

  // Método para paginação
  getProductsByPage(page: number, itemsPerPage: number): Product[] {
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return this.products.slice(startIndex, endIndex)
  }

  // Método para obter o número total de páginas
  getTotalPages(itemsPerPage: number): number {
    return Math.ceil(this.products.length / itemsPerPage)
  }

  getFeaturedProducts(): Product[] {
    console.log("getFeaturedProducts called, returning first 4 products")
    return this.products.slice(0, 4)
  }

  getProductById(id: number): Product | undefined {
    console.log("getProductById called with id:", id)
    const product = this.products.find((product) => product.id === id)
    console.log("Product found:", product ? "Yes" : "No")
    return product
  }

  getRelatedProducts(currentProductId: number): Product[] {
    console.log("getRelatedProducts called for product id:", currentProductId)
    const related = this.products.filter((product) => product.id !== currentProductId).slice(0, 3)
    console.log("Related products found:", related.length)
    return related
  }

  // Método para obter produtos por categoria
  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((product) => product.categoryId === categoryId)
  }

  // Método para buscar produtos
  searchProducts(term: string): Product[] {
    term = term.toLowerCase()
    return this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.color.toLowerCase().includes(term),
    )
  }
}
