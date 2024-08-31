import './index.css'
import Menu from '../../../../public/menu_white_36dp.svg';

export default function Navbar(){
    return(
        <header className='header'>
            <nav className='navigation'>
                <h1>Tivo</h1>
                <ul>
                    <li>
                        <a href="#">home</a>
                    </li>
                    <li>
                        <a href="#">features</a>
                    </li>
                    <li>
                        <a href="#">details</a>
                    </li>
                    <li>
                        <a href="#">Precing</a>
                    </li>
                    <li>
                        <button className='button'>log in</button>
                    </li>
                </ul>

                <div className='mobile-menu-icon'>
                    <img className='menu-icon' src={Menu} alt="menu" />
                </div>
            </nav>
            <div className='menu-mobile'>
                <ul>
                    <li>
                        <a href="#">home</a>
                    </li>
                    <li>
                        <a href="#">features</a>
                    </li>
                    <li>
                        <a href="#">details</a>
                    </li>
                    <li>
                        <a href="#">Precing</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}