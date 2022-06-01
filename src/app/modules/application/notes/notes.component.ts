import { Note } from "./../../../partials/core/data_madals/note.modal";
import { Component, Input, OnInit } from "@angular/core";
import { FakeApiService } from "src/app/partials/core/fake_api.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"],
})
export class NotesComponent implements OnInit {
  tabId = "0";
  notes: Note[] = [];
  notesForm: FormGroup;
  notesSidebarModal = false;
  noteDialog = false;
  noteForm: FormGroup;
  note_author = "assets/media/images/users/user3.jpg";
  note_share_count = 5;
  note_author_name: "Caron";
  activeNote =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt velit quos amet, eligendi nobis odio minima? Odit voluptatibus non amet?";
  constructor(private fake_Api: FakeApiService, private fb: FormBuilder) {}
  updateContent: boolean;
  ngOnInit(): void {
    this.notes = this.fake_Api.getNotes();
    this.noteForm = this.fb.group({
      note_title: [""],
      note_description: [""],
    });
  }

  // dropdown list
  custom_dropdown = [
    {
      click_icon: "keyboard_arrow_down",
      dropdown_lists: [
        {
          id: "1",
          dropdown_icon: "person ",
          dropdown_title: "Author",
        },
        {
          id: "2",
          dropdown_icon: "calendar_today ",
          dropdown_title: "Date",
        },
      ],
    },
  ];
  // open nodesSidebar sidebar
  openAppSidebar() {
    this.notesSidebarModal = !this.notesSidebarModal;
    console.log("sidebar" + this.notesSidebarModal);
  }
  //opent Note Modal
  openNoteModal(value) {
    this.noteDialog = value;
  }
  //clse note modal
  closeModal() {
    this.noteDialog = false;
  }
  //add a Note
  addNewNote() {
    let date = new Date();
    let values;
    values = this.noteForm.value;
    Object.assign(values, { note_author: this.note_author });
    Object.assign(values, { note_share_count: this.note_share_count });
    Object.assign(values, { note_author_name: this.note_author_name });
    Object.assign(values, { note_createdAt: date });
    this.fake_Api.addNote(values);
    this.noteForm.reset();
    this.noteDialog = false;
  }
  removeNote(value) {
    alert(value);
  }
  updateNote() {}
  tabToggle(tab) {
    if (tab != this.tabId) {
      this.tabId = tab;
    }
  }
}
