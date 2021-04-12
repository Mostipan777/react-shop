import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import CartList from './CartList';
import Alert from './Alert';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [alertName, setAlertName] = useState('');

  const handleCartIsOpen = () => {
    setCartIsOpen(!cartIsOpen);
  };

  const addToCart = (item) => {
    const itemIndex = order.findIndex((el) => el.id === item.id);

    if (itemIndex < 0) {
      setOrder([...order, { ...item, quantity: 1 }]);
    } else {
      const newOrder = order.map((el, index) => {
        if (index === itemIndex) {
          return { ...el, quantity: el.quantity + 1 };
        } else {
          return el;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  const removeOneItemFromCart = (item, id) => {
    const itemIndex = order.findIndex((el) => el.id === item.id);
    if (item.quantity > 1) {
      const newOrder = order.map((el, index) => {
        if (index === itemIndex) {
          return { ...el, quantity: el.quantity - 1 };
        } else {
          return el;
        }
      });
      setOrder(newOrder);
    } else {
      removeFromCart(id);
    }
  };

  const removeFromCart = (id) => {
    const newOrder = order.filter((el) => el.id !== id);
    setOrder(newOrder);
  };

  const exitFromCart = () => {
    setCartIsOpen(false);
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);
  return (
    <main className="content">
      {alertName && <Alert alertName={alertName} closeAlert={closeAlert} />}
      {cartIsOpen && (
        <CartList
          order={order}
          removeFromCart={removeFromCart}
          exitFromCart={exitFromCart}
          addToCart={addToCart}
          removeOneItemFromCart={removeOneItemFromCart}
        />
      )}
      {order.length ? (
        <Cart quantity={order.length} handleCartIsOpen={handleCartIsOpen} />
      ) : null}
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
    </main>
  );
}

export default Shop;
