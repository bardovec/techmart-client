import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import useStyles from './styles';
import Loader from '../../../components/common/Loader';

const statusFormatter = (num, total) => `${num} из ${total}`;

const ProductPhotos = ({ className, images, productName }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const styles = useStyles();

  if (!images) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  return (
    <Carousel
      ariaLabel='product-photos-slider'
      axis='horizontal'
      swipeable={isMobile}
      emulateTouch={isMobile}
      showArrows={!isMobile}
      showIndicators
      swipeScrollTolerance={100}
      className={`${className} ${styles.productPhotosCarousel}`}
      statusFormatter={statusFormatter}
      thumbWidth={480/images.length}
    >
      {images.map((image, index) => (
        <img key={index + image} src={image} alt={productName} width='100%' height='100%' />
      ))}
    </Carousel>

  );
};

export default ProductPhotos;
