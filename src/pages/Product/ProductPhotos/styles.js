import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    placeContent: 'center',
  },
  productPhotosCarousel: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& li, & ul': {
      listStyle: 'none',
    },

    '& img': {
      objectFit: 'contain',
    },
    '& .slider-wrapper': {
      height: '480px',
      '& .slider': {
        height: '100%',
        '& .slide': {
          height: '100%',
        },
      },
    },

    '& .thumbs': {
      padding: '0px',
      margin: '0px',
      display: 'flex',
      justifyContent: 'space-around',
    },

    '& .thumb': {
      opacity: 0.5,
      height: '120px',
      borderRadius: '5px',

      '&.selected': {
        border: '3px solid gray',
        opacity: 1,
      },
    },

    '& .thumbs-wrapper ': {
      margin: '0',
      padding: '10px',
    },

    '& .carousel-status': {
      boxShadow: '0px 0px 10px 5px rgb(0 0 0 / 10%)',
      background: 'rgb(0 0 0 / 10%)',
      top: '5px',
      right: '15px',
    },
  },

  [theme.breakpoints.down('sm')]: {
    mainSlider: {
      width: '230px',
      height: '530px',
      flexDirection: 'column',

      '& .carousel': {
        width: '100%',
      },

      '& .thumbs': {
        flexDirection: 'row',
      },
    },
  },

  [theme.breakpoints.down('xs')]: {
    mainSlider: {
      margin: '0 auto',
      width: '190px',
      height: '440px',
      flexDirection: 'column',
      '& .carousel': {
        width: '100%',
      },

      '& .thumbs': {
        flexDirection: 'row',
      },
    },
  },
}));
export default useStyles;
