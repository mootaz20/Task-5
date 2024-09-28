import './PhotoComp.css'

const PhotoComp = () => {
  return (
    <>
      <div className='relative photoComp' style={{'minHeight' : '380px'}}>
        <div className="absolute top-0 left-0 w-full h-full text-center bg-bgOpacity inset-0 flex flex-col justify-center items-center">
          <h1 className='font-bold text-white '>Find Dream Home</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit</p>
        </div>
      </div>
    </>
  )
}

export default PhotoComp