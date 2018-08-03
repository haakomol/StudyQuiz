import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { QuizService } from '../services/quiz.service';
import { CustomizableDialogComponent, CustomDialogData } from '../customizable-dialog/customizable-dialog.component';

const maxQuestions = 20;
const maxIncorrectAnswers = 5;

@Component({
  selector: 'app-quiz-editor',
  templateUrl: './quiz-editor.component.html',
  styleUrls: ['./quiz-editor.component.css']
})
export class QuizEditorComponent implements OnInit {
  quizName: string;
  quizDescription: string;
  questions = [];

  isSubmitInProgress = false;

  constructor(
    private quizService: QuizService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.addQuestion();
  }

  addQuestion() {
    if (!this.isMaxQuestions()) {
      this.questions.push({
        question: '',
        correctAnswer: '',
        incorrectAnswers: ['', '', ''],
        explanation: ''
      });
    }
  }

  removeQuestion() {
    if (!this.isMinQuestions()) {
      this.questions.pop();
    }
  }

  isMinQuestions() {
    return this.questions.length <= 1;
  }

  isMaxQuestions() {
    return this.questions.length >= maxQuestions;
  }

  addIncorrectAnswerForQuestion(i: number) {
    if (!this.isMaxIncorrectAnswersForQuestion(i)) {
      this.questions[i].incorrectAnswers.push('');
    }
  }

  removeIncorrectAnswerForQuestion(i: number) {
    if (!this.isMinIncorrectAnswersForQuestion(i)) {
      this.questions[i].incorrectAnswers.pop();
    }
  }

  isMinIncorrectAnswersForQuestion(i) {
    return this.questions[i].incorrectAnswers.length <= 1;
  }

  isMaxIncorrectAnswersForQuestion(i: number) {
    return this.questions[i].incorrectAnswers.length >= maxIncorrectAnswers;
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  debug() {
    console.log(this.questions);
  }

  onSubmit() {
    this.isSubmitInProgress = true;
    const quizData = {};
    quizData['name'] = this.quizName;
    quizData['description'] = this.quizDescription;
    quizData['exercises'] = this.questions;

    console.log('quizData:');
    console.log(quizData);

    this.quizService.putQuiz(quizData)
      .subscribe(result => {
        if (!result) {
          this.showSuccessDialogAndLeave();
        } else {
          console.log('Noe gikk galt...');
          this.isSubmitInProgress = false;
        }
      });
  }

  showSuccessDialogAndLeave() {
    const dialogData: CustomDialogData = {
      title: 'Quiz opprettet',
      contentText: 'Din quiz er lagret og publisert!',
      buttonConfirmText: 'Ok',
      navigateHomeOnConfirm: true,
    };

    this.dialog.open(CustomizableDialogComponent, {
      data: dialogData,
      width: '300px',
      autoFocus: false
    });
  }

  cancel() {
    const dialogData: CustomDialogData = {
      title: 'Avbryt',
      contentText: 'Er du sikker?',
      buttonConfirmText: 'Ja',
      buttonCancelText: 'Nei',
      navigateHomeOnConfirm: true,
    };

    const dialogRef = this.dialog.open(CustomizableDialogComponent, {
      data: dialogData,
      width: '250px',
      autoFocus: false
    });
  }
}
