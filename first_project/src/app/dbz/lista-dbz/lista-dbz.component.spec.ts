import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDbzComponent } from './lista-dbz.component';

describe('ListaDbzComponent', () => {
  let component: ListaDbzComponent;
  let fixture: ComponentFixture<ListaDbzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDbzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
