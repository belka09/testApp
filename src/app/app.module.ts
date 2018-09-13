import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// components
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AppBodyComponent } from './components/body/body.component';
import { CardComponent } from './components/card/card.component';
import { Main3Component } from './components/main3/main3.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';

// partials
import { ModalWindowComponent } from './partials/modal-window/modal-window.component';
import { StarsComponent } from './partials/stars/stars.component';
import { ButtonComponent } from './partials/button/button.component';
import { MatInputComponent } from './partials/mat-input/mat-input.component';

// guards
import { CanActivateViaAuthGuard } from './guards/auth-guard.service';

// directives
import { RestrictDirective } from './directives/restrict.directive';

//services
import { PassDataService } from './services/pass-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AppBodyComponent,
    CardComponent,
    StarsComponent,
    ButtonComponent,
    Main3Component,
    MatInputComponent,
    RestrictDirective,
    CardFooterComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CanActivateViaAuthGuard,PassDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
