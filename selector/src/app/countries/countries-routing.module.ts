import { RouterModule, Routes } from "@angular/router";
import { SelectorPageComponent } from "./pages/selector-page/selector-page.component";
import { NgModule } from "@angular/core";
import { Expression } from "@angular/compiler";

const routes:Routes =[{
    path:'',
    children:[
        {path:'selector',component:SelectorPageComponent},
        {path:'**',redirectTo:'selector'},
    ]
}]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})

export class CountriesRoutingModule{}