import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolmenuComponent } from './toolmenu.component';

describe('ToolmenuComponent', () => {
  let component: ToolmenuComponent;
  let fixture: ComponentFixture<ToolmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
