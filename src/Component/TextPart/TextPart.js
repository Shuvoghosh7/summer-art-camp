import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaGreaterThan } from 'react-icons/fa';
import { BsSuitHeart } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';
const TextPart = () => {
    return (
        <div className='mt-8'>
          <p className='text-xl justify-center'>this 5 day class we will explore artists Monet,Matisse,Van,Gogh,among other and then recreate Paintaing using crayon and watercolor.Students will have fun learning about the artists & creating own art inspaired by their work</p>
          <div class="avatar my-5">
            <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
            <p className='ml-5'>Kimberly R Moseler</p>
          </div>
          <div className='flex items-center '>
            <p className='flex text-yellow-500 text-2xl'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
            <p className=' ml-5'>467 total review for this teacher</p>
          </div>
          <div className='flex items-center mt-3'>
            <p className='flex text-yellow-500 text-2xl'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
            <p className=' ml-5'>5  review for this class</p>
          </div>
          <p className='mt-2 text-xl'>completed by 21 learners</p>

          <div className='mt-8 flex'>
            <button className='btn btn-primary rounded-3xl'>See Class Schedule <span className='ml-2 text-2xl '> <FaGreaterThan /> </span> </button>
            <div className='grid lg:grid-cols-3 gap-1'>
              <div className='flex items-center ml-8 text-primary font-bold cursor-pointer'>
                <p><BsSuitHeart /></p>
                <p className='ml-3'>Save</p>
              </div>
              <div className='flex items-center ml-8 text-primary font-bold cursor-pointer'>
                <p><FaShare /></p>
                <p className='ml-3'>Share</p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default TextPart;