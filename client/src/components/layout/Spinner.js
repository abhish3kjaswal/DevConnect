import React, { Fragment } from 'react';
import Spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={Spinner}
      style={{ width: `200px`, margin: `auto`, display: `block` }}
      alt='Loading...'
    />
  </Fragment>
);
