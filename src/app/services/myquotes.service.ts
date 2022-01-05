import { Injectable } from '@angular/core';
// import { Quote } from '../classes/quote';
import { Quotes } from '../listOfQuotes';

@Injectable({
  providedIn: 'root'
})
export class MyquotesService {
  

  getquote(){
   return Quotes;
  }
}

/*
  addNewQuote(myQuote:any){
    // myQuote.quoteId   = uuid();
    myQuote.quote   = myQuote.quote;
    myQuote.quoteAuthor = myQuote.quoteAuthor;
    myQuote.upvotes = 0;
    myQuote.downvotes= 0;
    myQuote.submittedBy=myQuote.submittedBy;
    myQuote.createdAt = new Date(myQuote.createdAt);
    this.quotes.push(myQuote);
  }
  quoteDetailsToggling( myQuote:any, show:boolean){
    if (this.getquote().indexOf(myQuote) >= 0){
      // this.getquote()[this.getquote()].quoteDetails =show;
    }else{
      this.getquote()[this.getquote().indexOf(myQuote)].quoteDetails = false;
    }
  }*/

//   constructor() { }
// }
