import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FakeApiService } from "src/app/partials/core/fake_api.service";

@Component({
  selector: "app-notes-sidebar",
  templateUrl: "./notes-sidebar.component.html",
  styleUrls: ["./notes-sidebar.component.scss"],
})
export class NotesSidebarComponent implements OnInit {
  @Output() makeANote: EventEmitter<boolean> = new EventEmitter();

  allNotes = true;
  noteDialog: boolean;
  noteForm: FormGroup;
  note_author = "assets/media/images/users/14.png";
  note_share_count = 5;
  note_author_name: "Benjamin Aramayo";
  constructor(private fb: FormBuilder, private fake_Api: FakeApiService) {}

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      note_title: [""],
      note_description: [""],
    });
  }
  addNotes() {
    this.noteDialog = true;
    this.makeANote.emit(this.noteDialog);
  }
}
