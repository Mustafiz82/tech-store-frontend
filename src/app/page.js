
import Support from "@/component/Footer/Support";
import Hero from "@/component/Header/Hero/Hero";
import Images from "@/component/instagram/Images";
import Instagram from "@/component/instagram/Instagram";
import LoginPage from "@/component/Login/LoginPage";
import CardItem from "@/component/productCard/CardItem";
import ProductCard from "@/component/productCard/ProductCard";
import CategoryOne from "@/component/productCard/productCategory/CategoryOne";
import CategoryThree from "@/component/productCard/productCategory/CategoryThree";
import CategoryTwo from "@/component/productCard/productCategory/CategoryTwo";

import Review from "@/component/Review/Review";


export default function Home() {
  return <div>
   <div>


   </div>
    <Hero></Hero>
     <ProductCard></ProductCard>
     <CardItem></CardItem>

     {/* product-category */}
     <CategoryOne></CategoryOne>
     <CategoryTwo></CategoryTwo>
     <CategoryThree></CategoryThree>

    {/* images section */}
    <Images></Images>
    {/* instagram section */}
    <Instagram></Instagram>



{/* static section */}
    <div>
      <Review></Review>
     <LoginPage></LoginPage>
    </div>
  </div>;
}
