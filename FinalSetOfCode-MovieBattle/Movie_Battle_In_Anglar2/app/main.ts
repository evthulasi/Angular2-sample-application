import { bootstrap } from 'angular2/platform/browser';
//import {provideStore} from '@ngrx/store';
//import {items,ItemsService,selectedItem} from './movie/items';

// Our main component
import { AppComponent } from './app.component';

bootstrap(AppComponent)
  .catch(err => console.error(err));
