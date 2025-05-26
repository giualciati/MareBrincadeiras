export interface Venda {
  id: number;
  nomeCliente: string;
  data: string;
  produtos: {
    nome: string;
    imagem: string;
    preco: number;
    quantidade: number;
  }[];
  valorTotal: number;
  frete: number;
}