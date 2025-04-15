import type { ApplicationConfig } from "@angular/core"
import { provideRouter, withComponentInputBinding } from "@angular/router"
import { provideClientHydration } from "@angular/platform-browser"
import { provideAnimations } from "@angular/platform-browser/animations"

import { routes } from "./app.routes"

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideClientHydration(), provideAnimations()],
}