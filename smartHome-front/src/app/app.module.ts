import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListAppareilComponent } from './modules/list-appareil/list-appareil.component';
import {FormsModule} from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import {AvatarModule} from "primeng/avatar";
import { InputTextModule } from 'primeng/inputtext';
import {InputSwitchModule} from "primeng/inputswitch";
import { ImageModule } from 'primeng/image';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TagModule} from "primeng/tag";
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";
import {HttpClientModule} from "@angular/common/http";
import {DialogModule} from "primeng/dialog";
import { NavbarComponent } from './modules/navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import { CategoriesComponent } from './modules/categories/categories.component';
import { AppRoutingModule } from './app-routing.module';
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {ToastModule} from "primeng/toast";
import {FileUploadModule} from "primeng/fileupload";
import {MessageService} from "primeng/api";
@NgModule({
  declarations: [
    AppComponent,
    ListAppareilComponent,
    NavbarComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    AvatarModule,
    InputTextModule,
    InputSwitchModule,
    ImageModule,
    TagModule,
    DividerModule,
    CardModule,
    HttpClientModule,
    DialogModule,
    MenubarModule,
    AppRoutingModule,
    TableModule,
    DropdownModule,
    ToastModule,
    FileUploadModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
