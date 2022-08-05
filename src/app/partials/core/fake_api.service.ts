import { Note } from "./data_madals/note.modal";
import { Injectable } from "@angular/core";

import { contacts, invoices, tasks } from "./CollectionData/tabeldata";
import { notes } from "./CollectionData/tabeldata";
import { orders, customers } from "./CollectionData/e-commerce-table";
import { users, postsImages } from "./CollectionData/usersTable";
@Injectable({
  providedIn: "root",
})
export class FakeApiService {
  constructor() {}
  // Task Maneger
  getUsers() {
    return users;
  }
  getInvoice() {
    return invoices;
  }
  getContacts() {
    return contacts;
  }
  getCustomers() {
    return customers;
  }
  getPostGallary() {
    return postsImages;
  }
  getOrders() {
    return orders;
  }
  getNotes() {
    return notes;
  }
  addNote(value) {
    notes.push(value);
  }
  getNote() {
    return notes;
  }
  deleteNote() {
    return notes;
  }
  updatetNote() {
    return notes;
  }

  getTasks() {
    return tasks;
  }
  findTasks(item: any) {
    tasks.filter((taskItem) => {
    });
  }
  addTask(value) {
    tasks.push(value);
  }
  getTask() {
    return tasks;
  }
  deleteTask(id: string) {
    tasks.splice(
      tasks.findIndex(function (item) {
        return item.id === id;
      }),
      1
    );
  }
  updatetTask(id: string) {
    return tasks;
  }
}
