import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../services/types/customers';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss'
})
export class PersonalInformationComponent implements OnInit {
  customer:Customer = {} as Customer;
  

  constructor(
      private service : CustomersService,
      private router: Router) { }


  ngOnInit() {
    const customer = this.service.getUsuarioLogado();
    if (customer) {
      this.customer = customer;
     
    };
  }
  editInformation() {
    this.router.navigate(['/customer/edit'])
  }     

  get primeiroNome(): string {
    return this.customer?.name?.split(' ')[0] || '';
  }
    
}
