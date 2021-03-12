import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { HeaderComponent } from 'src/components/header/header.component';
import { SubHeaderComponent } from 'src/components/sub-header/sub-header.component';
import { MigalhaComponent } from 'src/components/migalha/migalha.component';
import { FilterComponent } from 'src/components/filter/filter.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SubHeaderComponent,
    MigalhaComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
