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
  countvotes:number =0;
  countDownvotes:number =0;

  addQuote(quote:Quot){
    let quoteLength = this.quotes.length;
    quote.quoteId = quoteLength+1;
    quote.createdAt = new Date( quote.createdAt);
    this.quotes.push(quote)
    console.log(quote)
  }

  deleteQuote( isExpired:any, index:number){
    
    if( isExpired){
      let deletequote = confirm(`You about to delete this quote, Proceed? ${this.quotes[index].quote}`)
      if(deletequote){
        this.quotes.splice(index,1)
      }
    }
  }

  showHideQuoteDetails(qIndex:number){
      this.quotes[qIndex].quoteDetails= !this.quotes[qIndex].quoteDetails;
      
      //  if( this.quotes.indexOf(quote) >=0){
      //    this.quotes[this.quotes.indexOf(quote)].quoteDetails =show;
      //  }else{
      //    this.quotes[this.quotes.indexOf(quote)].quoteDetails =false;
      //  }
        
  }
  
  upvote(id:number){
    // this.countvotes +=1
    this.quotes[id].upvotes +=1
  }
  downvote(did:number){
    // this.countDownvotes -=1
    this.quotes[did].downvotes +=1
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
