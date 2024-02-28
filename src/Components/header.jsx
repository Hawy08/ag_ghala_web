import logo from '../assets/Frame.png'

function Header() {
  return (
    <div className='flex justify-center'>
      
    <div className='w-2/3'>
      <img src={logo} alt="agroghala" width={200} />
    </div>
    </div>
  );
}

export default Header