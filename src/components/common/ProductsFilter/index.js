import React, { useEffect } from "react";
import {
  Box,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Slider,
  Checkbox,
  useMediaQuery,
  TextField,
} from "@mui/material";
import useStyles from "./styles";

const ProductsFilter = ({
  productsList,
  value,
  setValue,
  maxValue,
  minValue,
  getColorsItems,
  quantity,
  setQuantity,
  getBrandItems,
}) => {
  const classes = useStyles();

  const is520 = useMediaQuery("(max-width:520px)");

  useEffect(() => {
    setValue([minValue[0].currentPrice, maxValue[0].currentPrice]);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const colorCheckbox = [
    ...new Set(productsList.map((item) => item.color)),
  ].map((item) => (
    <FormControlLabel
      id={item}
      key={item}
      control={
        <Checkbox
          onClick={getColorsItems}
          id={item}
          size={is520 ? "small" : "medium"}
        />
      }
      color="success"
      label={item}
      onClick={(e) => e.stopPropagation()}
      className={is520 ? classes.checkBoxAdaptive : null}
    />
  ));

  const brandCheckbox = [
    ...new Set(productsList.map((item) => item.brand)),
  ].map((item) => (
    <FormControlLabel
      id={item}
      key={item}
      control={
        <Checkbox
          onClick={getBrandItems}
          id={item}
          size={is520 ? "small" : "medium"}
        />
      }
      color="success"
      label={item}
      onClick={(e) => e.stopPropagation()}
      className={is520 ? classes.checkBoxAdaptive : null}
    />
  ));

  const quantityChange = (e) => {
    setQuantity({ ...quantity, [e.target.value]: e.target.checked });
  };

  return (
    <div className={is520 ? classes.productsFilter720 : classes.productsFilter}>
      <FormLabel component="legend">Цена</FormLabel>
      <Box
        className={classes.textFieldWrapper}
        sx={is520 ? { width: 180 } : { width: 220 }}
      >
        <TextField
          style={is520 ? { fontSize: "10px" } : null}
          size="small"
          id="outlined-basic"
          label="От"
          variant="outlined"
          value={value[0]}
          type="number"
        ></TextField>
        <TextField
          size="small"
          id="outlined"
          label="До"
          variant="outlined"
          value={value[1]}
          type="number"
        />
      </Box>
      <Box sx={{ width: 180 }} className={classes.priceSlider}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          size="small"
          min={minValue[0].currentPrice}
          max={maxValue[0].currentPrice}
        />
      </Box>

      <Box className={classes.checkboxWrapper}>
        <FormLabel component="legend">Цвет</FormLabel>
        {colorCheckbox}
      </Box>
      <Box className={classes.checkboxWrapper}></Box>
      <Box className={classes.checkboxWrapper}>
        <FormLabel component="legend">Бренд</FormLabel>
        {brandCheckbox}
      </Box>
      <Box className={classes.checkboxWrapper}>
        <FormLabel component="legend">Наличие</FormLabel>
        <RadioGroup
          aria-label="Наличие"
          name="controlled-radio-buttons-group"
          value={quantity}
        >
          <FormControlLabel
            value="inStock"
            control={<Checkbox onChange={quantityChange} />}
            label="В наличии"
          />
          <FormControlLabel
            value="noInStock"
            control={<Checkbox onChange={quantityChange} />}
            label="Нет в наличии"
          />
        </RadioGroup>
      </Box>
    </div>
  );
};

export default ProductsFilter;
