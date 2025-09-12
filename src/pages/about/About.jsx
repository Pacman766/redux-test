import { useState } from 'react';

export default function About() {
  throw new Error('This is a render-time error!');
  return (
    <>
      <h1>About</h1>
      <div>This text will never be rendered.</div>
    </>
  );
}
