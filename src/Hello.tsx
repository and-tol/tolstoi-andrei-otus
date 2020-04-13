import React from 'react';

interface Prop {
  username: string;
}

export const Hello: React.FC<Prop> = ({ username }) => {
  return <h1>Hello World, {username}!</h1>;
};
