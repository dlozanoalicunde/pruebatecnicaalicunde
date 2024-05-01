import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from '@layouts/header/header.component';
import { SkeletonComponent } from '@layouts/skeleton/skeleton.component';
import { FooterComponent } from '@layouts/footer/footer.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkeletonComponent,
    FooterComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
