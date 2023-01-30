import axios from 'axios';
import { AxiosResponse } from 'axios';
import * as React from 'react';

import { Article } from '@/pages/api/getArticles';

import Card from './Card';

export default function CardArticles() {
  const [articles, setArticles] = React.useState<[] | Article[]>([]);
  React.useEffect(() => {
    axios
      .get('/api/getArticles')
      .then((response: AxiosResponse) => setArticles(response.data));
  }, []);

  return (
    <div className='mx-2 grid max-w-screen-lg grid-cols-1 gap-5 px-2 sm:mx-auto sm:grid-cols-1 md:mx-auto md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
      {articles.map((article: Article) => (
        <Card key={article.id} article={article} />
      ))}
    </div>
  );
}
