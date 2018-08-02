import { Exercise } from './exercise';
import { Course } from './course';

export class Quiz {
  id: number;
  name: string;
  description: string;
  course: Course;
  exercises: Exercise[] = [];

  public getName(): string { return this.name; }
  public setName(name: string) { this.name = name; }

  public getDescription(): string { return this.description; }
  public setDescription(description: string) { this.description = description; }

  public getCourse(): Course { return this.course; }
  public setCourse(course: Course) { this.course = course; }

  public getExercises(): Exercise[] { return this.exercises; }

  public addExercise(exercise: Exercise) {
    this.exercises.push(exercise);
  }

  public removeExercise(index: number) {
    if (index >= 0 && index < this.exercises.length) {
      this.exercises.splice(index, 1);
    }
  }

  public getNumberOfExercises() {
    return this.exercises.length;
  }
}
