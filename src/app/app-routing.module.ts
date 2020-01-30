import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BoardComponent} from './components/board/board.component';
import {HomeComponent} from './components/home/home.component';
import {MindComponent} from './components/mind/mind.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'mind', component: MindComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
