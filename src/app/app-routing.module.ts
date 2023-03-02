import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuardGuard } from "./auth-guard.guard";
import { AuthComponent } from "./auth/auth.component";
import { HomeComponent } from "./home/home.component";
import { StatesComponent } from "./states/states.component";


const routes: Routes=[
    {
        path:"",
        component: AuthComponent 
    },
    {
        path:'home',
        component: HomeComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path:'state',
        component: StatesComponent,
        canActivate: [AuthGuardGuard]

    }

  
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}