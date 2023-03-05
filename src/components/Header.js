import logo from '../images/header__logo.svg';

function Header() {
  return (
    <header className="header">
      <a href="#">
        <img className="header__logo" src={logo} alt=" Места России." />
      </a>
    </header>
  )
}

export default Header;