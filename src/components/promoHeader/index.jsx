import Statistic from '../Statistic';
import './style.scss';

const HeaderPromo = ({title, text}) =>{
    return(
        <div className="header-promo">
            <div className="header-promo__title">
                <div className="container">
                <h1>{title}</h1>
                <p>{text}</p>
                </div>
            </div>
            <Statistic/>
        </div>
    );
}
export default HeaderPromo;