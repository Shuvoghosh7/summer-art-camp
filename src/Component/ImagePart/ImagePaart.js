import React from 'react';
import picture1 from '../../img/picture1.PNG'
import picture2 from '../../img/picture2.PNG'
import picture3 from '../../img/picture3.PNG'
const ImagePaart = () => {
    return (
        <div className='grid lg:grid-cols-2 mt-8'>
          <div>
            <img src={picture1} alt="" />
          </div>
          <div className='grid grid-rows-2 gap-1'>
            <img src={picture2} alt="" />
            <img src={picture3} alt="" />
          </div>
        </div>
    );
};

export default ImagePaart;