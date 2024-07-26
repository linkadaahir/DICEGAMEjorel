// src/components/Loading.js

import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        <h1 className="text-3xl font-bold mt-4">Loading...</h1>
        <p className="text-lg mt-2">Veuillez patienter pendant le chargement</p>
      </div>
    </div>
  );
};

export default Loading;
