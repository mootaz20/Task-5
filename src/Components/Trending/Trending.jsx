import { CiLocationOn } from 'react-icons/ci'
import './Trending.css'
import TrendingCard from './TrendingCard/TrendingCard'
import Header from '../Header/Header'

const trends = [
  {
    id: 1,
    image : 'assets/images/trend1.jpg',
    price : '$300000',
    name : 'Luxury Apartment in California',
    location : '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    icon : <CiLocationOn size={'24px'} />
  },
  {
    id: 2,
    image : 'assets/images/trend2.jpg',
    price : '$300000',
    name : 'Luxury Apartment in California',
    location : '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    icon : <CiLocationOn size={'24px'} />
  },
  {
    id: 3,
    image : 'assets/images/trend3.jpg',
    price : '$300000',
    name : 'Luxury Apartment in California',
    location : '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    icon : <CiLocationOn size={'24px'} />
  },
  {
    id: 4,
    image : 'assets/images/trend4.jpg',
    price : '$300000',
    name : 'Luxury Apartment in California',
    location : '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    icon : <CiLocationOn size={'24px'} />
  },
  {
    id: 5,
    image : 'assets/images/trend5.jpg',
    price : '$300000',
    name : 'Luxury Apartment in California',
    location : '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    icon : <CiLocationOn size={'24px'} />
  },
  {
    id: 6,
    image : 'assets/images/trend6.jpg',
    price : '$300000',
    name : 'Luxury Apartment in California',
    location : '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    icon : <CiLocationOn size={'24px'} />
  },
]


const Trending = () => {
  return (
    <>
        <div className='my-16 lg:my-24'>
            <div className="container">
                <Header title={'Most Trending'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing eli'} />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ' style={{'gap' : '25px 30px'}} >
                    {trends.map((item)=>{
                      return(
                        <TrendingCard 
                            key={item.id} 
                            name={item.name} 
                            icon={item.icon}
                            location={item.location}
                            img={item.image}
                            price={item.price}  />
                      )
                    }) }
                </div>
            </div>
        </div>
    </>
  )
}

export default Trending