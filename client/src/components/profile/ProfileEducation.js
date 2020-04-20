import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => (
  <div>
    <h3 class='text-dark'>School/College: {school}</h3>
    <p>
      <strong>Degree: {degree}</strong>
    </p>
    <p>
      <strong>Duration: </strong>
      <Moment format='YYYY/MM/DD'>{from}</Moment>-{' '}
      {!to ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
    </p>
    <p>
      <strong>Stream: </strong>
      {fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong>
      {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
