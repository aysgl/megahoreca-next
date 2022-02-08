import { useState, useEffect } from "react";
import Slider from "react-slick";
import SlickCard from "./SlickCard";
import { useSelector } from "react-redux"

export default function SlickCarousel({ prodata, catdata }) {
    // const [products, setProducts] = useState(null);

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
    //         setProducts(response.data);
    //     });
    // }, []);

    // if (!products) return null;

    const { product } = useSelector(state => state.products)

    const settings = {
        infinite: true,
        speed: 2000,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        centerPadding: 10,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
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
    }

    return (
        <Slider {...settings}>
            {product.map((pro, i) =>
                <SlickCard
                    key={pro.id}
                    title={pro.title.substring(0, 40)}
                    price={pro.price}
                    catname={pro.categoryname}
                    subcatname={pro.subcategoryname}
                    stars={pro.stars}
                    stock={pro.stock}
                    discount={pro.discount}
                    badge={pro.price}
                    id={pro.catId}
                    slug={pro.slug}
                />
            )}
        </Slider>
    );
}