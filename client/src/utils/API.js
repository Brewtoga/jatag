import axios from "axios";

export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },

  // postOrder:(title,body)=>{
  //   return axios.post("api/order",{menuType:title,menuItemName:body});
  // },
  // getMenu: () => {
  //   return axios.get("api/menu");
  // },
  getRole: (id) => {
    const user = axios.get(`/api/user/${id}`);
    return (user.role, user.username);
  },

  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post("api/signup", {
      username: username,
      email: email,
      password: password,
    });
  },

  // add new menu item
 /*  postMenuItem: (menuItemName, MenuType, isSpecial, 
    ingredients, price, addIngredients, specialPrice,
    removeIngredients,) => {
      return axios.post("api/menu", {
        menuItemName: menuItemName,
        MenuType: MenuType,
        isSpecial: isSpecial, 
        ingredients: ingredients,
        price: price,
        addIngredients: addIngredients,
        specialPrice: specialPrice,
        removeIngredients: removeIngredients,
      })
    }, */

  // retrieve menu items
  getMenu: () => {
    console.log("<<< Menu API");
    return axios.get("api/menu", {});
  },
  getorderById: (id) => {
    return axios.get(`/api/order/${id}`);
  },

  postOrder: (cart, tax, total) => {
    if (cart.length > 0) {
      cart.map((data) => {
        console.log("dataa", data);
        return axios.post("/api/order", {
          price: data.price,
          menuItemName: data.menuItemName,
          quantity: data.qty,
          tax: tax,
          grandTotal: total,
        });
      });
    }
  
  }
};
