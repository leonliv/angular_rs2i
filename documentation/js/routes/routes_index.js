var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"/login","pathMatch":"full"},{"path":"items","loadChildren":"./items/items.module#ItemsModule","children":[{"kind":"module","children":[{"name":"appRoutes","filename":"src/app/items/items-routing.module.ts","module":"ItemsRoutingModule","children":[{"path":"","redirectTo":"/login","pathMatch":"full"},{"path":"list","component":"ListComponent"},{"path":"livrees","component":"LivresComponent"},{"path":"add","component":"AddComponent"}],"kind":"module"}],"module":"ItemsModule"}]},{"path":"home","loadChildren":"./home/home.module#HomeModule","children":[{"kind":"module","children":[{"name":"appRoutes","filename":"src/app/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"","component":"HomeComponent"}],"kind":"module"}],"module":"HomeModule"}]}],"kind":"module"},{"name":"appRoutes","filename":"src/app/login/login-routing.module.ts","module":"LoginRoutingModule","children":[{"path":"login","component":"LoginComponent"}],"kind":"module"},{"name":"appRoutes","filename":"src/app/page-not-found/page-not-found-routing.module.ts","module":"PageNotFoundRoutingModule","children":[{"path":"page-not-found","component":"PageNotFoundComponent"}],"kind":"module"}]}