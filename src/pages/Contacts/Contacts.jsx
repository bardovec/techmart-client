import React from 'react';
import {
  Grid,
  Typography,
  Container,
  TextField,
  Link,
  Button,
  Box,
  CardMedia,
  FormControl,
} from '@material-ui/core';
import useStyles from './styles';

const Contacts = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='lg' className={classes.container}>

      <CardMedia
        component='iframe'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20331.44757949476!2d30.570379459013434!3d50.433073142687554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c57deccaada1%3A0xa5e7cf7c9f8ff18b!2sDAN%20IT%20education!5e0!3m2!1suk!2sua!4v1635499530868!5m2!1suk!2sua'
        style={{ height: '40vh', width: '100%' }}
        className={classes.map}
      />

      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        spacing={2}
      >
        <Grid item xs={12} sm={6} md={6} className={classes.item}>
          <Typography variant='h2' className={classes.header}>
            Контакты:
          </Typography>

          <Typography variant='h5' className={classes.title}>
            Адресс:
          </Typography>
          <Link
            className={classes.links}
            href='https://www.google.com.ua/maps/place/DAN.IT/@50.4289618,30.5914387,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4c57deccaada1:0xa5e7cf7c9f8ff18b!8m2!3d50.4289584!4d30.5936274?hl=ru'
          >
            проспект Павла Тичини, 1в ТОЦ «Silver Breeze», офис А, 6-й этаж,
            Київ, 02152
          </Link>
          <Typography variant='h5' className={classes.title}>
            Телефон:
          </Typography>
          <Link href='tel:+380634538388' className={classes.links}>
            <Box display='inline' className={classes.icon}>
              &#9743;
            </Box>
            +38 (063) 453-83-88
          </Link>
          <Link href='tel:+380963159499' className={classes.links}>
            <Box display='inline' className={classes.icon}>
              &#9743;
            </Box>
            +38 (096) 315-94-99
          </Link>
          <Link href='tel:+380507885722' className={classes.links}>
            <Box display='inline' className={classes.icon}>
              &#9743;
            </Box>
            +38 (050) 788-57-22
          </Link>
          <Link href='tel:+380577619211' className={classes.links}>
            <Box display='inline' className={classes.icon}>
              &#9743;
            </Box>
            +38 (057) 761-92-11
          </Link>
          <Typography variant='h5' className={classes.title}>
            Факс:
          </Typography>
          <Link href='tel:+380 44 383 64 52' className={classes.links}>
            <Box display='inline' className={classes.icon}>
              &#9743;
            </Box>
            +380 44 383 64 52
          </Link>
          <Typography variant='h5' className={classes.title}>
            E-mail:
          </Typography>
          <Link
            href='mailto:techMart.danIt@gmail.com'
            className={classes.links}
          >
            <Box display='inline' className={classes.icon}>
              &#9993;
            </Box>
            techMart.danIt@gmail.com
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={6} className={classes.item}>
          <Typography variant='h5' className={classes.title}>
            Время работы:
          </Typography>
          <Typography className={classes.text} variant='body1'>
            Пн - Пт: с 9-30 до 18-00
          </Typography>
          <Typography className={classes.text} variant='body1'>
            Сб - Вс: с 10-00 до 16-00
          </Typography>

          <FormControl fullWidth className={classes.form}>
            <Typography className={classes.text} variant='body1'>
              &#9998; Если у Вас есть вопросы к нам, или пожелания, напишите!
            </Typography>
            <Typography variant='body1' className={classes.text}>
              Ваше мнения очень важно для нас.
            </Typography>
            <TextField
              variant='outlined'
              fullWidth
              label='Оставить отзыв'
              multiline
              rows={6}
              className={classes.textField}
            />
            <Button
              valiant='outlined'
              className={classes.contactButton}
              id='feedbackBtn'
            >
              Отправить
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Contacts;
