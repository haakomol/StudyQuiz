import { Quiz } from '../models/quiz';
import { Exercise } from '../models/exercise';

export class MockDataGenerators {

  static getQuizzes(): Quiz[] {

    const quiz1: Quiz = new Quiz();
    quiz1.id = 1;
    quiz1.setName('Universet');
    quiz1.setDescription('Hvor godt kjent er du utenfor vår egen atmosfære?');

    const exercise1: Exercise = new Exercise();
    exercise1.setQuestion('Hvor mange kjente planeter er det i solsystemet?');
    exercise1.setCorrectAnswer('8');
    exercise1.addIncorrectAnswer('7');
    exercise1.addIncorrectAnswer('9');
    exercise1.addIncorrectAnswer('10');
    exercise1.explanation = 'De 8 kjente planetene i solsystemet er Merkur, Venus, Jorden, Mars, Jupiter, Saturn, Uranus og Neptun. ' +
      'Pluto ble i 2006 degradert til dvergplanet.';
    quiz1.addExercise(exercise1);

    const exercise2: Exercise = new Exercise();
    exercise2.setQuestion('Hvilken av gasskjempene er størst, både i masse og volum?');
    exercise2.setCorrectAnswer('Jupiter');
    exercise2.addIncorrectAnswer('Saturn');
    exercise2.addIncorrectAnswer('Uranus');
    exercise2.addIncorrectAnswer('Neptun');
    exercise2.explanation = 'Med sine 318 jordmasser har Jupiter 2,5 ganger så mye masse som alle de andre planetene til sammen.';
    quiz1.addExercise(exercise2);

    const exercise3: Exercise = new Exercise();
    exercise3.setQuestion('Hvilken planet i solsystemet har flest måner?');
    exercise3.setCorrectAnswer('Jupiter');
    exercise3.addIncorrectAnswer('Saturn');
    exercise3.addIncorrectAnswer('Uranus');
    exercise3.addIncorrectAnswer('Neptun');
    exercise3.addIncorrectAnswer('Mars');
    exercise3.explanation = 'Jupiter vinner her også, med 79 måner. Saturn har 62 måner, Uranus har 27 måner, ' +
      'Neptun har 14 måner, og Mars har 2 måner.';
    quiz1.addExercise(exercise3);

    const exercise4: Exercise = new Exercise();
    exercise4.setQuestion('Hvor mange stjerner er det vår galakse, melkeveien?');
    exercise4.setCorrectAnswer('Omtrent 250 milliarder');
    exercise4.addIncorrectAnswer('Omtrent 650 millioner');
    exercise4.addIncorrectAnswer('Omtrent 3,5 billioner');
    exercise4.addIncorrectAnswer('Omtrent 700 000');
    quiz1.addExercise(exercise4);

    const quiz2: Quiz = new Quiz();
    quiz2.id = 2;
    quiz2.setName('Molekylærbiologi');
    quiz2.setDescription('');

    const exercise21: Exercise = new Exercise();
    exercise21.setQuestion('Hva heter molekylet som brukes ');
    exercise21.setCorrectAnswer('8');
    exercise21.addIncorrectAnswer('7');
    exercise21.addIncorrectAnswer('9');
    exercise21.addIncorrectAnswer('10');
    quiz2.addExercise(exercise21);

    const exercise22: Exercise = new Exercise();
    exercise22.setQuestion('Hvilken planet er nærmest sola?');
    exercise22.setCorrectAnswer('Merkur');
    exercise22.addIncorrectAnswer('Venus');
    exercise22.addIncorrectAnswer('Saturn');
    exercise22.addIncorrectAnswer('Jorda');
    quiz2.addExercise(exercise22);

    const exercise23: Exercise = new Exercise();
    exercise23.setQuestion('Hvilken planet i solsystemet har flest måner?');
    exercise23.setCorrectAnswer('Jupiter');
    exercise23.addIncorrectAnswer('Saturn');
    exercise23.addIncorrectAnswer('Uranus');
    exercise23.addIncorrectAnswer('Neptun');
    quiz2.addExercise(exercise23);

    const exercise24: Exercise = new Exercise();
    exercise24.setQuestion('Hvor mange stjerner er det vår galakse, melkeveien?');
    exercise24.setCorrectAnswer('Omtrent 250 milliarder');
    exercise24.addIncorrectAnswer('Omtrent 650 millioner');
    exercise24.addIncorrectAnswer('Omtrent 3,5 billioner');
    exercise24.addIncorrectAnswer('Omtrent 700 000');
    quiz2.addExercise(exercise24);

    return [ quiz1, quiz2 ];
  }
}
