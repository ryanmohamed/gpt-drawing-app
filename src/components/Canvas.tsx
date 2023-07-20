// ./components/Canvas.tsx
import { useRef, useEffect } from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

interface CanvasProps {
  color: string;
  reset: boolean;
}

const Canvas: React.FC<CanvasProps> = ({ color, reset }) => {
  let previousPoint = { x: 0, y: 0 };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.background(255);
  };

  const draw = (p5: p5Types) => {
    if (reset) {
      p5.background(255);
    }
    if (p5.mouseIsPressed) {
      p5.stroke(color);
      const weight = p5.dist(p5.mouseX, p5.mouseY, previousPoint.x, previousPoint.y);
      p5.strokeWeight(weight);
      p5.line(p5.mouseX, p5.mouseY, previousPoint.x, previousPoint.y);
    }
    previousPoint = { x: p5.mouseX, y: p5.mouseY };
  };

  useEffect(() => {
    window.localStorage.setItem('savedDrawing', document.getElementsByTagName('canvas')[0]?.toDataURL() || '');
  }, [color]);

  return <Sketch setup={setup} draw={draw} />;
};

export default Canvas;
