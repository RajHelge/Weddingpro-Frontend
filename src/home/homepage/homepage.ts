import { AfterViewInit, Component, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PopularCategories } from '../popular-categories/popular-categories';
import { Whyweddingpro } from '../whyweddingpro/whyweddingpro';
import { FeaturedVendors } from '../featured-vendors/featured-vendors';
import { Weddinginspiration } from '../weddinginspiration/weddinginspiration';
import { Howitworks } from '../howitworks/howitworks';
import { Testimonials } from '../testimonials/testimonials';
import { AppDownload } from '../app-download/app-download';
import { Vendorregistration } from '../vendorregistration/vendorregistration';
import { Statscomponent } from '../statscomponent/statscomponent';
import { Bannercomponent } from "../bannercomponent/bannercomponent";
import { Footer } from "../footer/footer";
import { Navbar } from "../navbar/navbar";
import { VendorSearchComponent } from '../vendor-search-component/vendor-search-component';
import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-homepage',
  standalone:true,
  imports: [
    Bannercomponent,
    PopularCategories,
    Whyweddingpro,
    VendorSearchComponent,
    FeaturedVendors,
    Howitworks,
    Statscomponent,
    MatSidenavModule,
    Testimonials,
    Vendorregistration,
    MatSelectModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, Bannercomponent],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class Homepage implements AfterViewInit {
  showFiller = signal(false);
 ngAfterViewInit(): void {
//    document.querySelectorAll('*').forEach(el => {
//   if (el.scrollWidth > document.documentElement.clientWidth) {
//     console.log(el, el.scrollWidth);
//   }
// });
 }
}
