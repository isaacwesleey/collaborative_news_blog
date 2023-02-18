import { useState, useEffect } from 'react';
import News from '../News';

const Timeline = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await fetch('http://localhost:3002/api/news');
        const body = await res.json();

        if (body.error) {
          setError(body.error);
          return;
        }
        setNews(body.result);
      } catch (error) {
        console.error(error);
        setError('Ocurrió un error al obtener las noticias');
      }
    };
    getNews();
  }, []);

  return (
    <main className='timeline'>
      {error && <div className='error'>{error}</div>}
      <ul className='timeline-list'>
        {news &&
          news.map((item) => {
            return <News news={item} key={item.id} />;
          })}
      </ul>
    </main>
  );
};

export default Timeline;
