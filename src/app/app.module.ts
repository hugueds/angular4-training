import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { Highlight2Directive } from './shared/highlight2.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FundoAmareloDirective,
    HighlightDirective,
    Highlight2Directive,
    NgElseDirective,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
