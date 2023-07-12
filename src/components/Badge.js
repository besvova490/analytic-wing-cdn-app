import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';

// components
import LogoIcon from './icons/LogoIcon';
import FeedbackModal from '../containers/FeedbackModal';


function Badge({ label }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Fragment>
      <div className="anwg-badge" onClick={() => setIsModalOpen(true)}>
        <LogoIcon className="anwg-badge__icon"/>
        <span className="anwg-badge__label">{ label }</span>
      </div>
      <FeedbackModal open={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </Fragment>
  );
}

export default Badge;
