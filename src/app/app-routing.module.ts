import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaperLossComponent } from './paper/paper-loss/paper-loss.component';
import { PaperComponent } from './paper/paper.component';
import { RockLossComponent } from './rock/rock-loss/rock-loss.component';
import { RockComponent } from './rock/rock.component';
import { ScissorsLossComponent } from './scissors/scissors-loss/scissors-loss.component';
import { ScissorsComponent } from './scissors/scissors.component';

const routes: Routes = [
  {
    path: 'rock',
    component: RockComponent,
    children: [{ path: 'kryptonite', component: RockLossComponent }],
  },
  {
    path: 'paper',
    component: PaperComponent,
    children: [{ path: 'kryptonite', component: PaperLossComponent }],
  },
  {
    path: 'scissors',
    component: ScissorsComponent,
    children: [{ path: 'kryptonite', component: ScissorsLossComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
