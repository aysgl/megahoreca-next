import { useEffect, useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SlickGallery({ data }) {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, [slider2, slider1]);

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav"
    };

    const settingsThumbs = {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: "0px"
    };

    return (
        <>
            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={(slider) => setSlider1(slider)}
            >
                {data.map((item, index) => (
                    <img className='rounded' alt="" src={item.image} key={index} />
                ))}
            </Slider>

            <Slider
                {...settingsThumbs}
                asNavFor={nav1}
                ref={(slider) => setSlider2(slider)}
            >
                {data.map((item) => (
                    <div key={item.id} className='pt-2'>
                        <img
                            className='rounded'
                            src={item.image}
                            alt=""
                            style={{
                                width: "100%",
                                height: 100,
                                objectFit: "cover",
                                cursor: "pointer"
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </>
    );
};

