import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'server-add',
    loadChildren: () => import('./server/server.module').then( m => m.ServerPageModule)
  },
  {
    path: 'beebot-add',
    loadChildren: () => import('./beebot-comp/beebot-add/beebot-add.module').then( m => m.BeebotAddPageModule)
  },
  {
    path: 'beebot/:uid',
    loadChildren: () => import('./beebot/beebot.module').then( m => m.BeebotPageModule)
  },
  {
    path: 'server',
    loadChildren: () => import('./server-stats/server-stats.module').then( m => m.ServerStatsPageModule)
  },
  {
    path: 'modules',
    loadChildren: () => import('./beebot-comp/modules/modules.module').then( m => m.ModulesPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
  },
  {
    path: 'beebot/:uid/clients',
    loadChildren: () => import('./pages/bee-bot-clients/bee-bot-clients.module').then( m => m.BeeBotClientsPageModule)
  },
  {
    path: 'beebot/:uid/stats',
    loadChildren: () => import('./pages/bee-bot-graphs/bee-bot-graphs.module').then( m => m.BeeBotGraphsPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
