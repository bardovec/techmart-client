import React, { useCallback, useState } from "react";
import {
    Grid,
    Typography,
    Link,
    TextField,
    Button,
    Box
} from "@material-ui/core";
import Logo from "../common/Logo/Logo";
import { useStyles } from './styles';
import { footerLinks } from './consts';
import icons from './assets';

const Footer = () => {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState('');
    const clickOnButtonEmailInput = () => {
        return inputValue;
    }
    const inputChangeHandler = useCallback((e) => setInputValue(e.target.value));

    return (
        <Box role={'footer'}>
            <Grid
                container
                spacing={2}
                className={classes.footerFirst}
                style={{ margin: 0, width: '100%' }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Logo />
                    <Box style={{ marginTop: "30px" }}>
                        <Link href="/aboutus" className={classes.footerLink} >
                            О нас
                        </Link>
                        <Link href="/contacts" className={classes.footerLink} >
                            Контакты
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={classes.footerTitle}>
                        Категории
                    </Typography>
                    <Link href="/products" className={classes.footerLink}>
                        Apple Store
                    </Link>
                    <Link href="/laptops" className={classes.footerLink}>
                        Ноутбуки
                    </Link>
                    <Link href="/tablets" className={classes.footerLink}>
                        Планшеты
                    </Link>
                    <Link href="/smartphones" className={classes.footerLink}>
                        Смартфоны
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={classes.footerTitle}>
                        Связаться с нами
                    </Typography>
                    {footerLinks.contacts.map((contactPhone, index) => (
                        <Link href={`tel:${contactPhone}`} className={classes.footerLink} key={index}>
                            {contactPhone}
                        </Link>
                    ))}
                    {footerLinks.timeToCall.map((link, index) => (
                        <Typography className={classes.footerLink} key={index}>
                            {link}
                        </Typography>
                    ))}
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className={classes.footerTitle}>
                        Будьте всегда в курсе наших новостей!
                    </Typography>
                    <Box style={{ position: 'relative' }}>
                        <TextField
                            className={classes.multilineColor}
                            InputProps={{
                                className: classes.multilineColor
                            }}
                            fullWidth
                            placeholder="email"
                            variant="outlined"
                            role='seachFooter'
                            onChange={inputChangeHandler}
                        />
                        <Button color="inherit" className={classes.footerEmailInputButton} onClick={clickOnButtonEmailInput} role='buttonSeachFooter'>
                            <img src={icons.vector} alt="vector" />
                        </Button>
                    </Box>
                    <Typography
                        className={classes.footerTitle}
                        style={{ margin: "30px 0 22px" }}
                        id='socialNetworks'
                    >
                        Мы в соц. сетях:
                    </Typography>
                    <Link href="https://www.instagram.com/" target="_blank" className={classes.linkWrapper} id='instagramIcon'>
                        <img src={icons.instagram} alt="instagram" />
                    </Link>
                    <Link href="https://www.facebook.com/" target="_blank" className={classes.linkWrapper} id='facebookIcon'>
                        <img src={icons.facebook} alt="facebook" />
                    </Link>
                    <Link href="https://www.google.com/" target="_blank" className={classes.linkWrapper} id='googleIcon'>
                        <img src={icons.google} alt="google" />
                    </Link>
                    <Link href="https://www.linkedin.com/" target="_blank" className={classes.linkWrapper} id='linkedinIcon'>
                        <img src={icons.linkedin} alt="linkedin" />
                    </Link>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                className={classes.footer}
            >
                <Typography className={classes.text}>
                    © Интернет-магазин TechMart
                </Typography>
                <Grid item className={classes.container}>
                    <Typography className={classes.linkWrapper}>
                        <img
                            src={icons.visa}
                            alt="visa"
                        />
                    </Typography>
                    <Typography className={classes.linkWrapper}>
                        <img
                            src={icons.masterCard}
                            alt="master-card"
                        />
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
