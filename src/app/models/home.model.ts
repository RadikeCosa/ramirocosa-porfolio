export class Home {
  id?: number;
  name: String;
  lastName: String;
  title: String;
  title2: String;
  cap: String;
  cap2: String;

  constructor(
    name: String,
    lastName: String,
    title: String,
    title2: String,
    cap: String,
    cap2: String
  ) {
    this.name = name;
    this.lastName = lastName;
    this.title = title;
    this.title2 = title2;
    this.cap = cap;
    this.cap2 = cap2;
  }
}
