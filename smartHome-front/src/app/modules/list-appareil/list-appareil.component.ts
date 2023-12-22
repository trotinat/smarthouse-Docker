import {Component, OnInit} from '@angular/core';
import {AppareilsService} from '../../controller/service/appareils.service';
import {Appareil} from "../../controller/model/Appareil";
import {Categorie} from "../../controller/model/Categorie";
import {MessageService} from 'primeng/api';
import {compareWithIds} from "../../controller/utils/global-method";

@Component({
  selector: 'app-list-appareil',
  templateUrl: './list-appareil.component.html',
})
export class ListAppareilComponent implements OnInit {
  displaySaveDialog = false;
  appareils: Appareil[] = [];
  categories: Categorie[] = [];

  newAppareil: Appareil = new Appareil();

  constructor(private appareilService: AppareilsService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.findAllCategories();
  }


  findAll(): void {
    this.appareilService.findAll().subscribe(
      (data) => {
        this.appareils = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  findAllCategories(): void {
    this.appareilService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }


  openSaveDialog(): void {
    this.displaySaveDialog = true;
  }


  onFileSelect(event: any): void {
    const file = event.files && event.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          this.newAppareil.photo = reader.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }


  save(): void {
    console.log(this.newAppareil)
    this.appareilService.saveAppareil(this.newAppareil).subscribe(
      (response) => {
        this.appareils.unshift({...response})
        this.displaySaveDialog = false
        this.showUpdateToast("Item added successfully ", "success", "done")
      },
      (error) => {
        this.showUpdateToast(error?.error?.message || "something went wrong", "error", "error")
      }
    );
  }


  private showUpdateToast(message: string, severity: string, summary: string): void {
    this.messageService.add({severity: severity, summary: summary, detail: message});
  }


  delete(id: any): void {
    this.appareilService.deleteAppareil(id).subscribe(
      () => {
        this.findAll();
      },
      (error) => {
        console.log("id", id);
        console.error('Error deleting appareil:', error);
      }
    );
  }


  update(appareil: Appareil): void {
    const updatedAppareil: { id?: number; state?: boolean } = {
      id: appareil.id,
      state: appareil.state,
    };
    this.appareilService.updateAppareil(appareil.id, updatedAppareil).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.error(error);
      }
    );
  }


  switch_on_or_off(state: boolean): void {
    this.appareilService.switchState(state).subscribe(
      () => {
        this.findAll();
      },
      (error) => {
        console.error(error);
      }
    );
  }


  protected readonly compareWithIds = compareWithIds;
}

