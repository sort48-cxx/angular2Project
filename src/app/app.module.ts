import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestdireDirective } from './testdire.directive';
import { TestserveService} from './testserve.service'



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestdireDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TestserveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
