import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import { IconContext } from "react-icons";
import { useRef } from 'react';

function Home() {

  const view = useRef(null);

  function reload(){
    view.current.reload();
  }
  
  function GoBack(){
    function goBackFunc(){
      view.current.goBack()
    }
    let canGoBack = view.current.canGoBack();
      return <MdNavigateBefore onClick={() => goBackFunc()} color='white' size={"28"} className='hover:cursor-pointer'/>
  }
  function GoForward(){
    function goForwardFunc(){
      view.current.goForward()
    }
    let canGoBack = view.current.canGoBack();
      return <MdNavigateNext onClick={() => goForwardFunc()} color='white' size={"28"} className='hover:cursor-pointer'/>
  }

  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <div className='h-screen flex flex-col'>
        <div className='w-full bg-gray-700 py-1 flex justify-between px-2 items-center text-sm'>
          <div className='flex items-center h-full'>
            <GoBack/>
            <GoForward/>
          </div>
          <div className='bg-black/50 px-2 rounded py-1 text-sm w-3/6 text-white'>
            <input placeholder='Search in google or type in an address' type="text" className='bg-transparent w-full border-none outline-none' />
          </div>
          <div>
            <span></span>
          </div>
        </div>
        <webview ref={view} src='https://google.com/' className='flex flex-1 flex-col'/>
      </div>
    </React.Fragment>
  );
}

export default Home;
