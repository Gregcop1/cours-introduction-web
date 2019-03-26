import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { GameComponent } from './game/game.component';
import {createCustomElement} from '@angular/elements';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    GameComponent,
    BoardComponent
  ],
  entryComponents: [
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(GameComponent, {
      injector: this.injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('app-game', el);
  }
}
