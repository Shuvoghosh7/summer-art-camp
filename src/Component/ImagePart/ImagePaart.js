import React, { useEffect, useState } from 'react';

import picture1 from '../../img/picture1.PNG'
import picture2 from '../../img/picture2.PNG'
import picture3 from '../../img/picture3.PNG'

const ImagePaart = () => {
    const [data1, setdata1] = useState([])
    const [data2, setdata2] = useState([])
    const[data3,setdata3]=useState([])

   useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(info1 => setdata1(info1))
   },[])
    useEffect(()=>{
        fetch('data2.json')
        .then(res => res.json())
        .then(info2 => setdata2(info2))
    },[])
    useEffect(()=>{
        fetch('data3.json')
        .then(res => res.json())
        .then(info3 => setdata3(info3))
    },[])
    
    return (
        <div className='grid lg:grid-cols-2 mt-8'>
            <div>
                <img src={data1.picture} alt="" />
            </div>
            <div className='grid grid-rows-3 gap-1'>
                <img src={data2.picture} alt="" />
                <img src={data3.picture} alt="" />
            </div>
        </div>

    );
};

export default ImagePaart;