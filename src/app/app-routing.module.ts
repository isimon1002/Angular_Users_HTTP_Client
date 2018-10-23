import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules} from "@angular/router";
import { IndividualUserComponent } from "./users/individual-user/individual-user.component";
import { UsersComponent } from "./users/users.component";




const appRoutes: Routes = [
	{ path: '', component: UsersComponent },
	{ path: 'user', component: IndividualUserComponent },
  ];

@NgModule({
	imports: [
		//RouterModule.forRoot(appRoutes, {useHash: true})
		RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
	],
	exports: [RouterModule]
})
export class AppRoutingModule{

}