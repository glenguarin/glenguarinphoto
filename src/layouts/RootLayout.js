import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <p className="page-title center-item">
          <span style={{ fontWeight: "bold" }}>GLEN GUARIN &nbsp;</span>

          <span style={{ color: "#868e96" }}>PHOTOGRAPHY</span>
        </p>
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
