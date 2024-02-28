import logo from "../assets/Frame.png";

function Header() {
  return (
    <div className="flex justify-center shadow-md fixed bg-white w-full">
      <div className="w-2/3 py-2">
        <img src={logo} alt="agroghala" width={200}  />
      </div>
    </div>
  );
}

export default Header;
