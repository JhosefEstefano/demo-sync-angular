import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderQueryComponent } from './builder-query.component';

describe('BuilderQueryComponent', () => {
  let component: BuilderQueryComponent;
  let fixture: ComponentFixture<BuilderQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
