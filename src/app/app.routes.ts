import type { Routes } from "@angular/router"
import { HomeComponent } from "./pages/home/home.component"
import { ProductPageComponent } from "./pages/product-page/product-page.component"
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component"
import { ContactComponent } from "./pages/contact/contact.component"
import { AboutUsComponent } from "./pages/about-us/about-us.component"
import { PrivacyPolicyComponent } from "./pages/privacy-policy/privacy-policy.component"
import { TermsOfUseComponent } from "./pages/terms-of-use/terms-of-use.component"
import { ProductListComponent } from "./pages/product-list/product-list.component"


export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductPageComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutUsComponent },
  { path: "privacy", component: PrivacyPolicyComponent },
  { path: "terms", component: TermsOfUseComponent },
  { path: "products/list", component: ProductListComponent },
  { path: "**", redirectTo: "" }
];