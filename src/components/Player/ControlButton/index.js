import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ControlButton = ({
  size, icon, ariaLabel, onClick,
}) => (
  <div className="control-button__wrapper">
    <button className="control-button" type="button" aria-label={ariaLabel} onClick={onClick}>
      <FontAwesomeIcon className={`fa-icon--${size}`} icon={icon} />
    </button>
  </div>
);

export default ControlButton;
