import './HeroCard.css'

const HeroCard = ({name,description,icon}) => {
  return (
    <>
        <div className='flex h-100 gap-5'>
            <div className='rounded-full bg-secondary w-[60px] h-[60px] flex items-center justify-center'>{icon} </div>
            <div>
                <h2 className='font-medium text-base pb-2.5'>{name}</h2>
                <p className='font-normal text-desc'>{description}</p>
            </div>
        </div>
    </>
  )
}

export default HeroCard