import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ButtonComponent } from './components/button/button.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { LabelComponent } from './components/label/label.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ButtonComponent,
    FormGroupComponent,
    DropdownComponent,
    RadioButtonComponent,
    LabelComponent,
    TitleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
