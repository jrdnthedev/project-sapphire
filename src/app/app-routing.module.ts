import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CategoryComponent } from './features/category/category.component';
import { InputComponent } from './features/input/input.component';
import { LeaderboardComponent } from './features/leaderboard/leaderboard.component';
import { RulesComponent } from './features/rules/rules.component';
import { WelcomeComponent } from './features/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', title:'Welcome Page', component: WelcomeComponent },
  { path: 'leaderboard', title:'Leaderboard Page', component: LeaderboardComponent },
  { path: 'category', title:'Cateegory Page', component: CategoryComponent },
  { path: 'input', title:'User Entry Page', component: InputComponent },
  { path: 'rules', title:'Rules Page', component: RulesComponent },
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', title:'404 Page Not Found', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
