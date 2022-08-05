import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-contacts",
  templateUrl: "./list-contacts.component.html",
  styleUrls: ["./list-contacts.component.scss"],
})
export class ListContactsComponent implements OnInit {
  showBoundaryLinks = true;

  constructor() {}

  ngOnInit(): void {}
  Contacts = [
    {
      name: "Morgen Smith",
      star: "true",
      occupation: "Php Developer",
      image: "assets/media/images/users/10.png",
      phone: "+21 (988) 234-4537",
      email: "test@123gmail.com",
    },
    {
      name: " Elendil Sen",
      star: "false",
      email: "test@123gmail.com",
      occupation: "React Developer",
      image: "assets/media/images/users/20.png",
      phone: "+21 (988) 504-2552",
    },
    {
      name: "Nyrie Stark",
      email: "test@123gmail.com",
      star: "false",
      occupation: "Angular Developer",
      image: "assets/media/images/users/12.png",
      phone: "+21 (988) 454-3572",
    },
    {
      name: "Olivia Pots",
      email: "test@123gmail.com",
      star: "true",
      occupation: "Graphic Designer",
      image: "assets/media/images/users/13.png",
      phone: "+21 (988) 869-2568",
    },
    {
      name: "Kane Richerdson",
      star: "false",
      email: "test@123gmail.com",
      occupation: "Web Designer",
      image: "assets/media/images/users/14.png",
      phone: "+21 (988) 978-2559",
    },
    {
      name: "Monika Hamsworth",
      star: "false",
      email: "test@123gmail.com",
      occupation: "Vue Developer",
      image: "assets/media/images/users/15.png",
      phone: "+21 (988) 234-4537",
    },
    {
      name: " Ketty Lang ",
      star: "false",
      email: "test@123gmail.com",
      occupation: "React Developer",
      image: "assets/media/images/users/16.png",
      phone: "+21 (988) 504-2552",
    },
    {
      name: "Mathiny Stokes  ",
      star: "false",
      email: "test@123gmail.com",
      occupation: "Angular Developer",
      image: "assets/media/images/users/17.png",
      phone: "+21 (988) 454-3572",
    },
    {
      name: "Simayra Finch",
      star: "true",
      email: "test@123gmail.com",
      occupation: "Graphic Designer",
      image: "assets/media/images/users/18.png",
      phone: "+21 (988) 869-2568",
    },
    {
      name: "Atly Gunn",
      star: "true",
      email: "test@123gmail.com",
      occupation: "Web Designer",
      image: "assets/media/images/users/15.png",
      phone: "+21 (988) 978-2559",
    },
    {
      name: "Kiyara Richerdson",
      star: "true",
      email: "test@123gmail.com",
      occupation: "Web Designer",
      image: "assets/media/images/users/17.png",
      phone: "+21 (988) 978-2559",
    },
    {
      name: "Steave Warner",
      star: "true",
      email: "test@123gmail.com",
      occupation: "Php Developer",
      image: "assets/media/images/users/20.png",
      phone: "+21 (988) 234-4537",
    },
    {
      name: " Scott Lang ",
      star: "true",
      email: "test@123gmail.com",
      occupation: "React Developer",
      image: "assets/media/images/users/18.png",
      phone: "+21 (988) 504-2552",
    },
    {
      name: "Robert Stark",
      star: "false",
      email: "test@123gmail.com",
      occupation: "Angular Developer",
      image: "assets/media/images/users/18.png",
      phone: "+21 (988) 454-3572",
    },
    {
      name: "David Smith",
      email: "test@123gmail.com",
      star: "true",
      occupation: "Graphic Designer",
      image: "assets/media/images/users/19.png",
      phone: "+21 (988) 869-2568",
    },
    {
      name: "Kane Richerdson",
      star: "false",
      email: "test@123gmail.com",
      occupation: "Web Designer",
      image: "assets/media/images/users/18.png",
      phone: "+21 (988) 978-2559",
    },
  ];
}
