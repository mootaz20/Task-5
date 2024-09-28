import { useState } from 'react'
import Header from '../Header/Header'
import './BestDeal.css'
import BestDealPhoto from './BestDealPhoto/BestDealPhoto'


const BestDeal = () => {
    const [show, setShow] = useState('Residential');

    const handleOnclick = (name) => {
        setShow(name);
    };
    
    return (
      <>
        <div className='mb-16 lg:mb-24 bestDeal'>
          <div className="container">
            <Header title={'Best Real Estate Deals'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing eli'} />
            <div>
              <div className='space-x-12 flex overflow-x-auto mb-10'>
                {['Residential','Commercial','Agriculture','Industrial'].map((item,index)=>{
                    return (
                        <button 
                        key={index}
                        onClick={() => handleOnclick(item)} 
                        className={`text-lg w-46 flex-shrink-0 font-normal ${show === item ? 'text-primary font-semibold py-2 border-b-2 border-primary' : ''}`}>
                        {item} Property
                      </button>
                    )
                })}
              </div>
              <div className='flex flex-wrap justify-center bestDealPhoto'>
              {show === 'Residential' && (
              <>
                <BestDealPhoto img={'assets/images/best1.jpg'} />
                <BestDealPhoto img={'assets/images/best2.jpg'} />
                <BestDealPhoto img={'assets/images/best3.jpg'} />
              </>
            )}
            {show === 'Commercial' && (
              <>
                <BestDealPhoto img={'assets/images/best4.jpg'} />
                <BestDealPhoto img={'assets/images/best5.jpg'} />
                <BestDealPhoto img={'assets/images/best6.jpg'} />
              </>
            )}
            {show === 'Agriculture' && (
              <>
                <BestDealPhoto img={'assets/images/best7.jpg'} />
                <BestDealPhoto img={'assets/images/best8.jpg'} />
                <BestDealPhoto img={'assets/images/best9.jpg'} />
              </>
            )}
            {show === 'Industrial' && (
              <>
                <BestDealPhoto img={'assets/images/best10.jpg'} />
                <BestDealPhoto img={'assets/images/best11.jpg'} />
                <BestDealPhoto img={'assets/images/best12.jpg'} />
              </>
            )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
    
}

export default BestDeal