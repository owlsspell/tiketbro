import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

export default function SocialIcons() {
  return (
    <div className='mt-6 flex justify-between text-gray-400 '>
      <a href='#' title='facebook'>
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className='h-4  scale-100  hover:scale-125'
        />
      </a>
      <a href='#' title='youtube'>
        <FontAwesomeIcon
          icon={faYoutube}
          className='h-4 scale-100  hover:scale-125'
        />
      </a>
      <a href='#' title='instagram'>
        <FontAwesomeIcon
          icon={faInstagram}
          className='h-4 scale-100  hover:scale-125'
        />
      </a>
      <a href='#' title='linkedin'>
        <FontAwesomeIcon
          icon={faLinkedin}
          className='h-4 scale-100  hover:scale-125'
        />
      </a>
      <a href='#' title='tiktok'>
        <FontAwesomeIcon
          icon={faTiktok}
          className='h-4 scale-100  hover:scale-125'
        />
      </a>
    </div>
  );
}
