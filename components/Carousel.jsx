import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CarouselSlideshow = () => {
    return (
        <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay={true} showIndicators={false} infiniteLoop={true} className="w-full">
            <div className="relative w-full h-[calc(100vh-72px)]">
                <img src="image1.jpg" alt="image1" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <div className="relative w-full h-[calc(100vh-72px)]">
                <img src="image2.jpg" alt="image2" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <div className="relative w-full h-[calc(100vh-72px)]">
                <img src="image3.jpg" alt="image3" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            <div className="relative w-full h-[calc(100vh-72px)]">
                <img src="image4.jpg" alt="image4" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
        </Carousel>
    );
}

export default CarouselSlideshow;