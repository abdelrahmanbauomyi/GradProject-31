import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard";
import "./arrow.css";
import useWidthAndHeight from "../../../hooks/useWidthAndHeight";
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
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Slider>
    </div>
  );
};
export default SliderComponent;
