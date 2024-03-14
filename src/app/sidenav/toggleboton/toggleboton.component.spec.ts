import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglebotonComponent } from './toggleboton.component';

describe('TogglebotonComponent', () => {
  let component: TogglebotonComponent;
  let fixture: ComponentFixture<TogglebotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglebotonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogglebotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
