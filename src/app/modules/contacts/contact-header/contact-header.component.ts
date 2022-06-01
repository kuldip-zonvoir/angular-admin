import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-contact-header",
  templateUrl: "./contact-header.component.html",
  styleUrls: ["./contact-header.component.scss"],
})
export class ContactHeaderComponent implements OnInit {
  tabId = "0";
  form: FormGroup;
  imageSrc: string;
  filename: string;
  filetype: string;
  filesize: number;
  activeUrlString: string;
  profilePic = "assets/media/images/users/user1.jpg";
  displayDialog: boolean;
  constructor(private route: Router, private fb: FormBuilder) {}
  addContactDialog() {
    this.displayDialog = true;
  }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  ngOnInit(): void {
    this.route.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.activeUrlString = ev.url;
        console.log(this.activeUrlString);
      }
    });
    this.form = this.fb.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
      mobile: [
        "",
        [Validators.required, Validators.min(5), Validators.max(10)],
      ],
      phone: ["", [Validators.required, Validators.min(5), Validators.max(10)]],
      post_name: ["", [Validators.required]],
      number: [
        "",
        [Validators.required, Validators.min(5), Validators.max(10)],
      ],
    });
  }
  saveDetail() {}
  selectFile(event) {
    const files = event.target.files;
    this.filename = event.target.files[0].name;
    if (files.length === 0) return;
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageSrc = reader.result as string;
    };
  }
  tabToggle(tab) {
    if (this.tabId != tab) {
      this.tabId = tab;
    }
    if (tab === "0") {
      this.route.navigate(["contacts/grid-contacts"]);
    } else if (tab === "1") {
      this.route.navigate(["contacts/list-contacts"]);
    }
  }
}
