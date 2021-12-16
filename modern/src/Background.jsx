import React, {useEffect} from 'react';
import { VFXProvider, VFXImg } from 'react-vfx';
import shader from './BackgroundShader.fs';
import IEimg from './ie.png';

const Background = () => {
  useEffect(() => {
    const canvasArray = document.querySelectorAll('canvas');
    const canvas = canvasArray[canvasArray.length - 1];
    canvas.style.zIndex = -1;
    canvas.style.animation = `r7 100s linear infinite`;
  })
  return (
    <div class='background'>
      <VFXProvider id="bg">
        <VFXImg  shader={'rgbShift'} src={IEimg} className='bg-image' />
      </VFXProvider>
    </div>
  );
}

export default Background;
