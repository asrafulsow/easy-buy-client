'use client';
import Image from 'next/image';
import { useState } from 'react';
import img from '../../../assets/man-removebg-preview.png';
import Microphone from './microphone/Microphone';
import RemoteControl from './remortcontrol/RemoteControl';

const Egadget = () => {
  const [active, setActive] = useState('microphone');

  return (
    <div className=" expert-area  lg:px-[120px] px-5 py-[100px] lg:flex w-[100%]">
      <div className=" expert-area-left text-gray-700 lg:w-[40%]  border border-orange-400 py-5 px-5">
        <h1 className="mb-3 border-b-2">Electronics Gadgets</h1>
        <div className="flex justify-between">
          <div className="space-y-3">
            <button
              className=" border-blue-200 border-b-2"
              type="submit"
              value="Send"
              onClick={() => {
                setActive('microphone');
              }}
            >
              Microphone
            </button>

            <br />
            <button
              className="border-blue-200 border-b-2"
              type="submit"
              value="Send"
              onClick={() => {
                setActive('remote');
              }}
            >
              Remote Control
            </button>
          </div>
          <Image
            className="py-3"
            src={img}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="expert-area-right lg:pl-10 lg:py-0 py-5">
        <div className="expert-area-right-comp">
          {active === 'microphone' && <Microphone />}
          {active === 'remote' && <RemoteControl />}
        </div>
      </div>
    </div>
  );
};

export default Egadget;
