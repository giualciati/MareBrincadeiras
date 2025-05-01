import type { Routes } from "@angular/router"
import { HomeComponent } from "./pages/home/home.component"
import { ProductPageComponent } from "./pages/product-page/product-page.component"
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component"
import { ContactComponent } from "./pages/contact/contact.component"
import { AboutUsComponent } from "./pages/about-us/about-us.component"
import { PrivacyPolicyComponent } from "./pages/privacy-policy/privacy-policy.component"
import { TermsOfUseComponent } from "./pages/terms-of-use/terms-of-use.component"
import { ProductListComponent } from "./pages/product-list/product-list.component"
import { CategoryManagementComponent } from "./pages/category-management/category-management.component"
import { ProductRegistrationComponent} from "./pages/product-registration/product-registration.component"
import { LoginUserComponent} from "./pages/login-user/login-user.component"
import { PersonalInformationComponent } from "./pages/personal-information/personal-information.component"
import { LandingAdmComponent } from "./pages/landing-adm/landing-adm.component"
<<<<<<< HEAD
import { PaginaDePedidosComponent } from "./pages/pagina-de-pedidos/pagina-de-pedidos.component"
import { CadastroUsuarioComponent } from "./pages/cadastro-usuario/cadastro-usuario.component"
import { CollaboratorsComponent } from "./pages/collaborators/collaborators.component"
import { EditProductsComponent } from "./pages/edit-products/edit-products/edit-products.component"

=======
import { RegisterCardComponent } from "./pages/register-card/register-card.component"
>>>>>>> 22ed64d36a60de4cf795f9429bb3dd0937331fd2



export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductPageComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutUsComponent },
  { path: "privacy", component: PrivacyPolicyComponent },
  { path: "terms", component: TermsOfUseComponent },
  { path: "category", component: CategoryManagementComponent },
  { path: "products/list", component: ProductListComponent },
  { path: "products/registration", component: ProductRegistrationComponent },
  { path: "login/user", component: LoginUserComponent },
  { path: "register/card", component: RegisterCardComponent},
  { path: "information", component: PersonalInformationComponent},
  { path: "landing/adm", component: LandingAdmComponent},
<<<<<<< HEAD
  { path: "cadastro-usuario", component: CadastroUsuarioComponent },
  { path: "pagina-de-pedidos", component: PaginaDePedidosComponent },
  { path: "collaborators", component: CollaboratorsComponent },
  { path: "product/edit/:id", component: EditProductsComponent },
=======
>>>>>>> 22ed64d36a60de4cf795f9429bb3dd0937331fd2
  { path: "**", redirectTo: "" }
];
