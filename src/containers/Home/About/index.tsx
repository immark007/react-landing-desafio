import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faDriversLicense } from '@fortawesome/free-solid-svg-icons';



export default function About(){
    return(
        <section className='section'>
            <div className='section-icons'>
                <ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faFire} />
                            <p>Upstarts</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon={faDriversLicense} />
                        <p>PrimeSter</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon={faDriversLicense} />
                        <p>GreenApp</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon={faDriversLicense} />
                        <p>Voltmeter</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <FontAwesomeIcon icon={faDriversLicense} />
                        <p>Keyrunner</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}