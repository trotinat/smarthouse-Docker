import { Component, OnInit } from '@angular/core';
import {Categorie} from "../../controller/model/Categorie";
import {CategorieService} from "../../controller/service/categorie.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categorie[] = [];
  displaySaveDialog = false;
  displayUpdateDialog = false;

  newCategorie: Categorie = {
    id: 0,
    label: '',
  };
  selectedCategorie: Categorie = { id: 0, label: '' };


  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categorieService.findAll().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }


  /************************ Save Dialog  ***********************/

  openSaveDialog(): void {
    this.displaySaveDialog = true;
  }

  openUpdateDialog(categorie: Categorie): void {
    // Set the selected category for update
    this.selectedCategorie = { ...categorie };
    // Open the update dialog
    this.displayUpdateDialog = true;
  }


  /************************ Save cat ***********************/


  saveCategorie(): void {
    this.categorieService.saveCategory(this.newCategorie).subscribe(
      (savedCategorie) => {
        console.log("saved cat",savedCategorie);
        this.displaySaveDialog = false;
        this.loadCategories();
      },
      (error) => {
        console.error('Error saving cat:', error);
      }
    );
  }

  /************************ Delete cat ***********************/

  daleteCategorie(id: number): void {
    this.categorieService.deleteCategorie(id).subscribe(
      () => {
        this.loadCategories();
      },
      (error) => {
        console.log("id",id);
        console.error('Error deleting cat:', error);
      }
    );
  }

  // updateCategorie(categorie: Categorie): void {
  //   const updatedCategorie: { id: number; label: string } = {
  //     id: categorie.id,
  //     label: categorie.label,
  //   };
  //   this.categorieService.updateCategorie(categorie.id, updatedCategorie).subscribe(
  //     () => {
  //       console.log("cat state updated successfully");
  //     },
  //     (error) => {
  //       console.error('Error updating cat:', error);
  //     }
  //   );
  // }

  updateCategorie(): void {
    this.categorieService.updateCategorie(this.selectedCategorie.id, { label: this.selectedCategorie.label }).subscribe(
      () => {
        console.log("Category updated successfully");
        this.displayUpdateDialog = false;
        this.loadCategories(); // Reload categories after update
      },
      (error) => {
        console.error('Error updating category:', error);
      }
    );
  }


}
