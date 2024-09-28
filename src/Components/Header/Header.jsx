
const Header = ({title,desc}) => {
  return (
    <>
        <h1 style={{'fontSize' : '39px'}} className='text-header font-bold'>{title}</h1>
        <p style={{'fontSize' : '15px'}} className='text-desc headerMargin'>{desc}</p>
    </>
  )
}

export default Header