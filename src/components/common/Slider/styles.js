import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainSlider: {
    width: '380px',
    height: '520px',
    display: 'flex',
    flexDirection: 'row-reverse',
    textAlign: 'center',
    '& .carousel': {
      width: '170px',
    },

    '& .thumb': {
      opacity: 0.5,
    },

    '& .thumbs': {
      padding: '0px',
      display: 'flex',
      flexDirection: 'column ',
      alignAtems: 'center',
    },

    '& .thumb.selected': {
      border: 'none',
      opacity: 1,
    },

    '& .thumbs-wrapper ': {
      margin: '0px 10px',
    },

    '& .control-dots, .control-arrow, .carousel-status, .control-next': {
      display: 'none',
    },

    '& .carousel .slide': {
      marginBottom: '134px',
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

      '& .carousel .slide': {
        marginBottom: '118px',
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

      '& .carousel .slide': {
        marginBottom: '97px',
      },
    },
  },
}));
export default useStyles;
