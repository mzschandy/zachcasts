import React from 'react';

import "./spinner.scss";

export default function Spinner() {
  return (
    <div role="progressbar" className="c-spinner">
      <div>Loading...</div>
    </div>
  );
}
