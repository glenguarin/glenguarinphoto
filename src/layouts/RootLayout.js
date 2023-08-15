import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <h1 className="center-item">GLEN GUARIN</h1>
        <p className="label-photog center-item">PHOTOGRAPHY</p>
        <nav className="center-item">
          <NavLink to="/">Home</NavLink>
          <NavLink to="gallery">Gallery</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
