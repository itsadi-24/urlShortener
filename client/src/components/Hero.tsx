import '../assets/css/hero.modules.css';
import { useState } from 'react';

import Input from '../components/Input';
import TypeWriter from './Typewriter';

// import Typewriter from './Typewriter';
const Hero = () => {
  const [username, setUsername] = useState('');
  return (
    <div className='flex flex-col items-center justify-center min-h-screen mx-auto w-[80%] p-4 gap-4'>
      <TypeWriter />
      <div className='flex items-center justify-center gap-1 p-2 '>
        <Input value={username} setValue={setUsername} placeholder='Username' />
        <button className='comic-button'>Click me!</button>
      </div>
    </div>
  );
};

export default Hero;
