import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxButtonModule, DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { HomePokedexComponent } from './pages/home-pokedex/home-pokedex.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';
import { DxTextBoxModule } from 'devextreme-angular';
import { SearchPokemonComponent } from './pages/search-pokemon/search-pokemon.component';
import { RandomPokemonsComponent } from './pages/random-pokemons/random-pokemons.component';
import { YourPokemonComponent } from './pages/your-pokemon/your-pokemon.component';

const routes: Routes = [
  {
    path: 'pages/your-pokemon',
    component: YourPokemonComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/random-pokemons',
    component: RandomPokemonsComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/search-pokemon',
    component: SearchPokemonComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pokemon',
    component: PokemonComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomePokedexComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home-alternate',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule, BrowserModule,FormsModule,DxButtonModule,DxTextBoxModule],
  providers: [AuthGuardService],
  exports: [RouterModule, CommonModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent,
    HomePokedexComponent,
    PokemonComponent,
    SearchPokemonComponent,
    RandomPokemonsComponent,
    YourPokemonComponent
  ]
})
export class AppRoutingModule { }
