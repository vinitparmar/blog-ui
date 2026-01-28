import { Directive, HostListener, Input } from '@angular/core';
import { ReadingService } from './reading.service';

@Directive({
  selector: '[appReadingProgress]',
  standalone: true
})
export class ReadingProgressDirective {
@Input() postId!: number;

  constructor(private reading: ReadingService) {}

  @HostListener('window:scroll')
  onScroll() {
    const percent =
      (window.scrollY /
        (document.body.scrollHeight - window.innerHeight)) * 100;

    if (percent > 5) {
      this.reading.saveProgress(this.postId, Math.floor(percent))
        .subscribe();
    }
  }
}
