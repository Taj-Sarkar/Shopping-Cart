interface Props {
  cartItemsCount: number;
}
const NavBar = ({ cartItemsCount }: Props) => {
  return (
    <div className="navbar bg-dark text-white p-3 mb-4 rounded">
      <h4>  Cart Items: {cartItemsCount}</h4>
    </div>
  );
};

export default NavBar;
