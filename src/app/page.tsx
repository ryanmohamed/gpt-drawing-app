"use client"
import React, { useState } from 'react';
import Canvas from '../components/Canvas';
import ColorPicker from '../components/ColorPicker';

export default function Home() {
  const [color, setColor] = useState('#000000');
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setReset(true);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl mb-20 font-bold underline">Draw App</h1>
      <div className="flex">
        <div className="flex items-center justify-center flex-col mr-10">
          <ColorPicker color={color} setColor={setColor} />
          <button 
            className="p-2 bg-gray-700 rounded text-white my-2"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <Canvas color={color} reset={reset} />
      </div>
    </div>
  );
}
