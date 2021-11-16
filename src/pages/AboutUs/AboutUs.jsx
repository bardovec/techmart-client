import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import useStyles from "./style";

const Aboutus = () => {
  const classes = useStyles();

  const is600 = useMediaQuery("(min-width: 600px)");
  return (
    <div
      className={classes.imageWrapper}
      style={is600 ? null : { backgroundRepeat: "space" }}
    >
      <Box
        className={classes.containerStyle}
        style={{
          maxWidth: "100%",
        }}
      >
        <Box className={classes.aboutUsTextWrapper}>
          <Typography variant="h2">О Нас</Typography>
          <p className={classes.textStyle}>
            Магазин techmart предлагает широкий выбор техники от производителя
            по доступным ценам. Специализируемся на технике , которая будет
            Вашим помощником в повседневной жизни.
          </p>
        </Box>
        <Box className={is600 ? classes.container : classes.adaptiveContainer}>
          <div
            className={
              is600 ? classes.counterWrapper : classes.adaptiveCounterWrapper
            }
          >
            <Typography variant="h3" className={classes.counterStyle}>
              1 +
            </Typography>
            <p className={classes.counterParagraph}>
              лет опыта в разработке и <br /> совершенствовании
            </p>
          </div>
          <div
            className={
              is600 ? classes.counterWrapper : classes.adaptiveCounterWrapper
            }
          >
            <Typography variant="h3" className={classes.counterStyle}>
              8 +
            </Typography>
            <p className={classes.counterParagraph}>
              специалистов - наша гордость <br /> и главный ресурс
            </p>
          </div>
          <div
            className={
              is600 ? classes.counterWrapper : classes.adaptiveCounterWrapper
            }
          >
            <Typography variant="h3" className={classes.counterStyle}>
              10 +
            </Typography>
            <p className={classes.counterParagraph}>
              товаров для наших покупателей
              <br /> по всей стране
            </p>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Aboutus;
