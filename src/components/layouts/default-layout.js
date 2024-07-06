import React from 'react';

const DefaultLayout = ({children}) => {
  return (
    <div className="page-default">
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
