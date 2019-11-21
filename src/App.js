import React, {Component, Fragment} from 'react';

import Ingredients from './components/Ingredients/Ingredients';
import Salad from './components/Salad/Salad';
import Meat from './components/Meat/Meat';
import Cheese from './components/Cheese/Cheese';
import Bacon from './components/Bacon/Bacon';
import BreadTop from './components/Bread/BreadTop';
import BreadBottom from './components/Bread/BreadBottom';

import {GiMeat} from "react-icons/gi";
import {GiCheeseWedge} from "react-icons/gi";
import {FaBacon} from "react-icons/fa";
import {GiLindenLeaf} from "react-icons/gi";
import {GiTrashCan} from "react-icons/gi";

import './App.css';
import './bootstrap.min.css';

const INGR = [
  {name: 'Salad', image: <GiLindenLeaf/>},
  {name: 'Cheese', image: <GiCheeseWedge/>},
  {name: 'Meat', image: <GiMeat/>},
  {name: 'Bacon', image: <FaBacon/>},
];

class App extends Component {
  state = { 
    ingredients: [
      {name: 'Salad', count: 0, price: 5},
      {name: 'Cheese', count: 0, price: 20},
      {name: 'Meat', count: 0, price: 50},
      {name: 'Bacon', count: 0, price: 30},
    ],
    price:20,
  };

  addIngredient = (i) => {
    const ingredients = [...this.state.ingredients];
    ingredients[i].count ++
    let price = this.state.price;
    price+=ingredients[i].price
    this.setState({ingredients,price})
  };

  removeIngredient = (i) => {
    const ingredients = [...this.state.ingredients];
    if (ingredients[i].count > 0) {
      ingredients[i].count --
      let price = this.state.price;
    price-=ingredients[i].price
    this.setState({ingredients,price})
    }
  };

  addComponents = () =>{
    let innerIngredients = [];
    let add;
    this.state.ingredients.forEach(element => {
      if (element.name ==='Salad') {
        add = <Salad/>
      } else if (element.name ==='Cheese') {
        add = <Cheese/>
      } else if (element.name ==='Meat') {
        add = <Meat/>
      } else if (element.name ==='Bacon') {
        add = <Bacon/>
      }
      if (element.count > 0) {
        for (let i=0; i<element.count; i++) {
          innerIngredients.push(add)
        }
      }
    })
    return innerIngredients;
  };

  render = () => (
    <div className="container">
      <div className="row mt-3 text-center">
        <div className="col-12 col-md-6 mb-3">
          <h5>Ingredients</h5>
          <div className="border border-secondary rounded p-2">
          {INGR.map((element, i) => (
              <Ingredients
                key = {i}
                ingrIcons = {element.image}
                name = {element.name}
                trashIcon = {<GiTrashCan/>}
                count = {this.state.ingredients[i].count}
                add = {() => this.addIngredient(i)}
                remove = {() => this.removeIngredient(i)}
              />
          ))}
            <p className="text-center">{`Price : ${this.state.price} $`}</p>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <h5>Burger</h5>
          <div className="border border-secondary rounded p-2">
            <div className="Burger">
              <BreadTop/>
                {this.addComponents().map((element, i)=> (<Fragment key={i}>{element}</Fragment>))}
              <BreadBottom/>
            </div>  
          </div>
        </div>
      </div>  
    </div>
  )
};

export default App;