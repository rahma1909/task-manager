import { Component, inject,  OnInit } from '@angular/core';
import { Task } from '../../core/interfaces/task';
import { NgClass, NgStyle } from '@angular/common';
import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-taskitem',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './taskitem.component.html',
  styleUrl: './taskitem.component.scss'
})
export class TaskitemComponent implements OnInit{
  private readonly _TaskService = inject(TaskService);
  taskss: Task[] = []; 

  ngOnInit(): void {
    this._TaskService.gettasks().subscribe({
      next: (res: Task[]) => {
        this.taskss = res.slice(0, 4); 
      },
      error: (err) => {
        console.error('Error fetching tasks:', err);
      }
    });
  }

  
  toggleCompletion(taskId: number): void {
    const task = this.taskss.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed; 
    }
}
}
