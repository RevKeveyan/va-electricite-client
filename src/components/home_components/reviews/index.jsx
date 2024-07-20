// import Vrd from '../../../media/img/Vrdan.jpg';
// import Star from '../../../media/icons/star.png';
// import Next from '../../../media/icons/rarr.png';
// import Prev from '../../../media/icons/larr.png';

import { useEffect } from "react";

// import './style.scss';
// import { useState } from 'react';
// const Reviews = () =>{
    
//     const [slider, setSlider] = useState(0)

//     const nextSlide = () =>{
//         if(slider !== 2){
//             setSlider(slider+1)
//         }else{
//             setSlider(0);
//         }
//     }
//     const prevSlide = () =>{
//         if(slider !== 0){
//             setSlider(slider-1)
//         }else{
//             setSlider(2);
//         }
        
//     }

//     return (<>
//         <div className="reviews">
        
//             <div className="container">
//             <div className="reviews__slider">
//                 <div className='reviews__slider__arrows'>

//                     <div className='reviews__slider__previous' onClick={prevSlide}>
//                         <img src={Prev} alt="previous" />
//                     </div>

//                     <div className='reviews__slider__next' onClick={nextSlide}>
//                         <img src={Next} alt="next" />
//                     </div>

//                 </div>
//                 <div className={slider === 0 ? "reviews__wrapper active" :"reviews__wrapper"}>

//                     <div className="reviews__img">
//                         <img src={Vrd} alt="Vardan" />
//                     </div>

//                     <div className='reviews__descr'>
//                         <h2 className='reviews__name'>Vardan Aghlamazyan</h2>

//                         <p className='reviews__text'>Es es em es du chem u tenc lav baner Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat facilis dolorem modi ad accusantium et incidunt adipisci fuga eligendi assumenda laboriosam, totam, saepe earum porro maxime tempore asperiores magni eos.</p>

//                         <div className='reviews__rating'>
//                             <img src={Star} alt="Stars" /><h2>5.0</h2>
//                         </div>

//                     </div>
//                 </div>

//                 <div className={slider === 1 ? "reviews__wrapper active" :"reviews__wrapper"}>
//                     <div className="reviews__img">
//                         <img src={Vrd} alt="Vardan" />
//                     </div>
//                     <div className='reviews__descr'>
//                         <h2 className='reviews__name'>Vardan Aghlamazyan 2</h2>
//                         <p className='reviews__text'>Es es em es du chem u tenc lav baner Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat facilis dolorem modi ad accusantium et incidunt adipisci fuga eligendi assumenda laboriosam, totam, saepe earum porro maxime tempore asperiores magni eos.</p>
//                         <div className='reviews__rating'>
//                             <img src={Star} alt="Stars" /><h2>4.6</h2>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={slider === 2 ? "reviews__wrapper active" :"reviews__wrapper"}>
//                     <div className="reviews__img">
//                         <img src={Vrd} alt="Vardan" />
//                     </div>
//                     <div className='reviews__descr'>
//                         <h2 className='reviews__name'>Vardan Aghlamazyan 3</h2>
//                         <p className='reviews__text'>Nakrnela poxvum prosty cherevum u tenc lav baner Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat facilis dolorem modi ad accusantium et incidunt adipisci fuga eligendi assumenda laboriosam, totam, saepe earum porro maxime tempore asperiores magni eos.akrnela poxvum prosty cherevum u tenc lav baner Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat facilis dolorem modi ad accusantium et incidunt adipisci fuga eligendi assumenda laboriosam, totam, saepe earum porro maxime tempore asperiores magni eos</p>
//                         <div className='reviews__rating'>
//                             <img src={Star} alt="Stars" /><h2>3.9</h2>
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//                 <button className='reviews__btn'>Read more</button>
//             </div>
//             {/* <script src="https://apps.elfsight.com/p/platform.js" defer></script>
//             <div class="elfsight-app-770bd7a4-5389-46c0-a361-2ebf15525443"></div> */}
//         </div>
//     </>

//     );
// }
// export default Reviews;

// export function GoogleReviews() {

//     useEffect(() => {
//       const script = document.createElement('script');
//       script.src = 'https://static.elfsight.com/platform/platform.js'; 
//       script.async = true;
  
//       document.body.appendChild(script);
  
//       return () => {
//         document.body.removeChild(script);
//       };
//     }, []);
  
//     return <div id="elfsight-widget-container"></div>;
//   }
  