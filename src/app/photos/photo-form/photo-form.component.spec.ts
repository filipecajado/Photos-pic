import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFormComponent } from './photo-form.component';

describe('PhotoFormComponent', () => {
  let component: PhotoFormComponent;
  let fixture: ComponentFixture<PhotoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoFormComponent]
    });
    fixture = TestBed.createComponent(PhotoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
