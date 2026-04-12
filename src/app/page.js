
import Support from "@/component/Footer/Support";
import Images from "@/component/instagram/Images";
import Instagram from "@/component/instagram/Instagram";
import Review from "@/component/Review/Review";
import Slider from "@/component/slider/Slider";
import Image from "next/image";

export default function Home() {
  return <div>
   <div  className=" h-[100vh]">


   </div>
    <Slider></Slider>

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
