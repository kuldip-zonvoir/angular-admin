import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-file-manager",
  templateUrl: "./file-manager.component.html",
  styleUrls: ["./file-manager.component.scss"],
})
export class FileManagerComponent implements OnInit {
  folders = [
    {
      id: "1",
      icon: "fas fa-folder",
      foldername: "Psd",
      size: "680 MB",
    },
    {
      id: "2",
      icon: "fas fa-folder",
      foldername: "Media",
      size: "500 MB",
    },
    {
      id: "3",
      icon: "fas fa-folder",
      foldername: "Documents",
      size: "2 GB",
    },
    {
      id: "4",
      icon: "fas fa-folder",
      foldername: "Downloads",
      size: "4 GB",
    },
  ];
  files = [
    {
      id: "1",
      icon: "far fa-file-excel",
      foldername: "Inventory",
      size: "6 MB",
    },
    {
      id: "9",
      icon: "far fa-file-excel",
      foldername: "All Products",
      size: "5 MB",
    },

    {
      id: "5",
      icon: "far fa-file-excel",
      foldername: "Expenditure",
      size: "6 MB",
    },
    {
      id: "13",
      icon: "far fa-file-excel",
      foldername: "List",
      size: "6 MB",
    },

    {
      id: "8",
      icon: "far fa-file-word",
      foldername: "Notes",
      size: "4 MB",
    },
    {
      id: "4",
      icon: "far fa-file-word",
      foldername: "Project Requirements",
      size: "4 MB",
    },
    {
      id: "12",
      icon: "far fa-file-word",
      foldername: "Research Notes",
      size: "14 MB",
    },
    {
      id: "11",
      icon: "far fa-file-pdf",
      foldername: "Thesis",
      size: "16 MB",
    },
    {
      id: "15",
      icon: "far fa-file-pdf",
      foldername: "Synopsis",
      size: "16 MB",
    },
    {
      id: "7",
      icon: "far fa-file-pdf",
      foldername: "Project Analysis",
      size: "16 MB",
    },
    {
      id: "3",
      icon: "far fa-file-pdf",
      foldername: "Project Documentation",
      size: "16 MB",
    },
    {
      id: "14",
      icon: "far fa-file-powerpoint",
      foldername: "Project Working",
      size: "10 MB",
    },
    {
      id: "2",
      icon: "far fa-file-powerpoint",
      foldername: "Project Showcase",
      size: "20 MB",
    },
    {
      id: "6",
      icon: "far fa-file-powerpoint",
      foldername: "Presentation",
      size: "10 MB",
    },
    {
      id: "10",
      icon: "far fa-file-powerpoint",
      foldername: "Demonstration",
      size: "15 MB",
    },

    {
      id: "16",
      icon: "far fa-file-word",
      foldername: "Key Points",
      size: "4 MB",
    },
  ];
  filesSidebarModal = false;
  constructor() {}

  ngOnInit(): void {}
  selectFile(event) {
    console.log(event);
  }
  openAppSidebar() {
    this.filesSidebarModal = !this.filesSidebarModal;
    console.log("sidebar" + this.filesSidebarModal);
  }
}
