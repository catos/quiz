import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appRouting, appRoutingProviders } from './app.routing';

import { MainMenuComponent, StartPageComponent } from './_layout/index';

import { CurrencyConverterModule } from './currency-converter/currency-converter.module';
import { QuizModule } from './quiz/quiz.module';



@NgModule({
  imports: [
    appRouting,
    CurrencyConverterModule,
    QuizModule
  ],
  declarations: [
    AppComponent,

    MainMenuComponent,
    StartPageComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
