import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CurrencyConverterModule } from './currency-converter/currency-converter.module';

@NgModule({
  imports: [CurrencyConverterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
