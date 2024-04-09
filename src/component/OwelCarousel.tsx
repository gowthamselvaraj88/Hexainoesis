'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactStars from 'react-stars';
import "./OwelCarousel.css";
import CardData from './CardData';


const OwelCarousel = () => {

  const responsive = {
    superdisplay: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }

  };
  const menData = [
    {
        id:1,
        image01:"./images/men-01.jpg",
        name:"Classic Spring",
        price:"$120.00"
    },
    {   id:2,
        image01:"./images/men-02.jpg",
        name:"Air force 1 X",
        price:"$90.00"
    },
    {   id:3,
        image01:"./images/men-03.jpg",
    name:"LoveNana `20",
    price:"$150.00"
},{
  id:1,
  image01:"./images/men-01.jpg",
  name:"Classic Spring",
  price:"$120.00"
},
{   id:2,
  image01:"./images/men-02.jpg",
  name:"Air force 1 X",
  price:"$90.00"
},
{   id:3,
  image01:"./images/men-03.jpg",
name:"LoveNana `20",
price:"$150.00"
}
]
const mensDatas = menData.map(item =>( <CardData imageUrl={item.image01} name={item.name} price={item.price} star={item.star} />))
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading p-8">
            <h2 className="text-5xl font-bold">MEN'S Lastest</h2>
            <span className="text-sm">
              Details to details is what makes Hexashop different from the
              other themes.
            </span>
          </div>
        </div>
      </div>
      <div className='p-5'>
        <Carousel responsive={responsive}>
          {mensDatas} 
          
          {/* <div><img
                className="rounded-md "
                src="./images/men-02.jpg"
                width={300}
                height={300}
                alt="men"
              />
              
              <p>Classic dress</p>
              <p>$130.00</p>
              <ReactStars 
        count={5} 
        size={24} 
        color2={'#ffd700'} /></div>
    
              <div><img
                className="rounded-md "
                src="./images/men-03.jpg"
                width={300}
                height={300}
                alt="men"
              />
              <p>Classic dress</p>
              <p>$130.00</p>
              <ReactStars 
        count={5} 
        size={24} 
        color2={'#ffd700'} /></div>
              <div><img
                className="rounded-md "
                src="./images/men-01.jpg"
                width={300}
                height={300}
                alt="men"
              />
              <p>Classic dress</p>
              <p>$130.00</p>
              <ReactStars 
        count={5} 
        size={24} 
        color2={'#ffd700'} /></div>
  <div><img
                className="rounded-md mt-100 p-2"
                src="./images/men-02.jpg"
                width={300}
                height={300}
                alt="men"
              />
              <p>Classic dress</p>
              <p>$130.00</p>
              <ReactStars 
        count={5} 
        size={24} 
        color2={'#ffd700'} /></div>
  <div><img
                className="rounded-md mt-100 p-2"
                src="./images/men-03.jpg"
                width={300}
                height={300}
                alt="men"
              />
              <p>Classic dress</p>
              <p>$130.00</p>
              <ReactStars 
        count={5} 
        size={24} 
        color2={'#ffd700'} /></div>
              <div><img
                 className="rounded-md mt-100 p-2"
                src="./images/men-01.jpg"
                width={300}
                height={300}
                alt="men"
              />
              <p>Classic dress</p>
              <p>$130.00</p>
              <ReactStars 
        count={5} 
        size={24} 
        color2={'#ffd700'} /></div> */}

        </Carousel>
      </div>
    </div>


  )
}

export default OwelCarousel
