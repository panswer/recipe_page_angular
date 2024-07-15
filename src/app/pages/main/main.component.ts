import { Component } from '@angular/core';
import { ImageComponent } from '../../components/atoms/image/image.component';
import { TitleComponent } from "../../components/atoms/title/title.component";
import { SimpleTextComponent } from "../../components/atoms/simple-text/simple-text.component";
import { BoxListComponent } from '../../components/organisms/box-list/box-list.component';
import { SubTitleComponent } from '../../components/atoms/sub-title/sub-title.component';
import { ListComponent } from '../../components/molecules/list/list.component';
import { InstructionItem } from "../../interfaces/instruction-item";
import { SortListComponent } from '../../components/molecules/sort-list/sort-list.component';
import { ListItemDirective } from '../../directives/list-item.directive';
import { TableComponent } from '../../components/molecules/table/table.component';
import { TableItem } from '../../interfaces/table-item';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ImageComponent,
    TitleComponent,
    SimpleTextComponent,
    BoxListComponent,
    SubTitleComponent,
    ListComponent,
    SortListComponent,
    ListItemDirective,
    TableComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  omeletteSrc = "/static/images/image-omelette.jpeg";
  omeletteAlt = "Omelette image";
  preparationTime: Record<string, string> = {
    tota: "Approximately 10 minutes",
    preparation: "5 minutes",
    cooking: "5 minutes",
  };
  imgredients: string[] = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter of oil",
    "Optional fillings: cheese, djced vegetables, cooked meats, herbs"
  ];
  instructions: InstructionItem[] = [{
    description: "In a bowl, beat the eggs with pinch of salt and pepper until they are well mixed. You can add a tablespoon of whater of milk for a fluffier texture.",
    title: "Beat the eggs",
  }, {
    description: "Place a non-stick frying pan over medium heat and add butter or oil.",
    title: "Heat the pan",
  }, {
    description: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    title: "Cook the omelette",
  }, {
    description: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over half of the omelette.",
    title: "Add fillings (optional)"
  }, {
    description: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    title: "Fold and serve"
  }, {
    description: "Serve hot, with additional salt and pepper if needed",
    title: "Enjoy",
  }];
  steps = this.instructions.map(instruction => instruction.title);
  nutritionTableItems: TableItem[] = [{
    attribute: "Calories",
    value: "277kcal"
  }, {
    attribute: "Carbs",
    value: "0g"
  }, {
    attribute: "Protein",
    value: "20g"
  }, {
    attribute: "Fat",
    value: "22g"
  }];

  getInstructionDescription(title: string): string | undefined {
    return this.instructions.find(instruction => instruction.title === title)?.description;
  }
}
