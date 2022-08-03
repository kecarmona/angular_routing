import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExtranjeroService } from './extranjero.service';

@Component({
  selector: 'app-extranjero',
  templateUrl: './extranjero.component.html',
  styleUrls: ['./extranjero.component.css'],
})
export class ExtranjeroComponent implements OnInit {
  reponse: any;
  constructor(
    private aRouter: ActivatedRoute,
    private extSrv: ExtranjeroService
  ) {}

  ngOnInit(): void {
    console.log(this.aRouter.snapshot.paramMap.get('id'));
    this.extSrv.getExteranjeroInf().subscribe((data) => {
      this.reponse = data;
    });
  }
}
