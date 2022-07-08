import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord2',
  templateUrl: './dashbord2.component.html',
  styleUrls: ['./dashbord2.component.scss']
})
export class Dashbord2Component implements OnInit {
  chartColor:String;
  constructor() { 

    this.chartColor = '#6971fe'

  }

  ngOnInit(): void {
  }
  groups = [
    {
      id: "1",
      group_pic: "assets/media/images/profile/mongo.png",
      group_name: "MongoDB Folks",
      group_desc: "MongoDb group",
      isConnected: true,
    },
    {
      id: "2",
      group_pic: "assets/media/images/profile/Java.png",
      group_name: "Java Community",
      group_desc: "Java developers group",
      isConnected: true,
    },
    {
      id: "3",
      group_pic: "assets/media/images/profile/python.jpg",
      group_name: "Python Devlopers",
      group_desc: "Python developers group",
      isConnected: false,
    },
    {
      id: "4",
      group_pic: "assets/media/images/profile/angular.png",
      group_name: "Angular World",
      group_desc: "Angular developers group",
      isConnected: true,
    },
    {
      id: "5",
      group_pic: "assets/media/images/profile/react.png",
      group_name: "React Community",
      group_desc: "React developers group",
      isConnected: false,
    },
  ];
}
