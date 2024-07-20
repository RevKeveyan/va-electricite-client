import logo from '../../media/img/logo.jpg'
import './style.scss'
const Logo = () =>{
    return(
        <div className="logo">
            <img className='logo__img' src={logo} alt="VA-Electronics" />
        </div>
    );
}

export default  Logo;