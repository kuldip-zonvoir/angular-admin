import {
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SharemeService } from "src/app/partials/core/shareme.service";
@Component({
  selector: "app-list-page",
  templateUrl: "./list-page.component.html",
  styleUrls: ["./list-page.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ListPageComponent implements OnInit {
  displaytaskDetail: boolean;
  displayfilter: boolean;
  myForm: FormGroup;
  order: string = "title";
  task: any = {};
  modalState: boolean;
  activeTheme: string;
  modalState1: boolean;
  fileAttachment: boolean;
  Dialog;

  tasKCardkDetail: boolean;
  cardDetails: boolean;
  isBlocked = true;
  isAproved = false;
  isReady = false;
  isHPriority = true;
  isDeployed = false;
  isUser1 = true;
  isUser2 = true;
  isUser3 = false;
  isUser4 = false;
  defaultPic = "assets/media/images/cards/6.jpg";
  defaultUserPic = "assets/media/images/users/300_5.jpg";
  task_title = "Rental Project";
  desc = ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil, dolorem asperiores ad pariatur placeat vel fuga velit expedita adipisci?`;
  constructor(
    private fb: FormBuilder,
    private shared_service: SharemeService
  ) {}

  ngOnInit(): void {
    this.shared_service.modalToggle.subscribe((value) => {
      this.modalState = value;
    });
    this.shared_service.cardDragBackground.subscribe((theme) => {
      this.activeTheme = theme;
    }),
      (this.myForm = this.fb.group({
        title: [""],
        content: [""],
      }));
  }
  addTaskDialog() {
    this.displaytaskDetail = true;
  }
  addTask() {
    this.task = this.myForm.value;
    Object.assign(this.task, { imgHeader: this.defaultPic });
    Object.assign(this.task, { user_img: this.defaultUserPic });
    Object.assign(this.task, { message: "02" });
    Object.assign(this.task, { file: "06" });
    this.holds.unshift(this.task);
    this.myForm.reset();
    this.displaytaskDetail = false;
  }
  showBasicDialog(which) {
    this.modalState = !this.modalState;
    console.log("de s", this.modalState, which);
    this.shared_service.updateModalState(this.modalState, which);
  }
  showFilterDialog() {
    this.displayfilter = true;
  }

  dropdowns = [
    {
      click_icon: "more_vert",
      dropdown_lists: [
        {
          dropdown_icon: "account_circle",
          dropdown_title: "Assined To",
        },
        {
          id: "1",
          dropdown_icon: "groups",
          dropdown_title: "Team",
        },
        {
          id: "2",
          dropdown_icon: "timeline",
          dropdown_title: "Progress",
        },
        {
          id: "3",
          dropdown_icon: "hourglass_empty",
          dropdown_title: "Deadline",
        },
      ],
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  // modals  for Details
  fileAttachmentDialog() {
    this.fileAttachment = true;
  }
  taskDetailDialog(data) {
    this.tasKCardkDetail = data;
    console.log(this.tasKCardkDetail);
  }
  holds: any[] = [
    {
      title: "Fix issue #43",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/7.jpg",
      user_img: "assets/media/images/users/300_1.jpg",

      message: "02",
      file: "03",
    },
    {
      title: "Project DeadLine",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      user_img: "assets/media/images/users/300_2.jpg",
      message: "04",
      file: "01",
    },
    {
      title: "Add this to dashboard",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/4.jpg",
      user_img: "assets/media/images/users/300_3.jpg",

      message: "02",
      file: "03",
    },
    {
      title: "InitelSap Project",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/6.jpg",
      user_img: "assets/media/images/users/300_4.jpg",
      message: "04",
      file: "08",
    },
    {
      title: "Exam Project",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      user_img: "assets/media/images/users/300_9.jpg",
      message: "04",
      file: "03",
    },
    {
      title: "Fix issue #45",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/7.jpg",
      user_img: "assets/media/images/users/300_1.jpg",

      message: "02",
      file: "03",
    },
    {
      title: "Fix Layout issue #15",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      user_img: "assets/media/images/users/300_2.jpg",
      message: "04",
      file: "01",
    },
    {
      title: "Fix Header issue #35",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/7.jpg",
      user_img: "assets/media/images/users/300_3.jpg",

      message: "02",
      file: "03",
    },
    {
      title: "DB Crashed issue #40",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/4.jpg",
      user_img: "assets/media/images/users/300_4.jpg",
      message: "04",
      file: "08",
    },
    {
      title: "Api Issue #67",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      user_img: "assets/media/images/users/300_9.jpg",
      message: "04",
      file: "03",
    },
  ];
  progresing: any[] = [
    {
      title: "Zydus Delivery Project ",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/1.jpg",
      user_img: "assets/media/images/users/300_5.jpg",
      notification: "May, 03",
      message: "02",
      file: "03",
    },
    {
      title: "Project in Working",
      user_img: "assets/media/images/users/300_5.jpg",
      message: "02",
      file: "03",
    },
    {
      title: "InitelSap Project",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/6.jpg",
      user_img: "assets/media/images/users/300_4.jpg",
      message: "04",
      file: "08",
    },
    {
      title: "Exam Project",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      user_img: "assets/media/images/users/300_9.jpg",
      message: "04",
      file: "03",
    },
    {
      title: "Fix issue #45",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/7.jpg",
      user_img: "assets/media/images/users/300_1.jpg",

      message: "02",
      file: "03",
    },
    {
      title: "Fix Layout issue #15",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      user_img: "assets/media/images/users/300_2.jpg",
      message: "04",
      file: "01",
    },

    {
      title: "Api Issue #67",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      user_img: "assets/media/images/users/300_9.jpg",
      message: "04",
      file: "03",
    },
  ];
  testing: any[] = [
    {
      title: "Exam Project",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      user_img: "assets/media/images/users/300_9.jpg",
      message: "04",
      file: "03",
    },
    {
      title: "Fix issue #45",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/7.jpg",
      user_img: "assets/media/images/users/300_1.jpg",

      message: "02",
      file: "03",
    },
    {
      title: "Fix Layout issue #15",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      user_img: "assets/media/images/users/300_2.jpg",
      message: "04",
      file: "01",
    },
    {
      title: "Fix Header issue #35",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/7.jpg",
      user_img: "assets/media/images/users/300_3.jpg",

      message: "02",
      file: "03",
    },
    {
      title: "DB Crashed issue #40",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/4.jpg",
      user_img: "assets/media/images/users/300_4.jpg",
      message: "04",
      file: "08",
    },
    {
      title: "More to Like",
      imgHeader: "assets/media/images/cards/1.jpg",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      user_img: "assets/media/images/users/300_7.jpg",
      user_img2: "assets/media/images/users/300_5.jpg",
      notification: "May, 03",
      message: "02",
      file: "03",
    },
    {
      title: "Api Issue #67",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      user_img: "assets/media/images/users/300_9.jpg",
      message: "04",
      file: "03",
    },
  ];
  completed: any[] = [
    {
      title: "Rental",
      imgHeader: "assets/media/images/cards/1.jpg",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      user_img: "assets/media/images/users/300_5.jpg",
      notification: "May, 03",
      message: "02",
      file: "03",
    },
    {
      title: "Fix issue #45",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/7.jpg",
      user_img: "assets/media/images/users/300_1.jpg",
      message: "02",
      file: "03",
    },
    {
      title: "DB Crashed issue #40",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      imgHeader: "assets/media/images/cards/4.jpg",
      user_img: "assets/media/images/users/300_4.jpg",
      message: "04",
      file: "08",
    },
    {
      title: "Api Issue #67",
      content: "Phasellus ac augue vitae ligula sollicitudin feugiat",
      user_img: "assets/media/images/users/300_9.jpg",
      message: "04",
      file: "03",
    },
  ];
}
