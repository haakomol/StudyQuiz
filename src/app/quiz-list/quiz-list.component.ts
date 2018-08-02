import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { QuizService, QuizEntry } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  quizzesList: QuizEntry[];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    // this.quizService.getQuizzes()
    //   .subscribe(quizzes => this.quizzes = quizzes);
    this.quizService.getQuizzesList()
      .then(quizzesList => this.quizzesList = quizzesList);
  }
}
