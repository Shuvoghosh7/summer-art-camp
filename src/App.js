import './App.css';
import { AiOutlineQuestionCircle } from 'react-icons/ai';


import TextPart from './Component/TextPart/TextPart';
import ImagePaart from './Component/ImagePart/ImagePaart';
function App() {
  return (
    <div className='m-6'>
      <h1 class=" text-5xl font-bold">
        Summer Art Camp! 5 dayes of Artists and Paintaing Monet, Van Gosh,Matisse, & More
      </h1>
      <div className='flex  items-center mt-3'>
        <p className='mr-2'>Multi-Day Course </p>
        <p><AiOutlineQuestionCircle /></p>
      </div>
      <div className='grid lg:grid-cols-2 gap-4'>
        <div>
          <TextPart/>
        </div>
        <div>
          <ImagePaart/>
        </div>
      </div>
    </div>
  );
}

export default App;
