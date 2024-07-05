import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-100 flex items-center justify-center z-50">
      <ClipLoader size={100} color={"#90CAF9"} />
    </div>
  );
};

export default Loader;