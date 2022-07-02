import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePokedexComponent } from './home-pokedex.component';

describe('HomePokedexComponent', () => {
  let component: HomePokedexComponent;
  let fixture: ComponentFixture<HomePokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePokedexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
