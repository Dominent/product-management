import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { categoryReducer } from './store/reducers/category.reducer';
import { productReducer } from './store/reducers/product.reducer';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { AddCategoryDialogComponent } from './components/categories/add-category/add-category.component';
import { AddProductDialogComponent } from './components/products/add-product/add-product.component';
import { EditCategoryDialogComponent } from './components/categories/edit-category/edit-category.component';
import { EditProductDialogComponent } from './components/products/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/shared/confirmation/confirmation.component';
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductsComponent,

    AddCategoryDialogComponent,
    EditCategoryDialogComponent,
    AddProductDialogComponent,
    EditProductDialogComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot({
      categories: categoryReducer,
      products: productReducer
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    AddCategoryDialogComponent,
    EditCategoryDialogComponent,
    AddProductDialogComponent,
    EditProductDialogComponent,
    ConfirmationDialogComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'} /* dd/MM/yyyy format for datepicker */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
