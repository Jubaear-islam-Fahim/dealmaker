import React from "react";
import gruf from '../../images/gruf.png';

const Sectors = () => {
  return (
    <div className="source-tab-content">
      <div className="source-tab-head">
        <div className="head-img">
          <img src={gruf} />
        </div>
        <div className="texts">
          <div className="h5">Sectors</div> 
        </div>
      </div>
    </div>
  );
};

export default Sectors;
