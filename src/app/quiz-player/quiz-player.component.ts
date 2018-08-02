import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { QuizPlayer, State } from '../controllers/quiz-player';
import { MatDialog } from '@angular/material';
import { CustomDialogData, CustomizableDialogComponent } from '../customizable-dialog/customizable-dialog.component';

@Component({
  selector: 'app-quiz-player',
  templateUrl: './quiz-player.component.html',
  styleUrls: ['./quiz-player.component.css']
})
export class QuizPlayerComponent implements OnInit {
  quizPlayer: QuizPlayer;
  StateEnum = State;             // to reference State values in template
  alternativesClassesAfterAnswer = [];

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getQuizPlayer();
  }

  getQuizPlayer() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id)
      .then(quiz => this.quizPlayer = new QuizPlayer(quiz)
    );
  }

  goBack() {
    this.location.back();
  }

  start() {
    this.quizPlayer.start();
  }

  summary() {
    this.quizPlayer.summary();
  }

  quitQuiz() {
    const dialogData: CustomDialogData = {
      title: 'Avslutt quiz',
      contentText: 'Er du sikker?',
      buttonConfirmText: 'Ja',
      buttonCancelText: 'Nei',
      navigateHomeOnConfirm: true,
    };

    this.dialog.open(CustomizableDialogComponent, {
      data: dialogData,
      width: '250px',
      autoFocus: false
    });
  }

  answer(alternativeNo: number) {
    if (!this.quizPlayer.answerGiven) {
      this.quizPlayer.answer(alternativeNo);
      this.setAlternativesClassesAfterAnswer();
    }
  }

  nextExercise() {
    this.quizPlayer.loadNextExercise();
    this.alternativesClassesAfterAnswer = [];
  }

  setAlternativesClassesAfterAnswer() {
    const answeredAlternativeNo = this.quizPlayer.answeredAlternativeNo;
    const correctAlternativeNo = this.quizPlayer.correctAlternativeNo;
    const isAnswerCorrect = answeredAlternativeNo === correctAlternativeNo;

    for (let index = 0; index < this.quizPlayer.alternatives.length; index++) {
      const currentAlternativeNo = index + 1;
      const classesForCurrentAlternative = {
        'correct-answer': answeredAlternativeNo === currentAlternativeNo && isAnswerCorrect,
        'incorrect-answer': answeredAlternativeNo === currentAlternativeNo && !isAnswerCorrect,
        'correct-alternative': correctAlternativeNo === currentAlternativeNo,
      };
      this.alternativesClassesAfterAnswer.push(classesForCurrentAlternative);
    }
  }
}
