import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRouting, appRoutingProviders } from './app.routing';

import { MainMenuComponent } from './shared/index';

import { CurrencyConverterModule } from './+currency-converter/currency-converter.module';
import { QuizModule } from './+quiz/quiz.module';



@NgModule({
  imports: [
    appRouting,
    CurrencyConverterModule,
    QuizModule
  ],
  declarations: [
    AppComponent,

    MainMenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
