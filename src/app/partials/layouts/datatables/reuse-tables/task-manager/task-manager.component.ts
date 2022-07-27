import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Task } from "src/app/partials/core/data_madals/task-maneger.modal";
import { FakeApiService } from "src/app/partials/core/fake_api.service";

@Component({
  selector: "app-task-manager",
  templateUrl: "./task-manager.component.html",
  styleUrls: ["./task-manager.component.scss"],
})
export class TaskManagerComponent implements OnInit {
  taskDialog: boolean;
  addTask: boolean;
  isCompleted: boolean;
  taskForm: FormGroup;
  popupId: boolean;
  today: Date;
  confirmDialog: boolean;
  tasks = [];
  bsValue = new Date();
  statusArr = [];
  selectedStatus: string;
  employeesArr = [];
  selectedEmp: string;
  taskName = "Create the landing page on the beta channel";
  taskDetails =
    " lorem qui ipsum deserunt duis exercitation lorem elit qui qui ipsum tempor nulla velit aliquip enim consequat incididunt pariatur duis excepteur elit irure nulla ipsum dolor dolore est.";
  constructor(private fake_api: FakeApiService, private fb: FormBuilder) {
    this.today = new Date();
    this.statusArr = [
      {
        value: "1",
        label: "In Progress",
      },
      {
        value: "2",
        label: "Canceled",
      },
      {
        value: "3",
        label: "Completed",
      },
    ];
    this.employeesArr = [
      {
        value: "1",
        label: "Morgon Stark",
      },
      {
        value: "2",
        label: "Peter Siddle",
      },
      {
        value: "3",
        label: "Ablert Finch",
      },
      {
        value: "3",
        label: "Harry J",
      },
    ];
  }

  ngOnInit(): void {
    this.tasks = this.fake_api.getTasks();
    this.taskForm = this.fb.group({
      task_name: [""],
      task_description: [""],
      deadline: [""],
      status: [""],
      assignto: [""],
    });
  }
  editTask(id: string) {
    this.taskDialog = true;
    this.fake_api.updatetTask(id);
  }
  closeModal() {
    this.taskDialog = false;
  }
  deleteTask(id: string) {
    this.fake_api.deleteTask(id);
    this.tasks = [];
    this.tasks = this.fake_api.getTasks();
    this.confirmDialog = true;
  }
  updateTask() {}
  selectDate() {}
  viewTask(taskId) {
    this.taskDialog = true;
  }
  confirmDelete(id) {
    this.confirmDialog = false;
  }
  cancelDelete() {
    this.confirmDialog = false;
  }
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
