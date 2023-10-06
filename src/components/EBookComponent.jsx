import React from 'react';
import book from './images/ebook.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faGraduationCap,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

const EBookItem = ({ text, icon }) => {
  return (
    <div className="benefits">
      <FontAwesomeIcon icon={icon} className="ebook-icon mob" />
      <p className="icon-title mob">{text}</p>
    </div>
  );
};

const data = [
  {
    icon: faSearch,
    text: 'Discover top marketing automation tools and their benefits',
    id: 1,
  },
  {
    icon: faGraduationCap,
    text: 'Learn proven strategies for successful implementation',
    id: 2,
  },
  {
    icon: faChartLine,
    text: 'Increase your ROI with practical tips and real-world examples.',
    id: 3,
  },
];

function EBookComponent() {
  return (
    <div className="container-ebook mob">
      <div className="container-component mob">
        <div className="container-book mob">
          <img className="image-ebook mob" src={book} alt="ebook" />
        </div>
        <div className="description mob">
          <h1 className="ebook-title mob">
            This eBook will acquaint you with:
          </h1>

          <div className="container-description mob">
            {data.map(elem => (
              <EBookItem icon={elem.icon} text={elem.text} key={elem.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EBookComponent;
