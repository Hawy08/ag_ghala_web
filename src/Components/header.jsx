import logo from "../assets/Frame.png";

function Header() {
  return (
    <div className="fixed flex justify-center w-full bg-white shadow-md z-100">
      <div className="w-4/5 py-2">
        <img src={logo} alt="agroghala" width={200}  />
      </div>
    </div>
  );
}

export default Header;
