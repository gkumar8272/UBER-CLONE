import { Link } from 'react-router-dom'

const Start = () => {
    return (
        <div>
            <div
                className='h-screen pt-8 flex justify-between flex-col w-full bg-red-400'
                style={{
                    backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c5310f182519763.652f3606b64b0.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <img className='w-1 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg?utm_source=sco.wikipedia.org&utm_campaign=index&utm_content=original" alt="Uber logo"></img>
                <div className='bg-white pb -7 py-5 px-5 '>
                    <h2 className='text-2xl font-bold'>Get Started With Uber</h2>
                    <Link to='/login' className='flex item-center
                    justify-center
                    w-full bg-black 
                    bg-black
                    text-white py-3 rounded-lg mt -5 '>Continue</Link>
                </div>
            </div>

        </div>
    )
}

export default Start