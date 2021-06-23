import React from 'react';

import './IngredientList.css';

const IngredientList = React.memo(props => {
  return (
    <section className="ingredient-list">
      <h3>Your Basket</h3>
      <ul>
        {props.ingredients.map(ig => (
          <li key={ig.id} onClick={props.onRemoveItem.bind(this, ig.id)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
});

export default IngredientList;
