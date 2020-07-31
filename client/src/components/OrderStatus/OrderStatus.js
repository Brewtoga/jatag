import React, { useEffect, useState } from "react";
import orderData from "./data.json";

function OrderStatus() {
    const [orders, setOrders] = useState();
    
    useEffect(() => {
        orderDataResults();
      }, []);

    const getOrderItems = (orderItems) => {
        const items = orderItems.map(function (row, i) {
            return (
                <div>
                <li>{row.menuItemName} </li>
                <li>Quantity: {row.quantity} Price: {row.price}</li>
                <li>{row.ingredients} </li>
                <br></br>
                </div>
            )});
        return items;


    }
    const orderDataResults = () => {
        console.log(orderData);

        const items = orderData.map(function (row, i) {
            return (
                <div>
                <div>Order Id: {row.orderId} </div>
                <div>Order Items: {row.orderItemsLength} </div>
                <div>Price: {row.orderTotalCost}</div>
                <div><ul>{getOrderItems(row.orderItems)}</ul></div> 
                <hr/>
                </div>
            )
        });
        setOrders(items);
        
    }

    return (
      <div>
        <div className="container-team">
          <h4>Open Orders</h4>
          
          <hr></hr>
          {orders}

          <div></div>
        </div>
      </div>
    );
  }
  
  export default OrderStatus;