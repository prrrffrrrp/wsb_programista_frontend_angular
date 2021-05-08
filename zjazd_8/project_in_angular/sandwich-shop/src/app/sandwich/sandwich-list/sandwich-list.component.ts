import { Component, OnInit } from '@angular/core';
import { SandwichService } from '../sandwich.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'wsb-sandwich-list',
  templateUrl: './sandwich-list.component.html'
})

export class SandwichListComponent implements OnInit {
  

    constructor(
        private sandwichService: SandwichService,
        private formBuilder: FormBuilder
    ) {  }


    public sandwiches = this.sandwichService.getSandwiches();
    public searchForm: FormGroup;
    public ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
        query: '',
        sort: 'name',
        order: 'asc'
        });
    }

    public find(): any {
        const { query, sort, order } = this.searchForm.getRawValue();
        this.sandwiches = this.sandwichService.findSandwiches(query, sort, order);
    }
}
