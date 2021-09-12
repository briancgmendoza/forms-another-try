import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ButtonComponent } from './components/button/button.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ButtonComponent,
    FormGroupComponent,
    DropdownComponent,
    RadioButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
