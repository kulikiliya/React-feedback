import React from 'react';

export const Section = ({ children }) => {
  return (
    <div className="flex flex-col items-center self-center gap-y-2.5">
      <h2 className="text-red-500 text-3xl ">Please, leave feedback</h2>
      {children}
    </div>
  );
};
