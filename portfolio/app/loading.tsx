import React from 'react';

const Loading = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-white">
      <div className="flex-col text-center">
        <span className="loading loading-ring text-info w-20 h-20"></span>
        <div className='text-cyan-800 font-bold text-xl'><h2>Loading, Please wait!</h2></div>
      </div>
    </main>
  );
};

export default Loading;
