const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-start">
        <a className="navbar-brand" href="#">
          <img
            src="images/aman.jpeg"
            className="rounded-circle"
            alt="Cinque Terre"
            height="100px"
          />
        </a>
        <div className="mx-3">
          <div>Welcome</div>
          <div>Aman Shah Ahamed</div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
