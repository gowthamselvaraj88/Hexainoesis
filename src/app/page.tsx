import * as React from "react";
// import Scroll from "@/component/Scroll";
import Subscribe from "@/component/Socialmedia";
import Address from "@/component/Address";
import Exploreproduct from "@/component/Exploreproduct";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Scrollwomen from "@/component/Scrollwomen";
import Scrollkid from "@/component/Scrollkid";
import Imagegallery from "@/component/Imagegallery";
import QwelCarousel from "@/component/OwelCarousel"


export default function MediaCard() {
  return (
    <div className="w-full h-full ">
      {/* <section>
        <Header />
        
      </section> 
      
      <section>
        <Imagegallery />
      </section>*/}
      <QwelCarousel />
      {/* <section
        className="p-10 10 10 10 flex flex-col bg-white m-auto p-auto
         section1 border-y border-dotted-amber-80"
        id="mens"
      >
        <Scroll />
      </section> */}

       <section
        className="p-10 10 10 10 flex flex-col bg-white m-auto p-auto
         section1 border-y border-dotted-amber-80"
        id="womens"
      >
        <Scrollwomen />
      </section>
      <section
        className="p-10 10 10 10 flex flex-col bg-white m-auto p-auto
         section1 border-y border-dotted-amber-80"
        id="kids"
      >
        <Scrollkid />
      </section>

     {/* <section
        className="p-10 10 10 10 flex flex-col bg-white m-auto p-auto"
        id="kids border-y border-dotted-amber-80"
      >
        <Subscribe />
      </section>
      <section
        className="p-10 10 10 10 flex flex-col bg-white m-auto p-auto"
        id="Explore border-y border-dotted-amber-80"
      >
        <Exploreproduct />
      </section>
      <section className="p-10 10 10 10 flex flex-col bg-white m-auto p-auto
       border-y border-dotted-amber-80"> {" "}
        <Address />
      </section>
        <section>
        <Footer />
      </section> */}
    </div>
  );
}
