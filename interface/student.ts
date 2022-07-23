export class Student {
  _id: string;
  name: string;
  email: string;
  cohort: number;
  phoneNumber: string;

  constructor(
    id?: string,
    name?: string,
    email?: string,
    cohort?: number,
    phoneNumber?: string
  ) {
    this._id = id!;
    this.name = name!;
    this.email = email!;
    this.cohort = cohort!;
    this.phoneNumber = phoneNumber!;
  }
}
