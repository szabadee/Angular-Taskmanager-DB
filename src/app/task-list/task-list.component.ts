import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppModel, AppInterface } from '../app.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public taskModel = new AppModel();


  constructor() { }

  public showNewTask(modalContent: TemplateRef<any>) {
    this.taskModel = new AppModel();
    this.modalRef = this.modalService.show(modalContent);
  }

  public editList(index: number, modalContent: TemplateRef<any>) {
    this.taskModel = this.tasks[index];
    this.modalRef = this.modalService.show(modalContent);
  }

  ngOnInit() {
  }

}
