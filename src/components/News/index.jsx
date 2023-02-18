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

const News = ({ news }) => {
  return (
    <li className='news'>
      <header>
        <h2>{news.title}</h2>
        <time dateTime={news.created_at}>
          {moment(news.created_at).fromNow()}
        </time>
      </header>
      <div>
        <p>{news.content}</p>
        {news.image && (
          <img src={`http://localhost:3002/${news.image}`} alt={news.title} />
        )}
      </div>
      <footer>Botones</footer>
    </li>
  );
};

export default News;
