import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import LoadingStyle from './LoadingStyle';
const Loading = ({
  color = '#fff',
  marginTop = 'mt-3',
  center = false,
}) => {
  return (
    <div
      className={`sweet-loading ${marginTop} ${
        center && 'pt-1 ml-2'
      }`}
    >
      <BeatLoader
        css={LoadingStyle}
        size={10}
        color={color}
        loading={true}
      />
    </div>
  );
};

export default Loading;
