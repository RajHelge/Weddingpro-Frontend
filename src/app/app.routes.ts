import { Routes } from '@angular/router';
import { Homelayout } from '../home/homelayout/homelayout';
import { Homepage } from '../home/homepage/homepage';
import { Contactus } from '../home/contactus/contactus';
import { Aboutus } from '../home/aboutus/aboutus';
import { Faqs } from '../home/faqs/faqs';
import { Vendoroutlet } from '../vendor/vendoroutlet/vendoroutlet';
import { Dashboard } from '../vendor/dashboard/dashboard';
import { Myprofile } from '../vendor/myprofile/myprofile';
import { Account } from '../vendor/account/account';
import { Vendor } from '../vendor/vendor';
import { Adminlayout } from '../admin/adminlayout/adminlayout';
import { Admindashboard } from '../admin/admindashboard/admindashboard';
import { Vendorlist } from '../admin/vendorlist/vendorlist';
import { Userlist } from '../admin/userlist/userlist';
import { Slides } from '../admin/slides/slides';
import { Promotions } from '../admin/promotions/promotions';
import { PromotionPricing } from '../admin/promotion-pricing/promotion-pricing';
import { Myleads } from '../vendor/leads/myleads/myleads';
import { Mypromotions } from '../vendor/promotion/mypromotions/mypromotions';
import { Reviews } from '../vendor/reviews/reviews';
import { Aboutmybusiness } from '../vendor/aboutmybusiness/aboutmybusiness';
import { Myservices } from '../vendor/myservices/myservices';
import { MyClients } from '../vendor/my-clients/my-clients';

export const routes: Routes = [
{
    path:'',component:Homelayout,children:[
            {path:'',component:Homepage},
            {path:'aboutus',component:Aboutus},
            {path:'faqs',component:Faqs},
            {path:'contactus',component:Contactus},
    ],
},
    {path:'vendor',component:Vendoroutlet,children:[
            {path:'',component:Dashboard},
            {path:'profile',component:Myprofile},
            {path:'account',component:Account},
            {path:'my-promotions',component:Mypromotions},
            {path:'my-leads',component:Myleads},
            {path:'business-intro',component:Aboutmybusiness},
            {path:'my-reviews',component:Reviews},
            {path:'my-services',component:Myservices},
            {path:'my-clients',component:MyClients},
    ]
},
{
    path:'admin',component:Adminlayout,children:[
            {path:'',component:Admindashboard},
            {path:'vendors',component:Vendorlist},
            {path:'users',component:Userlist},
            {path:'slides',component:Slides},
            {path:'promotions',component:Promotions},
            {path:'promotions-pricing',component:PromotionPricing}
        ]
}
];
