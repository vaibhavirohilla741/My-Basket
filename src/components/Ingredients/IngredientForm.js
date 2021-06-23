import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";
import LoadingIndicator from "../UI/LoadingIndicator"

const IngredientForm = React.memo((props) => {
  const [title,setTitle] = useState('');
  const [amount,setAmount] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({title:title,amount:amount});

    // ...
  };

  return (
    <section className="ingredient-form">
     <center><h2>Basket</h2></center>
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(event) =>{
                
                setTitle(event.target.value)
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(event) =>{
                setAmount(event.target.value)
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Item</button>
            {props.loading ? <LoadingIndicator/>:null}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
