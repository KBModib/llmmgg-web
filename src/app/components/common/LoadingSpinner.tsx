// src/app/components/common/LoadingSpinner.tsx
'use client';

import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-sm text-gray-600">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-500 border-t-transparent" />
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;


