import React from "react";
import * as FaIcons from 'react-icons/fa'





function NotFound() {
  return (
    <div className="notfound container">
    <FaIcons.FaTimesCircle />
      <h1 className="notfound-header">Nothing found</h1>
    </div>
  );
}

export default NotFound;
