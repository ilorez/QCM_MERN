import { Link } from 'react-router-dom'
import useStore from '../../store'


function Levels({ name }) {
    const { setQuestions } = useStore();

    // fetch level questions
    const setQtoSore = (level) => {
        fetch(`http://localhost:3000/qcm/${name}/${level}`)
            .then((result) => result.json())
            .then((result) => setQuestions(result[0].questions))
            .catch((err) => console.log(err))
    }
    // ---------------
    const nextIcon = `<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6061 9.89832L9.60912 9.90129L11.0326 8.49643L2.42348 0L0.999978 1.40486L8.1826 8.49345L0.576477 16L1.99998 17.4049L9.6061 9.89832Z" fill="#808080"/>
  </svg>`;

    const difficultyLevels = [
        { bgColor: 'bg-green-200', textColor: 'text-green-800', emoji: '🌟', level: "Easy" },
        { bgColor: 'bg-blue-200', textColor: 'text-blue-800', emoji: '🔥', level: "Intermediate" },
        { bgColor: 'bg-purple-200', textColor: 'text-purple-800', emoji: '🚀', level: "Moderate" },
        { bgColor: 'bg-orange-200', textColor: 'text-orange-800', emoji: '💡', level: "Challenging" },
        { bgColor: 'bg-red-200', textColor: 'text-red-800', emoji: '🌊', level: "Very Hard" },
        { bgColor: 'bg-pink-200', textColor: 'text-pink-800', emoji: '🎵', level: "Impossible" },
        { bgColor: 'bg-black', textColor: 'text-white', emoji: '💀', level: "Not sens" },
    ];


    const links = difficultyLevels.map((difLevel, index) => {
        return (
            <div key={"level" + index} className='last:col-span-1 sm:last:col-span-2 '>
                <Link to={`/ilQCM/${name}/${index + 1}`} onClick={() => setQtoSore(index + 1)}>
                    <button className={' px-4 py-1.5 rounded-lg w-full flex flex-row justify-between items-center gap-2 shadow-md hover:bg-blue-100 overflow-hidden ' + difLevel.textColor + " " + difLevel.bgColor}>
                        Level {index + 1}
                        <div className='flex justify-between items-center gap-4'>
                            ({difLevel.level + difLevel.emoji})
                            <div dangerouslySetInnerHTML={{ __html: nextIcon }} />
                        </div>
                    </button>
                </Link>
            </div>
        )
    })

    return (
        <main className='min-w-full min-h-screen flex flex-col items-center p-10 bg-gradient-to-b from-gray-0 to-gray-200 shadow-lg gap-16'>
            <div>
                <h1 className='text-blue-color mb-5  font-bold  text-2xl'>Welcome to <span className='capitalize'>{name}</span> QCM!</h1>
                <p className='text-gray-600 pl-6'>Explore your <span className='capitalize'>{name}</span> knowledge from easy to super hard! Test yourself with a variety of <span className='capitalize'>{name}</span> questions.</p>
            </div>
            <div className='grid  sm:grid-cols-2 grid-cols-1 gap-4  '>
                {links}
            </div>
        </main>
    )
}



export default Levels