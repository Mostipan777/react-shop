function CartItem(props) {
  const { id, name, price, quantity } = props;
  return (
    <a
      href="#!"
      className="text-light cart-item list-group-item d-flex justify-content-between align-items-center"
    >
      <span className="text-primary"><i className="fas fa-times" onClick={() => props.removeFromCart(id)}></i> </span>
      <span>
        {name} - {price} USD
      </span>
      <span><i className="fas fa-caret-left" onClick={() => props.removeOneItemFromCart(props, id)}></i> {quantity}{' '}
        <i className="fas fa-caret-right" onClick={() => props.addToCart(props)}></i></span>
    </a>
  );
}

export default CartItem;


