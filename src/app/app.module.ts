import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SliderModule} from 'angular-double-slider';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SketchesComponent } from './components/sketches/sketches.component';
import { SketchesTagsComponent } from './components/sketches/sketches-tags/sketches-tags.component';

import { DataService } from './services/data.service';
import { ContactComponent } from './components/contact/contact.component';
import { SketchElementComponent } from './components/sketches/sketch-element/sketch-element.component';
import { SketchElementNavbarsComponent } from './components/sketches/sketch-element/sketch-element-navbars/sketch-element-navbars.component';
import { PagNotFoundComponent } from './components/pag-not-found/pag-not-found.component';
import { SketchElementNavbarsShadowsComponent } from './components/sketches/sketch-element/sketch-element-navbars/sketch-element-navbars-shadows/sketch-element-navbars-shadows.component';
import { SketchElementNavbarsNavigationComponent } from './components/sketches/sketch-element/sketch-element-navbars/sketch-element-navbars-navigation/sketch-element-navbars-navigation.component';
import { SketchElementNavbarsColorsComponent } from './components/sketches/sketch-element/sketch-element-navbars/sketch-element-navbars-colors/sketch-element-navbars-colors.component';
import { ColorSliderComponent } from './components/color-slider/color-slider.component';

const appRoutes: Routes = [
  { path: 'sketches', component: SketchesComponent },
  { path: 'sketches/navigation', component: SketchElementNavbarsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',
    redirectTo: 'sketches',
    pathMatch: 'full'
  },
  { path: '**', component: PagNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SketchesComponent,
    SketchesTagsComponent,
    ContactComponent,
    SketchElementComponent,
    SketchElementNavbarsComponent,
    PagNotFoundComponent,
    SketchElementNavbarsShadowsComponent,
    SketchElementNavbarsNavigationComponent,
    SketchElementNavbarsColorsComponent,
    ColorSliderComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), SliderModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
