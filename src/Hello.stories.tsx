import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

// import { Hello } from './Hello.stories';

export default {
  title: 'Hello',
  decorators: [withKnobs],
};

interface Prop {
  username: string;
}

export const Hello: React.FC<Prop> = () => {
  const username = text('username', 'Ivan');

  return <h1>Hello World, {username}!</h1>;
};
