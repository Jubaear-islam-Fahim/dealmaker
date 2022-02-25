import React from 'react';
import gruf from '../../images/gruf.png';

const Others = () => {
  return (
    <div className="source-tab-content">
      <div className="source-tab-head">
        <div className="head-img">
          <img src={gruf} />
        </div>
        <div className="texts">
          <div className="h5">Others</div> 
        </div>
      </div>
    </div>
  )
}

export default Others