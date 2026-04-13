
import Support from "@/component/Footer/Support";
import Hero from "@/component/Header/Hero/Hero";
import Images from "@/component/instagram/Images";
import Instagram from "@/component/instagram/Instagram";
import ProductCard from "@/component/productCard/ProductCard";

import Review from "@/component/Review/Review";


export default function Home() {
  return <div>
   <div>


   </div>
    <Hero></Hero>
     <ProductCard></ProductCard>
    {/* images section */}
    <Images></Images>
    {/* instagram section */}
    <Instagram></Instagram>



{/* static section */}
    <div>
      <Review></Review>
      <Support></Support>
    </div>
  </div>;
}
