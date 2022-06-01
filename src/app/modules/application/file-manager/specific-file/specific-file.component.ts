import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specific-file',
  templateUrl: './specific-file.component.html',
  styleUrls: ['./specific-file.component.scss']
})
export class SpecificFileComponent implements OnInit {
  @Input()fileItems:any = {};
  Files_Folders:any;
  constructor() { }

  ngOnInit(): void {

  } 
  getClass(value){
    let textClass;
    if(value === 'fas fa-folder'){
      return textClass='text-warning';
    }else if(value === 'far fa-file-excel'){
      return textClass='text-success';
    }else if(value === 'far fa-file-pdf'){
      return textClass='text-danger';
    } else if(value === 'far fa-file-word'){
      return textClass='text-info';
    }else if(value === 'far fa-file-powerpoint'){
      return textClass='text-orange';
    }
    return textClass;
  }
  custom_dropdown = [
    {
      click_icon:'more_vert',
      dropdown_lists:[
        { 
          id:'1',
          dropdown_icon:'open_in_full ',
          dropdown_title:'Open',
        },
        { 
          id:'2',
          dropdown_icon:'delete ',
          dropdown_title:'Delete',
        },
        { 
          id:'3',
          dropdown_icon:'info',
          dropdown_title:'Properties',
        },
        ]
      }
  ]
}
