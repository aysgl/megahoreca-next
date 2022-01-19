import { useState, useEffect } from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import axios from "axios";

export default function ReviewCarousel() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setProducts(response.data);
        });
    }, []);

    if (!products) return null;

    const settings = {
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        centerPadding: 10,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }

    return (
        <Slider {...settings}>
            {products.map((pro, i) =>
                <ReviewCard
                    key={i}
                    photo={pro.id}
                    price={pro.id}
                    id={pro.id}
                    title={pro.name}
                    badge={pro.id == 4 || pro.id == 7 || pro.id == 1} />
            )}
        </Slider>
    );
}