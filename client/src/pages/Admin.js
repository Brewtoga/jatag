import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link, StaticRouter } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Button, Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import Logo from "../components/Logo";
import OrderItem from "../components/OrderItem";
import OrderStatus from "../components/OrderStatus";

function Admin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { user } = useAuth();
  const [showCreateItem, setShowCreateItem] = useState(false);
  const [showViewOrders, setShowViewOrders] = useState(false);
  const [showEditItem, setShowEditItem] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [inputFields, setInputFields] = useState([{ Ingredient: "" }]);
  const [selection, setSelection] = useState("Menu Type")
  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
      setRole(res.data.role);
    });
  }, [user]);

  // ============= Buttons ================

  const createMenuItem = () => {
    setShowEditItem(false);
    setShowViewOrders(false);
    setShowCreateItem(true);
  };
  const viewOrders = () => {
    setShowViewOrders(true);
    setShowCreateItem(false);
    setShowEditItem(false);
  };
  const getItemsFromApi = () => {
    setShowCreateItem(false);
    setShowViewOrders(false);
    setShowEditItem(true);
    API.getMenu().then((res) => {
      setMenuItems(res.data.Menu);
    });
  };
  // ***************** Actions **********************
  const dropdownSelection = (event) => {
    selection = "STARTER";
    return selection;
  }
  /* const postNewMenuItem = (data) => {
    API.postMenuItem()
      .then((res) => {
        history.replace("/admin");
      })
      .catch((err) => alert(err));

  }  */

  // ***************** Dispay ***********************

  return (
    <div>
      <Logo />
      <br></br>
      <Container>
        <Row>
          <Col>
            <Button variant="info" onClick={createMenuItem}>
              Create Menu Item
            </Button>
            {""}
          </Col>
          <Col>
            <Button variant="info" onClick={getItemsFromApi}>
              Edit Menu
            </Button>
            {""}
          </Col>
          <Col>
            <Button variant="info" onClick={viewOrders}>
              View Orders
            </Button>
            {""}
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
          <Col>
            <h4 className="admin-header">On the admin page!</h4>
          </Col>
        </Row>
      </Container>
      <Container>
        {showCreateItem && (
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formMenuItem">
                <Form.Label>Menu Item</Form.Label>
                <Form.Control type="menuItemName" placeholder="Menu Item Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formMenuItemPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="price" placeholder="Price" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formMenuItemType">
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdownMenuItemType">{selection}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">STARTERS</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">ENTREES</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">SANDWICHES</Dropdown.Item>
                    <Dropdown.Item href="#/action-4">SIDES</Dropdown.Item>
                    <Dropdown.Item href="#/action-5">DESSERT</Dropdown.Item>
                    <Dropdown.Item href="#/action-6">BOTTLES AND CANS</Dropdown.Item>
                    <Dropdown.Item href="#/action-7">COCKTAILS</Dropdown.Item>
                    <Dropdown.Item href="#/action-8">WINE BY THE BOTTLE</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <Form.Group as={Col} controlId="formMenuItemSpecialPrice">
                <Form.Label>Special Price</Form.Label>
                <Form.Control type="specialPrice" placeholder="Price when on Special" />
              </Form.Group>
            </Form.Row>
            <Form.Group as={Col} controlId="formMenuItemIngredients">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control type="ingredients" placeholder="Seperate each ingredient with a comma." />
            </Form.Group>
            <Form.Group as={Col} controlId="formMenuItemRemoveIngredients">
              <Form.Label>Ingredients that can be removed</Form.Label>
              <Form.Control type="removeIngredients" placeholder="Seperate ingredients with comma." />
            </Form.Group>
            <Form.Group as={Col} controlId="formMenuItemAddIngredients">
              <Form.Label>Ingredients that can be added</Form.Label>
              <Form.Control type="addIngredients" placeholder="Seperate ingredients with comma." />
            </Form.Group>
            <Form.Group id="formIsSpecial">
              <Form.Check type="checkbox" label="I'm on special" />
            </Form.Group>
            <Button variant="info" type="submit" onClick="postNewMenuItem">
              Submit
            </Button>
          </Form>
        )}
        <div className="container-menu">
          {showEditItem && (
            <div>
              <h4 className="admin-header">
                Edit menu by clicking either "Edit" or "Delete" button.
              </h4>
              <br></br>
              <div className="menu-field">
                {menuItems.map((menuItem) => (
                  <OrderItem
                    className="menu-item"
                    props={menuItem}
                    key={menuItem.menuItemName}
                    isEdit={true}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        {showViewOrders && <OrderStatus />}
      </Container>
    </div>
  );
}
export default Admin;