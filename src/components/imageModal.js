import data from '../assets/image_data.json';

/* Swiper 라이브러리 */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
/* Swiper 라이브러리 */


const imageModal = ({clickedImg, setClickedImg, currentIndex}) => {

    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    }

    return <>
    <div className="overlay dismiss" onClick={handleClick}>
        <span className="dismiss" onClick={handleClick}>X</span>
        <Swiper
            initialSlide={currentIndex}
            centeredSlides={true} //가운데 정렬
            loop={true}
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
            {data.data.map((item, index) => (
                <SwiperSlide><img className="" src={item.thumb_image_link} alt="original size"/></SwiperSlide>
            ))}
        </Swiper>
    </div>
    </>;
};

export default imageModal;