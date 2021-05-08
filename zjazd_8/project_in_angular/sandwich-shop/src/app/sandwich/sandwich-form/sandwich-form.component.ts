import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient, Sauce } from '../sandwich';
import { SandwichService } from '../sandwich.service';


@Component({
  selector: 'wsb-sandwich-form',
  templateUrl: './sandwich-form.component.html',
  styleUrls: ['./sandwich-form.component.css']
})
export class SandwichFormComponent implements OnInit {

  sandwichForm: FormGroup;

  showErrors: boolean = false;

  sauces = [
    { label: 'None', value: Sauce.None },
    { label: 'Mustard sauce', value: Sauce.Mustard },
    { label: 'Mayonnaise sauce', value: Sauce.Mayo },
    { label: 'Barbeque sauce', value: Sauce.Bbq },
  ];

  constructor(private formBuilder: FormBuilder, private sandwichService: SandwichService) { }

  ngOnInit(): void {

      this.sandwichForm = this.formBuilder.group({
        name: [
            '', 
            [Validators.minLength(5), Validators.maxLength(20)]
        ],
        ingredients: this.formBuilder.group({
            [Ingredient.Cheese]: false,
            [Ingredient.Lettuce ]: false,
            [Ingredient.Chorizo ]: false,
            [Ingredient.Tomato ]: false,
            [Ingredient.Ham ]: false
        }),
        sauce: Sauce.Bbq,
        vege: false,
        price: [0, Validators.max(20)]
      });
  }

  mapIngredients(ingredients: object) {
      // {lettuce: false, tomato: true, ...} --> ['tomato', ...]
      // 1. Object.entries({lettuce: false}) --> [ [ 'lettuce', false ] ]
      // 2. [tomato, true]
      // 3. [tomato]
      return Object.entries(ingredients)
            .filter(ingredient => ingredient[1]) // .filter(([, checked]) => checked)
            .map(ingredient => ingredient[0]) // .map(([ingredient]) => ingredient)
  }

  save(): void {
      this.showErrors = true;

      if (this.sandwichForm.valid) {
      const formValue = this.sandwichForm.getRawValue();
      const checkedIngredients = this.mapIngredients(formValue.ingredients);
      const sandwich = { ...formValue, ingredients: checkedIngredients };

      this.sandwichService.postSandwich(sandwich);
      }
  }
}
