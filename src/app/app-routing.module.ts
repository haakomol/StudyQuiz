import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizPlayerComponent } from './quiz-player/quiz-player.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizEditorComponent } from './quiz-editor/quiz-editor.component';

const appRoutes: Routes = [
  { path: '', component: QuizListComponent },
  { path: 'play/:id', component: QuizPlayerComponent },
  { path: 'edit/new', component: QuizEditorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
