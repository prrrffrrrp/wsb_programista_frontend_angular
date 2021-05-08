import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SandwichService } from '../sandwich.service';
import { Sandwich } from '../sandwich'

@Component({
  selector: 'wsb-sandwich-details',
  templateUrl: './sandwich-details.component.html',
})
export class SandwichDetailsComponent implements OnInit {

    public sandwichId = this.activatedRoute.snapshot.params.id;
    public sandwichDetails: Promise<Sandwich> = this.sandwichService.getSandwich(this.sandwichId);

  constructor(private activatedRoute: ActivatedRoute, private sandwichService: SandwichService) { }

  ngOnInit(): void {
  }

}
