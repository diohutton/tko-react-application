import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../images/slides/slide1.png";
import slide2 from "../images/slides/slide2.png";
import slide3 from "../images/slides/slide3.png";
import slide4 from "../images/slides/slide4.png";
import slide5 from "../images/slides/slide5.png";

/**
 * Component for displaying advertiser slides on Features page
 */
export default function TKOCarousel() {
  return (
    <Carousel showArrows={true} showThumbs={false}>
      <div>
        <img src={slide1} alt="Slide 1 of advertisers" />
      </div>
      <div>
        <img src={slide2} alt="Slide 2 of advertisers" />
      </div>
      <div>
        <img src={slide3} alt="Slide 3 of advertisers" />
      </div>
      <div>
        <img src={slide4} alt="Slide 4 of advertisers" />
      </div>
      <div>
        <img src={slide5} alt="Slide 5 of advertisers" />
      </div>
    </Carousel>
  );
}
