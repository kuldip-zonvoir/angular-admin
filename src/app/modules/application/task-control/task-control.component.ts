import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Task } from "src/app/partials/core/data_madals/task-maneger.modal";
import { FakeApiService } from "src/app/partials/core/fake_api.service";
import { SharemeService } from "src/app/partials/core/shareme.service";

@Component({
  selector: "app-task-control",
  templateUrl: "./task-control.component.html",
  styleUrls: ["./task-control.component.scss"],
})
export class TaskControlComponent implements OnInit {
  taskDialog: boolean;
  addTask: boolean;
  isCompleted: boolean;
  taskform: FormGroup;
  bsValue = new Date();
  task: Task;
  keyword: string;
  taskName = "Create the landing page on the beta channel";
  taskDetails =
    " lorem qui ipsum deserunt duis exercitation lorem elit qui qui ipsum tempor nulla velit aliquip enim consequat incididunt pariatur duis excepteur elit irure nulla ipsum dolor dolore est.";
  constructor(
    private fb: FormBuilder,
    private _sharedService: SharemeService,
    private fake_api: FakeApiService
  ) {}

  ngOnInit(): void {
    this.taskform = this.fb.group({
      task_name: [""],
      task_description: [""],
      deadline: [""],
      status: [""],
      assignto: [""],
    });
  }
  filterTabel(value) {
    this.keyword = value.replace(/\s+/g, " ").toLowerCase();
    this.fake_api.findTasks(this.keyword);
  }
  addNewTask() {
    this.task = this.taskform.value;
    this.fake_api.addTask(this.task);
    this.taskform.reset();
  }
  addTasks() {
    this.taskDialog = true;
  }
  closeModal() {
    this.taskDialog = false;
  }
  getClass(value) {
    return {
      "Total Task": "icon_avtar-info",
      "Task Completed": "icon_avtar-success",
      "Task Inprogress": "icon_avtar-primary",
      "Task Canceled": "icon_avtar-warning",
      "Task Overdue": "icon_avtar-danger",
      "New Task To Start": "icon_avtar-secondary",
    }[value];
  }
  All_tasks = [
    {
      id: "1",
      task_title: "Total Task",
      total_task: "50",
      icon: "assignment",
    },
    {
      id: "2",
      task_title: "Task Completed",
      total_task: "20",
      icon: "done",
    },
    {
      id: "3",
      task_title: "Task Inprogress",
      total_task: "20",
      icon: "autorenew",
    },
    {
      id: "4",
      task_title: "Task Canceled",
      total_task: "5",
      icon: "cancel",
    },
    {
      id: "5",
      task_title: "Task Overdue",
      total_task: "2",
      icon: "warning_amber",
    },
    {
      id: "6",
      task_title: "New Task To Start",
      total_task: "10",
      icon: "play_arrow",
    },
  ];
  termsPara = [
    {
      id: "0",
      para_name: "All ",
    },
    {
      id: "1",
      para_name: "In Progress",
    },
    {
      id: "2",
      para_name: "Canceled",
    },
    {
      id: "3",
      para_name: "Completed",
    },
  ];
  termsPara2 = [
    {
      id: "0",
      para_name: "All ",
    },
    {
      id: "1",
      para_name: "Today",
    },
    {
      id: "2",
      para_name: "Last Day",
    },
    {
      id: "3",
      para_name: "Last Week",
    },
    {
      id: "4",
      para_name: "Last Month",
    },
  ];
}
