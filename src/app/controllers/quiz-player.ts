import { Quiz } from '../models/quiz';
import { Exercise } from '../models/exercise';

export enum State { Intro, Playing, Summary }

export class QuizPlayer {
  quiz: Quiz;
  quizName: string;
  quizDescription: string;
  nExercises: number;

  state: State;
  activeExerciseNo = 0;
  activeExercise: Exercise;
  question: string;
  explanation: string;
  alternatives: string[];
  numberOfAlternatives: number;
  correctAlternativeNo: number;
  answerGiven: boolean;
  answeredAlternativeNo: number;
  answerHistory: number[] = [];
  nCorrectAnswers = 0;

  constructor(quiz: Quiz) {
    this.quiz = quiz;
    this.quizName = quiz.name;
    this.quizDescription = quiz.description;
    this.nExercises = quiz.getNumberOfExercises();
    this.state = State.Intro;
  }

  start() {
    this.loadNextExercise();
    this.state = State.Playing;
  }

  summary() {
    this.state = State.Summary;
  }

  loadNextExercise() {
    if (this.activeExerciseNo >= this.nExercises) { return; }

    this.activeExerciseNo++;
    this.activeExercise = this.quiz.getExercises()[this.activeExerciseNo - 1];

    const alternatives = this.activeExercise.getIncorrectAnswers();
    const numberOfAlternatives = alternatives.length + 1;
    this.shuffleArray(alternatives);
    const correctIndex = this.getRandomInt(0, numberOfAlternatives);
    alternatives.splice(correctIndex, 0, this.activeExercise.correctAnswer);

    this.question = this.activeExercise.question;
    this.explanation = this.activeExercise.explanation;
    this.alternatives = alternatives;
    this.numberOfAlternatives = numberOfAlternatives;
    this.correctAlternativeNo = correctIndex + 1;
    this.answerGiven = false;
  }

  answer(answeredAlternativeNo: number) {
    this.answerHistory.push(answeredAlternativeNo);

    if (answeredAlternativeNo === this.correctAlternativeNo) {
      this.nCorrectAnswers++;
    }

    this.answeredAlternativeNo = answeredAlternativeNo;
    this.answerGiven = true;
  }

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }
}
