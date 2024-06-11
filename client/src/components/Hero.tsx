import '../assets/css/hero.modules.css';
import { useState } from 'react';
import Input from '../components/Input';
import TypeWriter from './Typewriter';
import axios from 'axios';
import { serverUrl } from '../helpers/Constants';

// import Typewriter from './Typewriter';
// `${serverUrl}/shortUrl`;
const Hero = () => {
  const [fullUrl, setFullUrl] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl: fullUrl,
      });
      console.log('Response:', response);
      setFullUrl('');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen mx-auto w-[80%] p-4 gap-4'>
      <TypeWriter />
      <form onSubmit={handleSubmit}>
        <div className='flex items-center justify-center gap-1 p-2 '>
          <Input
            value={fullUrl}
            setValue={setFullUrl}
            placeholder='Enter the URL '
          />
          {/* <input
            type='text'
            placeholder='add your link'
            required
            className='block w-full p-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg ps-32 focus:ring-blue-500 focus:border-blue-500'
            value={fullUrl}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFullUrl(e.target.value)
            }
          /> */}
          <button type='submit' className='comic-button'>
            Shorten ✂️
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
