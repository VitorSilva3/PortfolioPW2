import { Component, OnInit } from '@angular/core';
import { PhonebookService } from 'src/app/services/phonebook.service';

@Component({
  selector: 'app-clinica-veterenaria',
  templateUrl: './clinica-veterenaria.component.html',
  styleUrls: ['./clinica-veterenaria.component.css']
})
export class ClinicaVeterenariaComponent implements OnInit {

  nomeService: PhonebookService;
  constructor(ns:PhonebookService) {
    this.nomeService = ns;
   }

  ngOnInit(): void {
  }

}
