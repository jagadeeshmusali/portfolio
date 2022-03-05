import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeWorksComponent } from './creative-works.component';

describe('CreativeWorksComponent', () => {
  let component: CreativeWorksComponent;
  let fixture: ComponentFixture<CreativeWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativeWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
