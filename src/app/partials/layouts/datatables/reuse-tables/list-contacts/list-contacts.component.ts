import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {
  showBoundaryLinks = true;

  constructor() { }

  ngOnInit(): void {
  }
  Contacts = [
    {
      name: 'Morgen Smith',
      star: 'true',
      occupation: 'Php Developer',
      image: 'assets/media/images/users/300_10.jpg',
      phone: '+21 (988) 234-4537',
      email: 'test@123gmail.com',
    },
    {
      name: ' Mariya Sen',
      star: "false",
      email: 'test@123gmail.com',
      occupation: 'React Developer',
      image: 'assets/media/images/users/300_11.jpg',
      phone: '+21 (988) 504-2552'
    },
    {
      name: 'Robert Stark',
      email: 'test@123gmail.com',
      star: "false",
      occupation: 'Angular Developer',
      image: 'assets/media/images/users/300_12.jpg',
      phone: '+21 (988) 454-3572'
    },
    {
      name: 'David Smith',
      email: 'test@123gmail.com',
      star: 'true', occupation: 'Graphic Designer',
      image: 'assets/media/images/users/300_13.jpg',
      phone: '+21 (988) 869-2568'
    },
    {
      name: 'Kane Richerdson',
      star: "false",
      email: 'test@123gmail.com',
      occupation: 'Web Designer',
      image: 'assets/media/images/users/300_14.jpg',
      phone: '+21 (988) 978-2559'
    },
    {
      name: 'Jhye Anderson',
      star: "false",
      email: 'test@123gmail.com',
      occupation: 'Vue Developer',
      image: 'assets/media/images/users/300_15.jpg',
      phone: '+21 (988) 234-4537'
    },
    {
      name: ' Ketty Lang ',
      star: "false",
      email: 'test@123gmail.com',
      occupation: 'React Developer',
      image: 'assets/media/images/users/300_16.jpg',
      phone: '+21 (988) 504-2552'

    },
    {
      name: 'Mathiny Stokes  ',
      star: "false",
      email: 'test@123gmail.com',
      occupation: 'Angular Developer',
      image: 'assets/media/images/users/300_17.jpg',
      phone: '+21 (988) 454-3572'
    },
    {
      name: 'Simayra Finch',
      star: 'true',
      email: 'test@123gmail.com',
      occupation: 'Graphic Designer',
      image: 'assets/media/images/users/300_18.jpg',
      phone: '+21 (988) 869-2568'
    },
    {
      name: 'Atly Gunn',
      star: 'true',
      email: 'test@123gmail.com',
      occupation: 'Web Designer',
      image: 'assets/media/images/users/300_19.jpg',
      phone: '+21 (988) 978-2559'
    },
    {
      name: 'Kiyara Richerdson',
      star: 'true',
      email: 'test@123gmail.com',
      occupation: 'Web Designer',
      image: 'assets/media/images/users/300_20.jpg',
      phone: '+21 (988) 978-2559'
    },
    {
      name: 'Steave Warner',
      star: 'true',
      email: 'test@123gmail.com',
      occupation: 'Php Developer',
      image: 'assets/media/images/users/300_21.jpg',
      phone: '+21 (988) 234-4537'
    },
    {
      name: ' Scott Lang ',
      star: 'true',
      email: 'test@123gmail.com',
      occupation: 'React Developer',
      image: 'assets/media/images/users/300_22.jpg',
      phone: '+21 (988) 504-2552'
    },
    {
      name: 'Robert Stark',
      star: "false",
      email: 'test@123gmail.com',
      occupation: 'Angular Developer',
      image: 'assets/media/images/users/300_23.jpg',
      phone: '+21 (988) 454-3572'
    },
    {
      name: 'David Smith',
      email: 'test@123gmail.com',
      star: 'true',
      occupation: 'Graphic Designer',
      image: 'assets/media/images/users/300_24.jpg',
      phone: '+21 (988) 869-2568'
    },
    {
      name: 'Kane Richerdson',
      star: "false",
      email: 'test@123gmail.com',
      occupation: 'Web Designer',
      image: 'assets/media/images/users/300_25.jpg',
      phone: '+21 (988) 978-2559',

    },
  ]
}
