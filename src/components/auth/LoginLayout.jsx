'use client'
import Form from './form';

export default function LoginLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center pixel-text">
      <div className="glassmorphism p-8 flex w-full h-[700px]">
        <div className="flex flex-col justify-center items-start m-8 w-1/2">
          <figure className="m-4 flex flex-row justify-center w-full mx-[-0.3rem]">
            <img src='/logo.png' width="75px" height="75px" alt="Logo" />
          </figure>
          <div className='flex flex-row justify-center w-full'>
            <div className="border border-white rounded-full text-white px-5 py-2">Oasis</div>
          </div>
          <div className="text-white mt-2 text-4xl text-center w-full">Welcome Aboard!</div>
        </div>
        <div className="flex flex-col justify-center items-center w-1/2">
          <Form />
        </div>
      </div>
    </div>
  );
}
