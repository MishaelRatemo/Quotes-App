
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quot } from 'src/app/classes/quote';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MyquotesService } from 'src/app/services/myquotes.service';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quot(0, "","",0,0, new Date(),"")
  @Output() addNewQuote = new EventEmitter<Quot>();

  newQuoteForm = new FormGroup({
    qoute: new FormControl('',Validators.required),
    name1: new FormControl('',Validators.required)

  })

  createQuote(){
    this.addNewQuote.emit(this.newQuote);
    // console.log(this.newQuote)
  }
 


  /*constructor( 
    private myquotesService: MyquotesService,
    private formBuilder: FormBuilder
    ) { }
    */

  ngOnInit(): void {
  }

}
