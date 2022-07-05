import './App.css';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

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
      <div>
        <div>
          <p>this 5 day class we will explore artists Monet,Matisse,Van,Gogh,among other and then recreate Paintaing using crayon and watercolor.Students will have fun learning about the artists & creating own art inspaired by their work</p>
          <div class="avatar my-5">
            <div class="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
            <p className='ml-5'>Kimberly R Moseler</p>
          </div>

        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
