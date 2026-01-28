import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedFeedComponent } from './personalized-feed.component';

describe('PersonalizedFeedComponent', () => {
  let component: PersonalizedFeedComponent;
  let fixture: ComponentFixture<PersonalizedFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizedFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalizedFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
