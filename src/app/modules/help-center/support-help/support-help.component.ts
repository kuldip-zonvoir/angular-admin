import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-support-help",
  templateUrl: "./support-help.component.html",
  styleUrls: ["./support-help.component.scss"],
})
export class SupportHelpComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
      subject: ["", [Validators.required]],
      message: ["", [Validators.required]],
    });
  }
  submitMessage() {}
}
