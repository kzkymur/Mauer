import React from 'react';
import { VFXProvider, VFXSpan } from 'react-vfx';
import shader from './TitleShader.fs';

const Title = () => {
  return (
    <div className='title'>
      <VFXProvider>
        <VFXSpan  shader={shader}>Mauer</VFXSpan>
      </VFXProvider>
    </div>
  );
}

export default Title;
