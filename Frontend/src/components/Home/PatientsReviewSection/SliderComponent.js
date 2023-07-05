import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard";
import "./arrow.css";
import useWidthAndHeight from "../../../hooks/useWidthAndHeight";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const SliderComponent = () => {
  const [width] = useWidthAndHeight();
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: width > 2000 ? 4 : width > 1550 ? 3 : width > 1100 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
  };
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get("http://localhost:8000/review");
      setReviews(response.data);
    };
    fetchReviews()
  }, []);
  if (!reviews) return null;
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        {reviews.map((review) => (
          <ReviewCard review= {review} />
        ))}
   
  
      
      </Slider>
    </div>
  );
};
export default SliderComponent;
