import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizPlayerComponent } from './quiz-player/quiz-player.component';
import { LoadingDisplayComponent } from './loading-display/loading-display.component';
import { QuizEditorComponent } from './quiz-editor/quiz-editor.component';
import { CustomizableDialogComponent } from './customizable-dialog/customizable-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizPlayerComponent,
    LoadingDisplayComponent,
    QuizEditorComponent,
    CustomizableDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialImportsModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  entryComponents: [
    CustomizableDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
