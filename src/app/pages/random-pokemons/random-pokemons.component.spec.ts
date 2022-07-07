import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPokemonsComponent } from './random-pokemons.component';

describe('RandomPokemonsComponent', () => {
  let component: RandomPokemonsComponent;
  let fixture: ComponentFixture<RandomPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
