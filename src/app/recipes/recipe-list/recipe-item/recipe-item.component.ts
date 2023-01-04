import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
  openRecipe(event) {
    this.selectedRecipe.emit();
    if (event.target.name || event.target.textContent) {
    }
    let tempdata: string = event.target.name;
    console.log(this.selectedRecipe);
  }
}
