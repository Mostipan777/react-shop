function GoodsItem(props) {
  const { id, name, description, price, full_background } = props;
  const item = {id, name, price}
  return (
    <div className="card custom-card" style={{ width: '16rem' }}>
      <img src={full_background} className="card-img-top" alt={name}></img>
      <div className="card-body">
        <h5 className="card-title text-center">
          {name}
        </h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-primary" onClick={() => props.addToCart(item)}>Buy Now</button>
          <span className="text-primary fs-5">{price} USD</span>
        </div>
      </div>
    </div>
  );
}

export default GoodsItem;
