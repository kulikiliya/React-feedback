import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ incrementAdd, state }) => {
  const preArray = Object.keys(state);
  const array = preArray.map(el => (
    <button type="button" key={nanoid()} onClick={() => incrementAdd(el)}>
      {el}
    </button>
  ));

  return <div>{array}</div>;
};

FeedbackOptions.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
    })
  ),
};
