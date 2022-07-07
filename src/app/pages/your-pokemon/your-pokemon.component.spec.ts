import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPokemonComponent } from './your-pokemon.component';

describe('YourPokemonComponent', () => {
  let component: YourPokemonComponent;
  let fixture: ComponentFixture<YourPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
