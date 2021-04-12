import GoodsItem from './GoodsItem';

function GoodsList(props) {
  const { goods = []} = props;

  if (goods.length === 0) {
    return <h3 text-primary>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((good) => (
        <GoodsItem key={good.id} {...good} addToCart={props.addToCart} />
      ))}
    </div>
  );
}

export default GoodsList;
