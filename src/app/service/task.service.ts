import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TaskMapperService } from './task-mapper.service';
import { AppModel } from '../app.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private SPACEX_BASE_URL = 'https://api.spacexdata.com/v2';
  private BASE_URL = environment.globalUrl;

  constructor(
    private httpClient: HttpClient,
    private taskMapper: TaskMapperService
  ) { }

  public getRockets(): Observable<{name: string, id: string, rocketid: number}[]> {
    return this.httpClient.get<{name: string, id: string, rocketid: number}[]>(this.SPACEX_BASE_URL + '/rockets');
  }

  public getTasks(): Observable<AppModel[]> {
    return this.httpClient
      .get<TaskModel[]>(this.BASE_URL + '/tasks/')
      .pipe(map( (tasks: TaskModel[]) => {
        return tasks.map(
          task => this.taskMapper.toAppModel(task)
        );
      }
      )
    ); 
  }
}
