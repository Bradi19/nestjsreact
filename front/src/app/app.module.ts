import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './start/start.component';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {TranslateService} from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    HeaderComponent,
    StartComponent,
    ContentComponent,
    AppComponent,
    FooterComponent,
    PageNotFoundComponentComponent,
    MainComponent,
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: 'ru'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor(public translate: TranslateService){
     
   }
}
