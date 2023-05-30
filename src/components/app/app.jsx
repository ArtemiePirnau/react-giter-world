import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";

import { Header } from "../header/header.jsx";
import { HomePage } from "../../pages/home-page/home-page.jsx";
import { ProductsPage } from "../../pages/products-page/products-page.jsx";
import { OneProduct } from "../../pages/one-product/one-product.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 0,
          title: " Чем занимается наша компания ?",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,",
        },
        {
          id: 1,
          title: " Чем занимается наша компания ?",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,",
        },
        {
          id: 2,
          title: " Чем занимается наша компания ?",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,",
        },
        {
          id: 3,
          title: " Чем занимается наша компания ?",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,",
        },
      ],
      aboutItems: [
        {
          id: 0,
          title: "Quality",
          width: 480,
        },
        {
          id: 1,
          title: "The fragrance",
          width: 480,
        },
        {
          id: 2,
          title: "Price",
          width: 256,
        },
      ],
      productsList: [
        {
          id: 0,
          name: "Name Product",
          price: 100,
        },
        {
          id: 1,
          name: "Name Product",
          price: 100,
        },
        {
          id: 2,
          name: "Name Product",
          price: 100,
        },
        {
          id: 3,
          name: "Name Product",
          price: 100,
        },
        {
          id: 4,
          name: "Name Product",
          price: 100,
        },
        {
          id: 5,
          name: "Name Product",
          price: 100,
        },
        {
          id: 6,
          name: "Name Product",
          price: 100,
        },
        {
          id: 7,
          name: "Name Product",
          price: 100,
        },
        {
          id: 8,
          name: "Name Product",
          price: 100,
        },
      ],
    };
  }
  render() {
    const { questions, aboutItems, productsList } = this.state;
    return (
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage questions={questions} aboutItems={aboutItems} />
              }
            />
            <Route
              path="/products-page"
              element={<ProductsPage productsList={productsList} />}
            />
            <Route path="/one-product" element={<OneProduct />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
