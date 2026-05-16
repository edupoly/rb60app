function Navbar() {
  return (
    <div className="d-flex justify-content-between align-items-center bg-success-subtle">
      <img
        src="https://png.pngtree.com/png-vector/20250408/ourmid/pngtree-global-education-logo-with-graduation-cap-and-book-png-image_15929049.png"
        alt=""
        style={{ width: "90px" }}
      />
      <ul className="d-flex list-unstyled w-50 justify-content-end gap-4 px-5 m-0">
        <li>Home</li>
        <li>Aboutus</li>
        <li>Contactus</li>
      </ul>
    </div>
  );
}
export default Navbar;
