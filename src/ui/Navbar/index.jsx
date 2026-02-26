export const Navbar = ({ logo, items, logout }) => {
  return (
    <aside>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div>
        {logout}
      </div>
    </aside>
  );
};
