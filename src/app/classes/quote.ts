export class Quot 
{
    quoteDetails: boolean;
    constructor
    (
         public quoteId: number,
         public quote:string, 
         public quoteAuthor: string, 
         public upvotes: number, 
         public downvotes:number, 
         public createdAt:Date,
         public submittedBy:string 
        //  public quoteDetails:boolean,
    ){
        this.quoteDetails=false;
    }

}

/*
export interface Qout{
    quoteId: number;
    quote:string;
    quoteAuthor: string;
    upvotes: number;
    downvotes:number;
    createdAt:Date;
    submittedBy:string;
    quoteDetails:boolean;
}
export const Quote =[
{
   quoteId: 0,
   quote:"In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customer’s shifting idea of what their problem is.",
   quoteAuthor: "Jeff Atwood",
   upvotes: 0,
   downvotes:0,
   createdAt: new Date( 2021,11,20),
   submittedBy:"Mishael"


},
{
   quoteId:1,
   quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
   quoteAuthor:"Brian Kernighan",
   upvotes: 0,
   downvotes:0,
   createdAt: new Date( 2021,11,25),
   submittedBy:"Becky"
},
{
   quoteId:2,
   quote: "The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.",
   quoteAuthor:"Henry Petroski",
   upvotes: 0,
   downvotes:0,
   createdAt: new Date( 2021,11,28),
   submittedBy:"Thaddius"
},


*/






// {
//     quoteId:3,
//     quote: "Beware of bugs in the above code; I have only proved it correct, not tried it. ",
//     quoteAuthor:"Donald Knuth",
//     createdAt: new Date( 2021,10,15),
// },
// {
//     quoteId:4,
//     quote:"Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time.",
//     quoteAuthor:"N.J. Rubenking",
//     createdAt: new Date( 2021,11,18),
// },
// {
//     quoteId:5,
//     quote:"Walking on water and developing software from a specification are easy if both are frozen.",
//     quoteAuthor:"Edward V Berard",
//     createdAt: new Date( 2022,11,15),
// }

// ]

 