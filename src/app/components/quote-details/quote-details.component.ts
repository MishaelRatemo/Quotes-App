import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quot } from 'src/app/classes/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() myquote!: Quot;
  @Output() isExpired =new EventEmitter<boolean>();

  quoteDelete(oldquote:boolean){
    this.isExpired.emit(oldquote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
