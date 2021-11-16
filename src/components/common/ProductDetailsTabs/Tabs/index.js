import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useState} from "react";
import {Container, Paper} from "@material-ui/core";

export default function ProductTabs({setDescription, setSpecifications, setReviews}) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleDesc = () => {
        setDescription(true);
        setSpecifications(false);
        setReviews(false);
    };

    const handleSpec = () => {
        setDescription(false);
        setSpecifications(true);
        setReviews(false);
    }

    const handleReviews = () => {
        setDescription(false);
        setSpecifications(false);
        setReviews(true);
    }

    return (
        <Tabs value={value} onChange={handleChange} centered>
            <Tab onClick={handleDesc} label="Описание"/>
            <Tab onClick={handleSpec} label="Характеристики"/>
            <Tab onClick={handleReviews} label="Отзывы"/>
        </Tabs>
    );
}