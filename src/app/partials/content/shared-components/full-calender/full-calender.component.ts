import { Component, OnInit } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/angular";
import { DatePipe } from "@angular/common";
interface AllEvevnt{
  id:string;
  eventColor:string;
  type:string;
  
}

@Component({
  selector: 'app-full-calender',
  templateUrl: './full-calender.component.html',
  styleUrls: ['./full-calender.component.scss']
})
export class FullCalenderComponent implements OnInit {

  radioModel = "dayGridMonth";
  openEvent: boolean;
  today = new Date();
  startDate1 = new Date();
  nextDate = new Date(this.today);
  endDate1 = new Date();
  todayDate: string;
  bsValue = new Date();
  eventName: string;
  options: any;
  header: any;
  eventInfoData = [];
  event_Name: string;
  eventDetail: boolean;
  eventTitle = "";
  eventDescription = "";
  eventCategory = "";
  eventIdColor = "";
  eventStartDate = "";
  customEvent: any;
  eventTypes:AllEvevnt[]
  
  Events = [];
  // eventForm: FormGroup;
  schedularSidebarModal: boolean;
  public calendarOptions: Partial<CalendarOptions>;
  constructor(public datepipe: DatePipe) {
    this.eventTypes = [
      {
        id: "1",
        eventColor: "#6971ff",
        type: "Casual",
      },
      {
        id: "2",
        eventColor: "#ff2694",
        type: "Personal",
      },
      {
        id: "3",
        eventColor: "#06d79c",
        type: "Work",
      },
      {
        id: "4",
        eventColor: "#fa555d",
        type: "Appointments",
      },
    ];
    this.todayDate =
      this.today.getFullYear() +
      "-" +
      (this.today.getMonth() + 1) +
      "-" +
      this.today.getDate();
    this.Events = [
      {
        id: "1",
        title: "Bank Visit",
        start: this.setAddDate(3),
        type: "casual",
        description: "Lorem ispum Lorem ispum Lorem ispum",
        color: "#F12123",
        textColor: "#fdae12",
        backgroundColor: "#fa555d",
      },
      {
        id: "2",
        title: "Project deadline",
        start: this.setAddDate(5),
        color: "#F12123",
        backgroundColor: "#ff2694",
        type: "personal",
        description: "Lorem ispum Lorem ispum Lorem ispum",
      },
      {
        id: "3",
        title: "Holiday",
        start: this.setDecreseDate(3),
        backgroundColor: "#06d79c",
        type: "work",
        description: "Lorem ispum Lorem ispum Lorem ispum",
      },
      {
        id: "4",
        title: "Client Meeting",
        start: this.setDecreseDate(1),
        end: this.today,
        backgroundColor: "#fa555d",
        type: "appointment",
        description: "Lorem ispum Lorem ispum Lorem ispum",
      },
      {
        id: "5",
        title: "Visit to Doctor",
        start: this.setAddDate(5),
        backgroundColor: "#6971ff",
        type: "casual",
        allDay: true,
      },
      {
        id: "6",
        title: "Anniversary Party",
        start: this.setAddDate(5),
        backgroundColor: "#6971ff",
        type: "casual",
        description: "Lorem ispum Lorem ispum Lorem ispum",
      },
      {
        id: "7",
        title: "Meeting",
        start: this.todayDate,
        backgroundColor: "#fa555d",
        type: "appointment",
        description: "Lorem ispum Lorem ispum Lorem ispum",
      },
      {
        id: "8",
        title: "Birthday Party",
        start: this.setDecreseDate(5),
        backgroundColor: "#06d79c",
        type: "work",
        description: "Lorem ispum Lorem ispum Lorem ispum",
      },
    ];
   }

  ngOnInit(): void {
    this.calendarOptions = {
      initialView: this.radioModel,
      dateClick: this.handleDateClick.bind(this), 
      eventClick: this.handleEventActions.bind(this),

      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
      },
      views: {
        timeGrid: {
          dayMaxEventRows: 2,
        },
        dayGridMonth: {
          editable: false,
          dayMaxEventRows: 2,
        },
      },
      events: this.Events,
    };
  }

  setAddDate(args) {
    let cuu_date;
    const changedate = this.nextDate.setDate(this.today.getDate() + args);
    cuu_date = this.datepipe.transform(changedate, "yyyy-MM-dd");
    return cuu_date;
  }
  setDecreseDate(args) {
    let pre_date;
    const changedate = this.nextDate.setDate(this.today.getDate() - args);
    pre_date = this.datepipe.transform(changedate, "yyyy-MM-dd");
    return pre_date;
  }

  handleEventActions(eventData) {
    this.eventDetail = true;
    const event_id = eventData.event._def.publicId;
    const evt_detail_click = this.Events.find((evt) => {
      return evt.id == event_id + "";
    });
    this.eventTitle = evt_detail_click["title"];
    this.eventDescription = evt_detail_click["description"];
    this.eventCategory = evt_detail_click["type"];
    this.eventIdColor = evt_detail_click["backgroundColor"];
    this.eventStartDate = evt_detail_click["start"].toString();
  }
  handleDateClick(arg) {
    this.openEvent = true;
    this.eventName = "Casual Event";
    let d1 = new Date(arg.dateStr);
    // console.log(this.datepipe.transform(d1, "MM/dd/yyyy"));
    // this.eventForm.patchValue({
    //   startDate: this.datepipe.transform(d1, "MM/dd/yyyy"),
    //   endDate: this.datepipe.transform(d1, "MM/dd/yyyy"),
    // });
  }

}
