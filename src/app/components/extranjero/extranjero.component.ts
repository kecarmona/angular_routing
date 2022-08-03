import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-extranjero',
  templateUrl: './extranjero.component.html',
  styleUrls: ['./extranjero.component.css'],
})
export class ExtranjeroComponent implements OnInit {
  constructor(private aRouter: ActivatedRoute) {
    console.log(this.aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {}
}
