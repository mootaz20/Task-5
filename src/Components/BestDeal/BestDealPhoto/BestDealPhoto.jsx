import './BestDealPhoto.css'

const BestDealPhoto = ({img}) => {
  return (
    <>
        <div className='relative'>
            <img src={img} alt="Best Deal Photo" className='w-[380px] h-[300px] ' style={{'borderRadius' : '5px'}} />
            <div className='absolute top-0 z-10 flex gap-2 top-3.5 left-3.5'>
                <h1 className='box px-4'>Featured</h1>
                <h1 className='box'>3D</h1>
            </div>
        </div>
    </>
  )
}

export default BestDealPhoto