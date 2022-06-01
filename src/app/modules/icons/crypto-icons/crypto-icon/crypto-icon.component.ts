import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-icon',
  templateUrl: './crypto-icon.component.html',
  styleUrls: ['./crypto-icon.component.scss']
})
export class CryptoIconComponent implements OnInit {
  @Input() iconbox: any = {}
  constructor() { }

  ngOnInit(): void {
  }

}
