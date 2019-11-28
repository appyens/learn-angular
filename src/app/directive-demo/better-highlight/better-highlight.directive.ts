import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // Host binding is new type of renderer
  // give it a initial value for no errors
  // @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  // binding to directive properties demo only
  @Input() defaultColor = 'transparent';
  @Input('appBetterHighlight') highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  // for custom directive with renderer demo only
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

   // for host listener demo only
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // commented part is only for host listener
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    // this.backgroundColor = 'blue';

    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // commented part is only for host listener
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    // this.backgroundColor = 'transparent';

    this.backgroundColor = this.defaultColor;
  }
}
