import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useStyles from './styles';

const Slider = ({ images }) => {
  const classes = useStyles();

  return (
    <Carousel
      className={classes.mainSlider}
      axis='vertical'
      verticalSwipe='standard'
      thumbWidth='20'
      ariaLabel='slider'
      showStatus
      swipeable
      emulateTouch
    >
      {images?.map((image, index) => (
          <img key={index+image} src={image} alt='iphone' width='100%' height='100%' />
      ))}
    </Carousel>
  );
};
export default Slider;
