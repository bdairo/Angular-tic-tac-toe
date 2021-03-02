import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  private el: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.el.nativeElement.addEventListener('click', ()=> {
      this.close()
  })
  }

  close() {
    this.el.nativeElement.classList.remove('sshow')
    this.el.nativeElement.classList.add('hhidden')
  }

}
