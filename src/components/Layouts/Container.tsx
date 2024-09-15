import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className='container mx-auto px-8 lg:px-0'>{children}</div>;
};