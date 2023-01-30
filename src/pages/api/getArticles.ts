// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

import image1 from '../../images/articles/article1.png';
import image2 from '../../images/articles/article2.png';
import image3 from '../../images/articles/article3.png';

export type Article = {
  id: number;
  image: string;
  title: string;
  tags: string;
  author: string;
  date: string;
};

export default function getArticles(req: NextApiRequest, res: NextApiResponse) {
  const articles: Article[] = [
    {
      id: 1,
      image: image1.src,
      title: 'Three keys to keeping your customers satisfied.',
      tags: 'News',
      author: 'Inés Guerrero',
      date: 'Mar 20, 2023',
    },
    {
      id: 2,
      image: image2.src,
      title: 'Top 5 booking features that makes a good booking system.',
      tags: 'Business',
      author: 'Mia Boskovic',
      date: 'Mar 20, 2023',
    },
    {
      id: 3,
      image: image3.src,
      title: 'Faster sales with active analytics.',
      tags: 'Customers',
      author: 'Inés Guerrero',
      date: 'Mar 20, 2023',
    },
  ];
  res.status(200).json(articles);
}
