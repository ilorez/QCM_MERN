import Levels from './components/Levels'
import { useState } from 'react'


function Home() {
    const [choice, setChoice] = useState("react")
    return (
        <div>
            <div className='flex gap-6 justify-center '>

                <button onClick={() => setChoice("react")} className='text-gray-700 bg-blue-600 py-1 px-4 rounded-lg w-fit flex flex-row justify-between items-center gap-2 shadow-md hover:bg-blue-100 overflow-hidden'>
                    React
                </button>
                <button onClick={() => setChoice("nodejs")} className='text-gray-700 bg-yellow-400 py-1 px-4 rounded-lg w-fit flex flex-row justify-between items-center gap-2 shadow-md hover:bg-blue-100 overflow-hidden'>
                    NodeJs
                </button>
            </div>


            <div>
                <Levels name={choice} />
            </div>
        </div>

    )
}


export default Home