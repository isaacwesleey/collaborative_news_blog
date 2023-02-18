import moment from 'moment';
import './news.css';

moment.updateLocale('es', {
  relativeTime: {
    future: 'en %s',
    past: 'hace %s',
    s: 'unos segundos',
    ss: '%d segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'una hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d días',
    M: 'un mes',
    MM: '%d meses',
    y: 'un año',
    yy: '%d años',
  },
});

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@mui/material';

import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { Share as ShareIcon } from '@mui/icons-material';
import { Comment } from '@mui/icons-material';

function News({ news }) {
  return (
    <Card sx={{ maxWidth: 845, margin: 10 }}>
      <CardHeader
        title={news.title}
        subheader={moment(news.created_at).fromNow()}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {news.content}
        </Typography>
        {news.image && (
          <img src={`http://localhost:3002/${news.image}`} alt={news.title} />
        )}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton aria-label='comment'>
          <Comment />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default News;
