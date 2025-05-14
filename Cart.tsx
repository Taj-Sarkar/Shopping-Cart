type Product = {
  id: string;
  name: string;
};

interface Props {
  items: Product[];
  onClear: () => void;
  onAdd: () => void;
  onRemove: (item: string) => void;
}

const Cart = ({ items, onClear, onAdd, onRemove }: Props) => {
  return (
    <div className="card p-3">
      <h4 className="mb-3">Your Cart:</h4>
      <ul className="list-group mb-3">
        {items.length === 0 ? (
          <li className="list-group-item text-muted">The Cart is Empty</li>
        ) : (
          items.map((item) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={item.id}
            >
              {item.name}
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => onRemove(item.id)}
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={onClear}>
          Clear Cart
        </button>
        <button className="btn btn-danger" onClick={onAdd}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Cart;
