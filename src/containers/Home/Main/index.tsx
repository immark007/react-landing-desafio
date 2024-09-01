import './index.css'
import Dashboard from '../../../../public/dashboard.png'
import Wave from '../../../../public/wave.svg';

export default function Main(){
    return(
        <>
        <main className='main'>
            <div className='main-title'>
                <h1>SaaS App HTML Landing Page</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet</p>
                <button className='button'>sign up</button>
            </div>
            <div className='main-img'>
                <img src={Dashboard} alt="dash" />
            </div>
        </main>

        <div className="wave">
            <img src={Wave} alt="wave" />
        </div>

        </>
    )
}