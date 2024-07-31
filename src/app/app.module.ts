import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { userReducer } from './+state/user.reducers';
import { UserEffects } from './+state/user.effects';
import { StoreDevtools } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ users: userReducer }),
    EffectsModule.forRoot([UserEffects]),
    HomeModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
