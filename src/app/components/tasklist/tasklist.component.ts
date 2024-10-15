
import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../../core/interfaces/task';
import { TaskitemComponent } from "../taskitem/taskitem.component";
import { TaskService } from '../../core/services/task.service';
import { ModalBodyComponent, ModalComponent, ModalContentComponent, ModalFooterComponent, ModalHeaderComponent } from '@coreui/angular';
import { log } from 'console';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [TaskitemComponent,ModalComponent,ModalFooterComponent,ModalHeaderComponent,ModalBodyComponent],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent implements OnInit{
private readonly _TaskService=inject(TaskService)
tasks:Task={} as Task
taskss:Task[]=[]


ngOnInit(): void {
  this._TaskService.gettasks().subscribe({
    next:(res)=>{
console.log(res);
this.taskss = res.slice(0,4)

    },error:(err)=>{
console.log(err);

    }
  })
}
showAlert(): void {
  alert('All changes saved!');
}

}

