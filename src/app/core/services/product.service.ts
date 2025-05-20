import { Injectable } from "@angular/core"
import type { Product } from "../../services/types/product"

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
      images: ["assets/img/6bca124e-2984-4a1d-9a60-9a92749cf036.png"],
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
      images: ["assets/img/83e1e786-a077-46e0-b3f2-afeaa8052e0c.png"],
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
      images: ["assets/img/fceb8ab1-7e1a-416a-8b77-f34987ce397d.png"],
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
      images: ["assets/img/090319b0-9695-4ca2-b7e3-21908538d7e0.png"],
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
      images: ["assets/img/6bca124e-2984-4a1d-9a60-9a92749cf036.png"],
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
      images: ["assets/img/83e1e786-a077-46e0-b3f2-afeaa8052e0c.png"],
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
      images: ["assets/img/fceb8ab1-7e1a-416a-8b77-f34987ce397d.png"],
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
      images: ["assets/img/090319b0-9695-4ca2-b7e3-21908538d7e0.png"],
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
    {
      id: 9,
      name: "Jogo de tabuleiro educativo Aventura na Floresta",
      description:
        "Este jogo de tabuleiro educativo leva as crianças em uma aventura emocionante pela floresta enquanto aprendem sobre a natureza e os animais. Inclui um tabuleiro colorido, 4 peões em formato de animais, 1 dado especial, 100 cartas de perguntas e desafios, e um guia ilustrado. Desenvolvido por educadores, o jogo estimula o raciocínio lógico, conhecimentos gerais e trabalho em equipe. Ideal para crianças de 6 a 12 anos, proporciona momentos divertidos em família enquanto ensina valores de preservação ambiental.",
      categoryId: 1, // Categoria: Brinquedos educativos
      color: "Verde",
      size: "Médio",
      value: 189,
      oldValue: 220,
      discount: 14,
      quantity: 15,
      image: "assets/img/new-products/jogo-tabuleiro-floresta.jpg",
      images: [
        "assets/img/new-products/jogo-tabuleiro-floresta.jpg",
        "assets/img/new-products/jogo-tabuleiro-floresta-2.jpg",
      ],
      isFavorite: false,
      feedbacks: [
        {
          name: "Juliana Mendes",
          rating: 5,
          date: "2023-11-15",
          comment:
            "Jogo maravilhoso! Meus filhos adoraram e aprenderam muito sobre os animais e a natureza. As cartas têm perguntas bem elaboradas e o tabuleiro é muito bonito e resistente.",
        },
        {
          name: "Ricardo Oliveira",
          rating: 4,
          date: "2023-10-22",
          comment:
            "Ótimo jogo educativo. As crianças se divertem enquanto aprendem. O único ponto negativo é que algumas cartas são um pouco difíceis para crianças menores de 8 anos.",
        },
        {
          name: "Patrícia Alves",
          rating: 5,
          date: "2023-09-30",
          comment:
            "Comprei para minha sala de aula e foi um sucesso! Os alunos pedem para jogar todos os dias. Excelente ferramenta pedagógica que diverte e ensina ao mesmo tempo.",
        },
      ],
    },
    {
      id: 10,
      name: "Kit de Slime Mágico - Faça Você Mesmo",
      description:
        "Este kit completo para fazer slime contém tudo que seu filho precisa para criar slimes coloridos e divertidos. Inclui 5 frascos de cola especial, 3 potes de ativador, 10 corantes diferentes, 6 pacotes de glitter, contas coloridas, miniaturas para decoração e um manual de instruções detalhado. Todas as substâncias são atóxicas e laváveis. O kit estimula a criatividade, coordenação motora fina e noções básicas de ciência. Recomendado para crianças a partir de 6 anos, com supervisão de adultos.",
      categoryId: 6, // Categoria: Artes e artesanato
      color: "Multicolorido",
      size: "Médio",
      value: 145,
      oldValue: 180,
      discount: 19,
      quantity: 22,
      image: "assets/img/new-products/kit-slime.jpg",
      images: ["assets/img/new-products/kit-slime.jpg", "assets/img/new-products/kit-slime-2.jpg"],
      isFavorite: false,
      feedbacks: [
        {
          name: "Mariana Costa",
          rating: 5,
          date: "2023-11-18",
          comment:
            "Kit incrível! Minha filha de 8 anos ficou encantada. Os materiais são de ótima qualidade e as instruções são claras. O slime fica com uma textura perfeita!",
        },
        {
          name: "Fernando Gomes",
          rating: 4,
          date: "2023-10-25",
          comment:
            "Muito bom para entreter as crianças em dias chuvosos. Os materiais rendem bastante e as cores ficam vibrantes. Só não dou 5 estrelas porque alguns potes poderiam ser maiores.",
        },
        {
          name: "Luciana Vieira",
          rating: 5,
          date: "2023-10-02",
          comment:
            "Presente perfeito! Minha sobrinha adorou fazer suas próprias slimes. O kit é completo e os materiais são seguros. Recomendo para estimular a criatividade das crianças.",
        },
      ],
    },
    {
      id: 11,
      name: "Pista de Carrinhos Radical com Looping Duplo",
      description:
        "Esta pista de carrinhos radical oferece emoção em alta velocidade com seu looping duplo e pistas entrelaçadas. O conjunto inclui a pista modular com mais de 6 metros quando montada, 2 carrinhos de corrida com design aerodinâmico, 1 lançador turbo e acessórios para personalizar o percurso. A pista pode ser montada em diferentes configurações, estimulando a criatividade e o raciocínio espacial. Os carrinhos funcionam por gravidade e impulso, sem necessidade de pilhas. Feita com plástico resistente e durável, proporciona horas de diversão para crianças a partir de 5 anos.",
      categoryId: 7, // Categoria: Carrinhos e veículos
      color: "Laranja e Azul",
      size: "Grande",
      value: 299,
      oldValue: 350,
      discount: 14,
      quantity: 10,
      image: "assets/img/new-products/pista-carrinhos.jpg",
      images: ["assets/img/new-products/pista-carrinhos.jpg", "assets/img/new-products/pista-carrinhos-2.jpg"],
      isFavorite: false,
      feedbacks: [
        {
          name: "Carlos Eduardo",
          rating: 5,
          date: "2023-11-20",
          comment:
            "Pista sensacional! Meu filho de 6 anos ficou maravilhado com o looping duplo. A montagem é fácil e os carrinhos são muito rápidos. Vale cada centavo!",
        },
        {
          name: "Amanda Rocha",
          rating: 4,
          date: "2023-10-28",
          comment:
            "Ótima pista, bem resistente e divertida. As crianças adoram ver os carrinhos completando o looping. Só não dou 5 estrelas porque a montagem inicial leva um tempo considerável.",
        },
        {
          name: "Bruno Mendes",
          rating: 5,
          date: "2023-10-05",
          comment:
            "Comprei para meu filho e foi um sucesso! Ele e os amigos passam horas brincando e criando novas configurações para a pista. Os carrinhos são bem resistentes a quedas.",
        },
      ],
    },
    {
      id: 12,
      name: "Pelúcia Interativa Dino Amigo",
      description:
        "O Dino Amigo é uma pelúcia interativa que responde ao toque e à voz da criança. Com 30cm de altura, este dinossauro fofo tem pelo macio e antialérgico em tons de verde e azul. Ele emite mais de 40 sons diferentes, incluindo rugidos divertidos e frases carinhosas. Seus olhos se iluminam em diferentes cores de acordo com seu 'humor'. Quando acariciado na cabeça, ele ronrona e move a cauda. Inclui um modo de ninar com sons suaves e luz noturna para ajudar na hora de dormir. Funciona com 3 pilhas AA (inclusas). Ideal para crianças a partir de 3 anos.",
      categoryId: 8, // Categoria: Pelúcias
      color: "Verde e Azul",
      size: "Médio",
      value: 249,
      oldValue: 300,
      discount: 17,
      quantity: 18,
      image: "assets/img/new-products/pelucia-dino.jpg",
      images: ["assets/img/new-products/pelucia-dino.jpg", "assets/img/new-products/pelucia-dino-2.jpg"],
      isFavorite: false,
      feedbacks: [
        {
          name: "Tatiana Lopes",
          rating: 5,
          date: "2023-11-22",
          comment:
            "Pelúcia maravilhosa! Meu filho não larga o Dino Amigo. A interatividade é impressionante e o material é super macio e de qualidade. A função de ninar é um diferencial incrível!",
        },
        {
          name: "Rodrigo Alves",
          rating: 4,
          date: "2023-10-30",
          comment:
            "Ótimo brinquedo interativo. As crianças adoram as reações do dinossauro. A pelúcia é bem macia e resistente. Só não dou 5 estrelas porque o volume poderia ser ajustável.",
        },
        {
          name: "Fernanda Martins",
          rating: 5,
          date: "2023-10-08",
          comment:
            "Presente perfeito! Minha filha está apaixonada pelo Dino. Ela conversa com ele o dia todo e dorme abraçada com a função de ninar ligada. Super recomendo!",
        },
      ],
    },
    {
      id: 13,
      name: "Tablet Educativo Infantil Bilíngue",
      description:
        "Este tablet educativo bilíngue (português e inglês) foi desenvolvido especialmente para crianças em fase de aprendizagem. Com tela colorida de 7 polegadas e capa protetora emborrachada resistente a quedas, oferece mais de 100 atividades educativas, incluindo alfabetização, matemática básica, música, desenho e jogos de memória. O conteúdo é adaptado para diferentes faixas etárias, crescendo com a criança. Possui controle parental, limitador de tempo de uso e não permite acesso à internet. Funciona com bateria recarregável (carregador incluso) com autonomia de até 8 horas. Ideal para crianças de 3 a 10 anos.",
      categoryId: 9, // Categoria: Brinquedos eletrônicos
      color: "Azul",
      size: "Médio",
      value: 399,
      oldValue: 450,
      discount: 11,
      quantity: 12,
      image: "assets/img/new-products/tablet-educativo.jpg",
      images: ["assets/img/new-products/tablet-educativo.jpg", "assets/img/new-products/tablet-educativo-2.jpg"],
      isFavorite: false,
      feedbacks: [
        {
          name: "Cristina Moreira",
          rating: 5,
          date: "2023-11-25",
          comment:
            "Excelente tablet educativo! Minha filha de 5 anos está aprendendo muito com as atividades. A função bilíngue é ótima para introduzir o inglês de forma natural. A bateria dura bastante!",
        },
        {
          name: "Paulo Henrique",
          rating: 4,
          date: "2023-11-02",
          comment:
            "Muito bom para entreter e educar ao mesmo tempo. As atividades são divertidas e educativas. A capa protetora é resistente. Só não dou 5 estrelas porque algumas atividades poderiam ter instruções mais claras.",
        },
        {
          name: "Daniela Costa",
          rating: 5,
          date: "2023-10-12",
          comment:
            "Melhor investimento que fiz para meu filho! Ele está aprendendo muito e se divertindo. O controle parental é ótimo e a bateria dura o dia todo. Super recomendo!",
        },
      ],
    },
    {
      id: 14,
      name: "Kit de Ciências Explorando a Natureza",
      description:
        "Este kit científico permite que as crianças explorem o mundo natural com equipamentos reais adaptados para mãos pequenas. Inclui microscópio infantil com aumento de até 30x, lupa de mão, binóculos, rede para insetos, pinças, tubos de ensaio, caixa coletora com lupa integrada, caderno de campo e guia ilustrado com 50 experimentos e atividades. Todos os materiais são seguros e duráveis, projetados para uso interno e externo. O kit estimula a curiosidade científica, observação detalhada e respeito pela natureza. Ideal para pequenos exploradores a partir de 6 anos.",
      categoryId: 1, // Categoria: Brinquedos educativos
      color: "Verde e Amarelo",
      size: "Médio",
      value: 235,
      oldValue: 280,
      discount: 16,
      quantity: 14,
      image: "assets/img/new-products/kit-ciencias.jpg",
      images: ["assets/img/new-products/kit-ciencias.jpg", "assets/img/new-products/kit-ciencias-2.jpg"],
      isFavorite: false,
      feedbacks: [
        {
          name: "Marcelo Dias",
          rating: 5,
          date: "2023-11-28",
          comment:
            "Kit fantástico! Meu filho de 7 anos está fascinado com as descobertas que faz no jardim. O microscópio é de boa qualidade e os materiais são resistentes. Ótimo para estimular o interesse pela ciência!",
        },
        {
          name: "Camila Rodrigues",
          rating: 4,
          date: "2023-11-05",
          comment:
            "Excelente kit científico. As crianças aprendem muito sobre a natureza de forma prática. O guia de experimentos é bem explicado. Só não dou 5 estrelas porque o microscópio poderia ter um aumento maior.",
        },
        {
          name: "Leonardo Almeida",
          rating: 5,
          date: "2023-10-15",
          comment:
            "Presente educativo e divertido! Minha filha está encantada com as observações que faz. O kit é completo e de boa qualidade. Tem proporcionado momentos maravilhosos de exploração em família.",
        },
      ],
    },
    {
      id: 15,
      name: "Cozinha Infantil Completa Chef Mirim",
      description:
        "Esta cozinha infantil realista proporciona horas de diversão com brincadeiras de faz-de-conta. Fabricada em plástico resistente e madeira MDF, possui altura ideal para crianças (85cm). O conjunto inclui fogão com sons de cozimento, geladeira com porta que abre, pia com torneira que simula água, micro-ondas, armários funcionais e 25 acessórios (panelas, talheres, alimentos de brinquedo). As portas abrem e fecham, os botões giram e fazem sons realistas. Estimula a imaginação, socialização e habilidades domésticas básicas. Fácil de montar e limpar. Ideal para crianças de 3 a 8 anos.",
      categoryId: 10, // Categoria: Brinquedos de faz-de-conta
      color: "Vermelho e Branco",
      size: "Grande",
      value: 499,
      oldValue: 599,
      discount: 17,
      quantity: 8,
      image: "assets/img/new-products/cozinha-infantil.jpg",
      images: ["assets/img/new-products/cozinha-infantil.jpg", "assets/img/new-products/cozinha-infantil-2.jpg"],
      isFavorite: false,
      feedbacks: [
        {
          name: "Renata Campos",
          rating: 5,
          date: "2023-12-01",
          comment:
            "Cozinha maravilhosa! Minha filha de 4 anos não sai mais dela. A qualidade é excelente, muito resistente e os detalhes são incríveis. Os sons deixam a brincadeira ainda mais realista!",
        },
        {
          name: "Gustavo Mendes",
          rating: 4,
          date: "2023-11-10",
          comment:
            "Ótimo brinquedo para estimular a imaginação. A montagem foi relativamente fácil e o resultado ficou muito bonito. Só não dou 5 estrelas porque alguns acessórios poderiam ser mais resistentes.",
        },
        {
          name: "Aline Ferreira",
          rating: 5,
          date: "2023-10-20",
          comment:
            "Melhor presente que dei para minha filha! A cozinha é linda, resistente e cheia de detalhes. Ela e as amiguinhas passam horas brincando de restaurante. Vale cada centavo!",
        },
      ],
    },
    {
      id: 16,
      name: "Conjunto de Blocos de Construção Castelo Medieval",
      description:
        "Este conjunto de blocos de construção contém 550 peças para montar um impressionante castelo medieval com torres, ponte levadiça funcional, masmorras e muralhas. Fabricado com plástico de alta qualidade, inclui 8 mini figuras (cavaleiros, princesa, dragão, mago e rei), bandeiras, armas medievais e acessórios para criar histórias épicas. As peças são compatíveis com outras marcas populares de blocos. O conjunto vem em uma caixa organizadora com separadores e inclui um guia colorido com sugestões de montagem. Estimula criatividade, coordenação motora fina e raciocínio espacial. Ideal para crianças a partir de 6 anos.",
      categoryId: 11, // Categoria: Blocos de construção
      color: "Cinza e Vermelho",
      size: "Grande",
      value: 329,
      oldValue: 399,
      discount: 18,
      quantity: 11,
      image: "assets/img/new-products/blocos-castelo.jpg",
      images: ["assets/img/new-products/blocos-castelo.jpg", "assets/img/new-products/blocos-castelo-2.jpg"],
      isFavorite: false,
      feedbacks: [
        {
          name: "Roberto Alves",
          rating: 5,
          date: "2023-12-05",
          comment:
            "Conjunto incrível! Meu filho de 8 anos ficou maravilhado com a quantidade de peças e possibilidades. A qualidade dos blocos é excelente e as mini figuras são muito detalhadas.",
        },
        {
          name: "Carla Soares",
          rating: 4,
          date: "2023-11-15",
          comment:
            "Ótimo conjunto de blocos. As crianças adoram e passam horas montando diferentes versões do castelo. As instruções são claras. Só não dou 5 estrelas porque algumas peças pequenas se soltam com facilidade.",
        },
        {
          name: "Marcos Paulo",
          rating: 5,
          date: "2023-10-25",
          comment:
            "Excelente brinquedo educativo! Meu filho desenvolveu muito a criatividade e concentração. As peças são de ótima qualidade e o tema medieval é um sucesso entre as crianças. Super recomendo!",
        },
      ],
    },
    {
      id: 17,
      name: "Bicicleta Infantil Aro 16 com Rodinhas",
      description:
        "Esta bicicleta infantil de alta qualidade foi projetada para oferecer segurança e diversão para crianças em fase de aprendizagem. Com aro 16, é ideal para crianças de 4 a 7 anos. Possui quadro em aço carbono resistente, pintura eletrostática, rodinhas laterais removíveis, freios seguros nas duas rodas, corrente com protetor, guidão emborrachado e selim anatômico ajustável. Os pneus são infláveis para melhor aderência e amortecimento. Vem com campainha, cesta frontal removível e adesivos para personalização. Disponível em cores vibrantes, esta bicicleta ajuda no desenvolvimento do equilíbrio, coordenação motora e independência.",
      categoryId: 3, // Categoria: Brinquedos para atividades físicas
      color: "Rosa",
      size: "Grande",
      value: 599,
      oldValue: 699,
      discount: 14,
      quantity: 7,
      image: "assets/img/new-products/bicicleta-infantil.jpg",
      images: ["assets/img/new-products/bicicleta-infantil.jpg", "assets/img/new-products/bicicleta-infantil-2.jpg"],
      isFavorite: false,
      feedbacks: [
        {
          name: "Adriana Santos",
          rating: 5,
          date: "2023-12-10",
          comment:
            "Bicicleta excelente! Minha filha aprendeu a andar em poucos dias. A qualidade é superior, muito resistente e estável. As rodinhas dão segurança no início e são fáceis de remover quando não precisar mais.",
        },
        {
          name: "Felipe Oliveira",
          rating: 4,
          date: "2023-11-20",
          comment:
            "Ótima bicicleta infantil. Bem construída e segura. A montagem foi simples e veio com todas as ferramentas necessárias. Só não dou 5 estrelas porque o selim poderia ser um pouco mais macio.",
        },
        {
          name: "Luciana Martins",
          rating: 5,
          date: "2023-10-30",
          comment:
            "Melhor investimento para minha filha! A bicicleta é linda, resistente e muito segura. Ela adorou a cesta e os adesivos para personalizar. Tem ajudado muito no desenvolvimento físico e na confiança dela.",
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
