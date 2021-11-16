import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {Button, TextField, Typography} from '@material-ui/core';
import {useState} from 'react';
import useStyles from './styles';
import {Container} from '@mui/material';

export default function Reviews() {
    const classes = useStyles();

    const [reviewText, setReviewText] = useState();
    const [reviewsList, setReviewsList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setReviewsList([...reviewsList, reviewText]);
        setReviewText('');
    };

    const handleChange = (e) => {
        setReviewText(e.target.value);
    };
    return (
        <Container>
            <form className={classes.reviewInput}>
                <TextField
                    id='outlined-multiline-static'
                    label='Оставьте отзыв'
                    multiline
                    rows={4}
                    value={reviewText}
                    onChange={handleChange}
                />
                <Button onClick={handleSubmit} type='submit' color='primary'>Отправить отзыв</Button>
            </form>
            <List sx={{margin: '0 auto '}}>
                {reviewsList.map((review, index) => (
                    <Typography key={index}>
                        <ListItemText sx={{minWidth: '100px'}} secondary={new Date().toLocaleDateString()}/>
                        <ListItemText>{review}</ListItemText>
                        <Divider variant='inset' component='li'/>
                    </Typography>
                ))}
            </List>
        </Container>
    );
}
