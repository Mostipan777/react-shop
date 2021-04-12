import React, { useEffect } from 'react'

function Alert(props) {
  const { alertName = '', closeAlert = Function.prototype} = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000)

    return () => clearTimeout(timerId)
    //eslint-disable-next-line
  }, [alertName])
  return (
    <div
      className="alert alert-primary"
      role="alert"
    >
      Holy guacamole! <strong> {alertName} </strong> added to cart.
    </div>
  );
}

export default Alert;