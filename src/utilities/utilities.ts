import { server } from "typescript";

var serverurl='https://weddingpro.in/api/api/';
var serverImgUrl='https://weddingobucket.s3.ap-south-1.amazonaws.com/';
export const UrlModel= {
  serverImgUrl:'https://weddingobucket.s3.ap-south-1.amazonaws.com/',
  home:{
    popularCategories:serverurl+'Categories/GetPopularCategory',
    allcategories:serverurl+'Categories/GetCategories?withServices=',
    GetVendorListing:serverurl+'Listing/GetVendorsListing',
    GetFeaturedVendors:serverurl+'Home/GetFeaturedVendors',
  },
  vendor:{

  },
  admin:{

  },

}
