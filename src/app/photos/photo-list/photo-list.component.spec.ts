import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from "./PhotoListComponent";

describe('PhotListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoListComponent]
    });
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
