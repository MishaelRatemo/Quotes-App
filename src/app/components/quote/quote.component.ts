import { Component, OnInit } from '@angular/core';
import { Quot } from 'src/app/classes/quote';
import { MyquotesService } from 'src/app/services/myquotes.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes : Quot[];


  // deleteQuote( isExpired:any, index:number){
  //   if( isExpired){
  //     let deletequote = confirm(`You about to delete this quote, Proceed? ${this.quotes[index].quote}`)
  //     if(deletequote){
  //       this.quotes.splice(index,1)
  //     }
  //   }
  // }

  addQuote(quote:Quot){
    let quoteLength = this.quotes.length;
    quote.quoteId = quoteLength+1;
    quote.createdAt = new Date( quote.createdAt);
    this.quotes.push(quote)
    console.log(quote)
  }
  

  constructor(  quoteService: MyquotesService
    
    /*public quoteId: number,*/
   /* public quote:string,
    public quoteAuthor: string,
    public upvotes: number,
    public downvotes:number,
    public createdAt:Date,
    public submittedBy:string,*/) {
      this.quotes = quoteService.getquote();
     }

  ngOnInit(): void {
  }

}
