import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteFeedComponent } from './infinite-feed.component';

describe('InfiniteFeedComponent', () => {
  let component: InfiniteFeedComponent;
  let fixture: ComponentFixture<InfiniteFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfiniteFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfiniteFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
