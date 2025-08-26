import React, { useState } from 'react';
import data from '../assets/image_data.json';
import pinIcon from '../assets/location-pin.png';
import brideAccountData from '../assets/bride_account_number_data.json';
import groomAccountData from '../assets/groom_account_number_data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import '../App.css';
import ImageModal from '../components/imageModal';
import AccountModal from '../components/accountModal';
import Guestbook from '../components/guestbook'

function Bride() {
  // state for image modal
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  // state for account modal
  const [clickedAccountData, setClickedAccountData] = useState(null);
  const [copiedAccount, setCopiedAccount] = useState(null);

  const navermaps = useNavermaps()

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };
  const accountClick = (account_data) => {
    setClickedAccountData(account_data.data);
  };

  return (
    <div className="">
      <div className='main container'>
        <div className="row justify-content-md-center">
          <div className="col col-md-2 col-lg-3">
          </div>

          <div className="col-md">
            <div className='mainsection'>
              <div>
                <img src="gallery/index_main.jpg" className='main-image' alt='t1'></img>
              </div>
              <div className='mainsection-text'>
                <div className='mainsection-text-1'>결혼식에 초대합니다</div>
                <div className='mainsection-text-2'>
                  최영진  <span className='text2-inner'> & </span> 김은아
                </div>
                <div className='mainsection-text-3'>2025. 07. 06 SUN PM 12:10<br />서울웨딩 타워</div>
              </div>
            </div>
            <div className='invitation-section'>
              <div className='invitation-section-text1'>초대</div>
              <div className='invitation-section-text2'>
                매년 7월 6일이 되면,<br /><br />저희는 이날의 사진첩을<br />꺼내보며<br /><br />
                인생에서 가장 행복했던 기억을<br />떠올릴 것입니다.<br /><br />
                그 때, 그 사진 속에,<br />저희와 함께 웃고 있는<br />여러분이 있었으면 좋겠습니다.
              </div>
              <div className='invitation-section-text3'>
                최태식・심민주<span className='text3-inner'>의 장남</span> <span className='text3-name'>최영진</span>
              </div>
              <div className='invitation-section-text3'>
                김금곤・노성자<span className='text3-inner'>의 차녀</span> <span className='text3-name'>김은아</span>
              </div>
            </div>
            <div className='gallery-section'>
              <div className='gallery-section-text'>
                사진
              </div>
            </div>
            <div>
              <div className='gallery-image-list-wrapper row'>
                {data.data.map((item, index) => (
                  <div key={index} className='col-4'>
                    <div className='image-wrapper'>
                      <img className='gallery-image' src={item.thumb_image_link} alt={item.text} onClick={() => handleClick(item, index)} />
                    </div>
                  </div>
                ))}
              </div>
              {clickedImg && <ImageModal
                clickedImg={clickedImg}
                currentIndex={currentIndex}
                setClickedImg={setClickedImg}
              />}
            </div>
            <div className='location-section'>
              <div className='location-section-text1'>
                지도
              </div>
            </div>
            <div className='location-map-section'>
              <MapDiv
                style={{
                  width: '100%',
                  height: '350px'
                }}
              >
                <NaverMap
                  defaultCenter={new navermaps.LatLng(37.495044, 127.115728)}
                  defaultZoom={16}
                >
                  <Marker
                    position={new navermaps.LatLng(37.495044, 127.115728)}
                    icon={{
                      url: pinIcon,
                      size: new navermaps.Size(64, 64),
                    }}
                  />
                </NaverMap>
              </MapDiv>
            </div>
            <div className='location-info-section'>
              <div className='location-info-section-text1'>서울웨딩타워</div>
              <div className='location-info-section-text2'>
                서울 송파구 양재대로 932 2층<br />
                Tel. 02-463-5000
              </div>
            </div>
            {/* <Guestbook /> */}
            <div className='congratulatory-section'>
              <div className='congratulatory-section-text'>마음 전하실 곳</div>
              <div
                className='congratulatory-section-btn'
                onClick={() => accountClick(groomAccountData)}>신랑측 계좌번호</div>
              <div
                className='congratulatory-section-btn'
                onClick={() => accountClick(brideAccountData)}>신부측 계좌번호</div>
            </div>
            {clickedAccountData && <AccountModal
              clickedAccountData={clickedAccountData}
              setClickedAccountData={setClickedAccountData}
              copiedAccount={copiedAccount}
              setCopiedAccount={setCopiedAccount}
            />}
          </div>

          <div className="col col-md-2 col-lg-3">
          </div>
        </div>
      </div>
    </div>

  );
}

export default Bride;
