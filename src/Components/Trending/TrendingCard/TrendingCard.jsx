import './TrendingCard.css'

const TrendingCard = ({img,name,icon,price,location}) => {
  return (
    <>
        <div style={{'borderRadius' : '10px'}} className='p-5 trendingCard shadow-lg max-w-[382px] '>
                <img src={img} alt="error"  className='rounded-md'/>
                <p className='text-header pt-4 text-primary font-semibold text-lg'>{price} </p>
                <p style={{'marginBottom': '38px'}} className='text-lg font-semibold w-[55%] '> {name} </p>
                <div className='flex items-center location'>
                    {icon}
                    <p className='text-sm font-normal'>{location}</p>
                </div>
        </div>
    </>
  )
}

export default TrendingCard