export class TaskModel {
  constructor (
    public id?: number,
    public name?: string,
    public message?: string,
    public createdAt?: Date,
    public updatedAt?: Date
    ) {}
}