import { importProvidersFrom, type ApplicationConfig } from "@angular/core"
import { provideRouter, withComponentInputBinding } from "@angular/router"
import { provideClientHydration } from "@angular/platform-browser"
import { provideAnimations } from "@angular/platform-browser/animations"

import { routes } from "./app.routes"
import { HttpClientModule } from "@angular/common/http"

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(HttpClientModule),provideRouter(routes, withComponentInputBinding()), provideClientHydration(), provideAnimations()],
};

