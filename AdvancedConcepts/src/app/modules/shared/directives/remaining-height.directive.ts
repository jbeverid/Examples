import { AfterViewInit, Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[RemainingHeight]'
})
export class RemainingHeightDirective implements AfterViewInit {
  private NativeElement: HTMLElement = null;
  constructor(private HtmlRef: ElementRef) { }

  public ngAfterViewInit(): void {
    this.NativeElement = this.HtmlRef.nativeElement;
    this.NativeElement.style.overflowY = 'auto';
    this.RecalcHeight();
  }

  @HostListener('window:resize', ['$event'])
  public onWindowResize(event) {
    this.RecalcHeight();
  }

  private RecalcHeight(): void {
    const tiTop: number = this.NativeElement.getBoundingClientRect().top;
    const tiWindowHeight: number = window.innerHeight;
    if (this.NativeElement != null) {
      const tiCalcValue = tiWindowHeight - tiTop - 15;
      this.NativeElement.style.height = tiCalcValue + 'px';
    }
  }
}
