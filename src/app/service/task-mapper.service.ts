import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { AppModel, Category} from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class TaskMapperService {

  constructor() { }

  public taskModel(appModel: AppModel) {
    if (!appModel) {
      return null;
    }
    return new TaskModel(
      null,
      appModel.title,
      appModel.text
      );
  }

  public toAppModel(taskModel: TaskModel) {
    if (!taskModel) {
      return null;
    }
    return new AppModel(
      taskModel.name ,
      false,
      Category.BILLING,
      taskModel.message
    )
  };
}
