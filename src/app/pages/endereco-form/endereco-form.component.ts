import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.scss']
})
export class EnderecoFormComponent implements OnInit {
  ngOnInit(): void {
    const form = document.getElementById("enderecoForm") as HTMLFormElement;
    const salvarBtn = document.getElementById("salvarBtn") as HTMLButtonElement;

    form.addEventListener("input", () => {
      const requiredFields = form.querySelectorAll("[required]") as NodeListOf<HTMLInputElement>;
      const allFilled = Array.from(requiredFields).every(input => input.value.trim() !== "");
      salvarBtn.disabled = !allFilled;
      salvarBtn.classList.toggle("enabled", allFilled);
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = (document.querySelector("#nome") as HTMLInputElement).value;
      const telefone = (document.querySelector("#telefone") as HTMLInputElement).value;
      const rua = (document.querySelector("#rua") as HTMLInputElement).value;
      const numero = (document.querySelector("#numero") as HTMLInputElement).value;
      const bairro = (document.querySelector("#bairro") as HTMLInputElement).value;
      const cidade = (document.querySelector("#cidade") as HTMLInputElement).value;
      const cep = (document.querySelector("#cep") as HTMLInputElement).value;
      const complemento = (document.querySelector("#complemento") as HTMLInputElement).value;
      const tipo = (document.querySelector('input[name="tipo"]:checked') as HTMLInputElement)?.value || "";

      const novoEndereco = {
        nome,
        telefone,
        endereco: `Rua ${rua}, ${numero}, ${tipo}, ${bairro}`,
        cidade: `${cidade}, ${cep}`
      };

      const enderecosSalvos = JSON.parse(localStorage.getItem("endereco") || '[]');
      enderecosSalvos.push(novoEndereco);
      localStorage.setItem("endereco", JSON.stringify(enderecosSalvos));

      window.location.href = "/endereco"; 
    });
  }

  voltar() {
    window.history.back();
  }
}

