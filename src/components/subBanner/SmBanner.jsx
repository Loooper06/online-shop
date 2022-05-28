import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const SmBanner = (props) => {
    return ( 
        <div className='smBanner mt-3 mt-lg-0' data-aos='fade-up' data-aos-offset='150' data-aos-duration='1000'>
            <div className='smBannerWrapper'>
                <img src={props.img} alt="banner" className='smBannerImg' />
                <div className='smBannerCaption'>
                    <article>{props.article}</article>
                    <button className='exploreButton'>Explore <ArrowRightAltIcon /></button>
                </div>
            </div>
        </div>
     );
}
 
export default SmBanner;