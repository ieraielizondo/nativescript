import { HomeComponent } from "./pages/home/home.component";
//import { RepoContentComponent } from "./pages/reporContent/repoContent.component";

export const routes = [
  { path: "", component: HomeComponent }
  //,  { path: "list", component: RepoContentComponent }
];

export const navigatableComponents = [
  HomeComponent
  //,  RepoContentComponent
];