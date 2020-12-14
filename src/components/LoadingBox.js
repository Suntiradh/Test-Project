import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function LoadingBox() {
  return (
    <div>
      <FontAwesomeIcon icon={faSpinner} size='2x' />Loading...
    </div>
  );
}