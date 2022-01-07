import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighesUpvoteHighlighter]'
})
export class HighesUpvoteHighlighterDirective {

  constructor(highlight_elem:ElementRef) {
      highlight_elem.nativeElement.style.backgroundColor="aqua"
   }

}
