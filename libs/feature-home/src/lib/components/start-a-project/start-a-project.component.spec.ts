import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAProjectComponent } from './start-a-project.component';

describe('StartAProjectComponent', () => {
  let component: StartAProjectComponent;
  let fixture: ComponentFixture<StartAProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartAProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
