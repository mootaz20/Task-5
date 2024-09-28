import './Hero.css'
import HeroCard from './HeroCard/HeroCard'
import Location from '../SVG/Location'
import DollarCircle from '../SVG/DollarCircle'
import House from '../SVG/House'

const cards = [
  {
    id : 1,
    name : "Location",
    description : "Ahmedabad, India",
    icon : <Location color={'text-primary'} />
  },
  {
    id : 2,
    name : "Price",
    description : "$1000 - $10,000",
    icon : <DollarCircle color={'text-primary'}  />
  },
  {
    id : 3,
    name : "Type of Property",
    description : "Apartment",
    icon : <House color={'text-primary'}  />
  }
]

const Hero = () => {
  return (
    <>
        <div className="bg-secondary back flex lg:pt-10 pt-14">
      <div className="container">
        <div className='text'>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-header pb-4 md:pb-6">
          Discover a place <br /> you will love to live
        </h1>
        <p className="text-desc pb-8 md:pb-12 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> 
          Imperdiet tempus felis vitae sit est quisque.
        </p>
        </div>
        <div className="w-full lg:w-[71.5%] bg-cards rounded-2xl py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 w-[87%] mx-auto ">
            {cards.map((item) => (
              <HeroCard 
                key={item.id} 
                name={item.name} 
                description={item.description} 
                icon={item.icon} 
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Hero