
export class Exercise {

  question: string;
  correctAnswer: string;
  incorrectAnswers: string[] = [];
  explanation: string;

  public getQuestion(): string { return this.question; }
  public setQuestion(question: string) { this.question = question; }

  public getCorrectAnswer(): string { return this.correctAnswer; }
  public setCorrectAnswer(correctAnswer: string) { this.correctAnswer = correctAnswer; }

  public getIncorrectAnswers(): string[] { return this.incorrectAnswers; }

  public addIncorrectAnswer(incorrectAnswer: string) {
    this.incorrectAnswers.push(incorrectAnswer);
  }

  public removeIncorrectAnswer(index: number) {
    if (index >= 0 && index < this.incorrectAnswers.length) {
      this.incorrectAnswers.splice(index, 1);
    }
  }
}
