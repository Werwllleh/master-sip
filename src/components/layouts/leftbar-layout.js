import React from 'react';
import Leftbar from "@/components/leftbar";

const LeftBarLayout = ({children}) => {
  return (
    <div className="page page-left-bar">
      <div className="container">
        <div className="page-left-bar__grid">
          <div className="page-left-bar__sidebar">
            <Leftbar />
          </div>
          <div className="page-left-bar__content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBarLayout;
