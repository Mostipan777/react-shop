import CartItem from './CartItem';

function CartList(props) {
  const { order = [] } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="cart-list list-group">
      <a
        href="#!"
        className="fs-5 list-group-item list-group-item-action active d-flex justify-content-between align-items-center"
        aria-current="true"
      >
        CART
        <span>
          <i className="icon fs-4 far fa-times-circle" onClick={() => props.exitFromCart()}></i>
        </span>
      </a>
      <div className="cart-body">
        {order.length ? (
          order.map((el) => {
            return (
              <CartItem
                key={el.id}
                {...el}
                removeFromCart={props.removeFromCart}
                addToCart={props.addToCart}
                removeOneItemFromCart={props.removeOneItemFromCart}
              />
            );
          })
        ) : (
          <a
            href="#!"
            className="text-light cart-item list-group-item d-flex justify-content-center align-items-center"
          >
            Nothing here
          </a>
        )}
      </div>
      <a
        href="#!"
        className="fs-5 list-group-item list-group-item-action active d-flex justify-content-between align-items-center"
        aria-current="true"
      >
        <span>Total: {totalPrice} USD</span>
        <button className="btn btn-light text-primary">Buy Now</button>
      </a>
    </div>
  );
}

export default CartList;
