import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Freebook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
   <>
 <div  className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
    <div>
    <h1 className='font-semibold text-xl pb-2'>Books!</h1>
    <p>Welcome to ExamWexam, your ultimate destination for all things books! Here, we celebrate the joy of reading by offering a curated selection of titles across genres, engaging reviews, and a vibrant community of fellow book lovers. </p>
    </div>
   
   <div max-w-screen-2xl container mx-auto md:px-20 px-4>
   <Slider {...settings} max-w-screen-2xl container mx-auto md:px-20 px-4>
   <div className="card bg-base-100 w-50 px-8 py-8 shadow-xl">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/gradient-scientific-flyer-design_23-2149589902.jpg?semt=ais_hybrid"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Physics!
      <div className="badge badge-secondary">Free</div>
    </h2>
    <p>Discover how physics shapes our understanding of the universe</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">$0</div>
      <div className="badge badge-outline cursor-pointer rounded-full  h-7 w-20  hover:bg-pink-500 hover:text-white duration-200">Buy</div>
    </div>
  </div>
  </div>
  <div className="card bg-base-100 w-96   px-8 py-8 shadow-xl">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/flat-national-science-day-vertical-poster-template_23-2149289117.jpg?semt=ais_hybrid"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Science!
      <div className="badge badge-secondary">Free</div>
    </h2>
    <p> where every concept illuminates the wonders of our world</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">$0</div>
      <div className="badge badge-outline  cursor-pointer rounded-full  h-7 w-20 hover:bg-pink-500 hover:text-white duration-200">Buy</div>
    </div>
  </div>
  </div>
  <div className="card bg-base-100 w-96  px-8 py-8  shadow-xl">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/flat-design-scientific-flyer-template_23-2149575285.jpg?semt=ais_hybrid"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Chemistry!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Chemistry is the science that explores the properties, composition, </p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">$15</div>
      <div className="badge badge-outline cursor-pointer rounded-full  h-7 w-20  hover:bg-pink-500 hover:text-white duration-200">Buy</div>
    </div>
  </div>
  </div>
  <div className="card bg-base-100 w-96  px-8 py-8 shadow-xl">
  <figure>
    <img
      src="https://img.freepik.com/premium-photo/green-book-with-numbers-3-3-written-it_1032785-32245.jpg?semt=ais_hybrid"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Maths!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>revealing the intricate interactions that shape our world.</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline cursor-pointer rounded-full  h-7 w-20  hover:bg-pink-500 hover:text-white duration-200">Buy</div>
    </div>
  </div>
</div>  
 
      </Slider>
   </div>
   </div> 
   </>
  
  )
}

export default Freebook
