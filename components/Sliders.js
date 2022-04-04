import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
    };
    return (
        <div className="mx-auto mb-10 -mt-3">
            <Slider {...settings}>
                <div>
                    <img src="https://i.pcmag.com/imagery/articles/00tLYTqwmgFvacZlYPc5ecO-8..v1583853669.jpg" className="w-screen" style={{height:'88vh'}}/>
                </div>
                <div className="">
                    <img src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="w-screen " style={{height:'88vh'}}/>
                </div>
                <div className="">
                    <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/pro_gear.jpg?v=1644836883" className="w-screen" style={{height:'88vh'}}/>
                </div>
            </Slider>
        </div>
    );
}