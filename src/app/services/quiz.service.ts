import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Quiz } from '../models/quiz';
import { Exercise } from '../models/exercise';

import { API_URL } from '../app-variables';

export interface QuizEntry {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  apiUrl = API_URL;

  constructor(private http: HttpClient) { }

  getQuizzesList(): Promise<QuizEntry[]> {
    return this.http.get(`${this.apiUrl}/quizzes-list`).toPromise().then(
      responseData => {
        const quizListData = responseData['Items'] as QuizEntry[];
        quizListData.sort(function (a, b) {
          return a.id - b.id;
        });
        return quizListData;
      }
    );
  }

  getQuiz(id: number): Promise<Quiz> {
    return this.http.get(`${this.apiUrl}/quiz/${id}`).toPromise().then(
      quizData => {
        return this.loadQuizData(quizData['Item']);
      });
  }

  putQuiz(quizData) {
    return this.http.put(`${this.apiUrl}/put-quiz`, quizData);
  }

  loadQuizData(quizData): Quiz {
    const quiz = new Quiz();
    quiz.id = quizData['id'];
    quiz.name = quizData['name'];
    quiz.description = quizData['description'];

    const exercisesData = quizData['exercises'];
    exercisesData.forEach(exerciseData => {
      const exercise = new Exercise();
      exercise.question = exerciseData['question'];
      exercise.correctAnswer = exerciseData['correctAnswer'];
      exercise.incorrectAnswers = exerciseData['incorrectAnswers'];
      exercise.explanation = exerciseData['explanation'];
      quiz.addExercise(exercise);
    });

    return quiz;
  }
}
