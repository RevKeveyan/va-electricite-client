
import { useAuth } from '../../context/userContext';
import './style.scss';
const Statistic = () =>{
    const { user } = useAuth();

    return(
        <div className='stat'>
            <div className='container'>

            <div className='stat__wrapper'>
                <div className='stat__text'>
                    <h2 className='stat__title'>5<span>+</span></h2>
                    <p className='stat__descr'>Годы опыта</p>
                </div>
                
                <div className='stat__text'>
                    <h2 className='stat__title'>1240<span>+</span></h2>
                    <p className='stat__descr'>Реализованные проекты</p>
                </div>

                <div className='stat__text'>
                    <h2 className='stat__title'>100<span>%</span></h2>
                    <p className='stat__descr'>Довольные клиенты</p>
                </div>

                </div>
            </div>
        </div>
    );
} 

export default Statistic;