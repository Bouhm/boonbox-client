import React from 'react';

type IconProps = {
  size?: number;
  color?: string;
};

type DiceIconProps = IconProps & { sides: number };

// Platonic Solids Collection by DaanDirk from the Noun Project
export const DiceIcon = ({ size = 40, color = '#000', sides }: DiceIconProps) => {
  switch (sides) {
    case 4:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          viewBox="0 0 57.799999 50.099998"
        >
          <path d="M 28,0 V 32.4 L 0,48.6 Z m 0.9,33.9 -28,16.2 h 56 z m 0.9,-1.5 28,16.2 L 29.8,0 Z" />
        </svg>
      );
    case 6:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          viewBox="0 0 68.599998 78.699997"
        >
          <path d="M 33.4,78.7 0,59.4 V 20.8 L 33.4,40.1 Z M 34.3,38.6 67.7,19.3 34.3,0 0.9,19.3 Z m 0.9,1.5 V 78.7 L 68.6,59.4 V 20.8 Z" />
        </svg>
      );
    case 8:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          viewBox="0 0 68.199997 77.655998"
        >
          <path d="M 66.3,59.062 34.1,77.656 1.9,59.062 Z M 66.909,57.225 34.1,0.393 1.288,57.225 Z M 68.2,55.788 V 18.594 L 36,0 Z M 32.2,0 0,18.594 v 37.18 z" />
        </svg>
      );
    case 10:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          viewBox="40 40 98.140579 96.090897"
        >
          <g transform="translate(-0.92887523,-1.9549712)">
            <g transform="matrix(1.1679092,0,0,1.1679092,-274.931,-137.53749)">
              <path d="m 313.653,154.602 -26.488,55.612 24.356,15.89 26.354,-15.928 z" />
              <path d="m 314.9,153.687 24.49,55.919 14.175,-4.584 0.915,-22.612 z" />
              <path d="m 312.359,227.393 v 8.568 l 40.76,-28.762 -13.608,3.825 z" />
              <path d="m 312.359,153.927 -26.756,55.732 -13.925,-5.99 -1.229,-22.679 z" />
              <path d="m 310.517,227.213 v 8.75 l -39.019,-30.157 13.513,5.275 z" />
            </g>
          </g>
        </svg>
      );
    case 12:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          viewBox="0 0 68.300003 65.199997"
        >
          <path d="m 0.3,25.9 11.1,-19.3 21.9,4 V 32.1 L 14.7,42.8 Z M 68,25.9 56.9,6.6 35,10.6 V 32.1 L 53.6,42.8 Z M 34.1,33.6 15.6,44.3 23,65.2 H 45.3 L 52.7,44.3 Z M 13.8,44.8 13.5,44.1 0,28.3 v 10.6 l 11.7,20.1 9.1,5.3 z m 41,-0.7 -0.4,0.7 L 47.5,64.3 56.6,59 68.3,38.9 V 28.3 Z M 33.8,9 h 0.7 L 54.9,5.2 45.8,0 H 22.5 l -9.1,5.2 z" />
        </svg>
      );
    case 20:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          viewBox="0 0 68.199997 77.199997"
        >
          <path d="M 66.9,19.9 51.5,46.7 36.1,19.9 Z M 49.6,50.1 H 18.7 L 34.1,76.8 Z M 35.1,18.1 H 66.3 L 35.1,0.1 Z M 1.3,19.9 16.7,46.7 32.2,19.9 Z m 32.8,0.3 -16.2,28 h 32.4 z m 18.5,28.3 v 0.1 l 15.6,9 V 21.4 Z m -36,1.6 -15.7,9.1 31.3,18 z m 35.1,0 v 0 L 36,77.2 67.4,59.1 Z M 15.6,48.5 0,21.4 V 57.5 Z M 33.1,18.1 V 0 L 1.9,18.1 Z" />
        </svg>
      );
    default:
      return null;
  }
};
