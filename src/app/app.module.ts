import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ServiceDemoComponent } from './components/service-demo/service-demo.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { DataService } from './services/data.service';
import { BookService } from './services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './components/book/book.component';
import { DepartmentComponent } from './components/department/department.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DirectivesComponent,
    DataBindingComponent,
    PipeDemoComponent,
    ReplacePipe,
    ParentComponent,
    ChildComponent,
    RegistrationFormComponent,
    ServiceDemoComponent,
    ViewBookComponent,
    BookComponent,
    DepartmentComponent,
    DepartmentDetailsComponent,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
    DataService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
