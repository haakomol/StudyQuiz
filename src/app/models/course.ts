
export class Course {

  constructor(private name: string, private code: string) { }

  public getName(): string { return this.name; }
  public getCode(): string { return this.code; }
}
