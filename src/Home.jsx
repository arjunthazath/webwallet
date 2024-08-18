import React from 'react'
import logo from './assets/bud-wal.png';
import btc from './assets/btc.png'
import eth from './assets/eth.png'
import sol from './assets/sol.png'

function Home() {
  return (
    <div className='bg-custom-gray min-h-screen p-3'>
        <div className='mb-8'><img className='h-24 ml-5' src={logo}/></div>
        <div className='flex justify-center'>
          <div className='mr-7 mt-7 flex flex-col'>

            <button className='bg-black rounded-xl w-[80px] h-[84px] flex flex-col items-center mb-3 text-gray-300 transform transition hover:scale-105  hover:text-yellow-400 duration-300'>
              <span className=' mb-1'>
                <span className='text-5xl'>+</span><br/>
                <span className='font-semibold'>Receive</span>
              </span>
            </button>

            <button className='bg-black rounded-xl w-[80px] h-[84px] flex flex-col items-center mb-3 text-gray-300 transform transition hover:scale-105  hover:text-yellow-400 duration-300'>
              <span className='mb-1 mt-2'>
                <span className='material-icons text-4xl'>send</span><br/>
                <span className='font-semibold'>Send</span>
              </span>
            </button>

            <button className='bg-black rounded-xl w-[80px] h-[84px] flex flex-col items-center mb-3 text-gray-300 transform transition hover:scale-105  hover:text-yellow-400 duration-300'>
              <span className='mb-1 mt-2'>
                <span className='material-icons text-4xl'>swap_horiz</span><br/>
                <span className='font-semibold'>Swap</span>
              </span>
            </button>

            <button className='bg-black rounded-xl w-[80px] h-[84px] flex flex-col items-center text-gray-300 transform transition hover:scale-105  hover:text-yellow-400 duration-300'>
              <span className='mb-1 mt-2'>
                <span className='material-icons text-4xl'>attach_money</span><br/>
                <span className='font-semibold'>Buy</span>
              </span>
            </button>

          </div>
        <div className='bg-black h-[420px] min-w-[860px] text-white flex flex-col justify-start items-center rounded-2xl'>
        <div className='w-96 flex flex-col justify-center items-center text-6xl h-28 mt-5 mb-1 font-semibold'>$5.00</div>
        
          <div className='w-[800px] h-64'>
            <div className='h-16 my-5 bg-custom-gray rounded-2xl flex flex-row justify-between items-center transform transition hover:scale-105 duration-300'>
              <div className='flex flex-row'>
              <img className='h-9 my-2 mx-4' src={sol}/>
              <div className='mb-2'>
                <div className='font-semibold text-base'>Solana</div>
                <div className='font-medium text-sm text-neutral-400'>0 SOL
                </div>
              </div>
              </div>
              <div className='mr-5 text-lg font-semibold'>$0.00</div>
            </div>
            <div className='h-16 my-5 bg-custom-gray rounded-2xl flex flex-row justify-between items-center transform transition hover:scale-105 duration-300'>
              <div className='flex flex-row'>
              <img className='h-9 my-2 mx-4' src={btc}/>
              <div className='mb-2'>
                <div className='font-semibold text-base'>Bitcoin</div>
                <div className='font-medium text-sm text-neutral-400'>0 BTC
                </div>
              </div>
              </div>
              <div className='mr-5 text-lg font-semibold'>$0.00</div>
            </div>
            <div className='h-16 my-5 bg-custom-gray rounded-2xl flex flex-row justify-between items-center transform transition hover:scale-105 duration-300'>
              <div className='flex flex-row'>
              <img className='h-9 my-2 mx-4' src={eth}/>
              <div className='mb-2'>
                <div className='font-semibold text-base'>Ethereum</div>
                <div className='font-medium text-sm text-neutral-400'>0 ETH
                </div>
              </div>
              </div>
              <div className='mr-5 text-lg font-semibold'>$0.00</div>
            </div>

          </div>
        </div>
        </div>
    </div>
  )
}

export default Home