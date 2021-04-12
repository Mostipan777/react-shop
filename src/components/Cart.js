function Cart(props) {
  const { quantity = 0 } = props;
  return (
    <div className="cart" onClick={() => props.handleCartIsOpen()}>
      <i className="fs-5 fas fa-shopping-cart"></i>
      {quantity ? <span className="fs-5 cart-quantity"> {quantity}</span> : null}
    </div>
  );
}

export default Cart;
