import {getCardElement} from './task.js';


export const generationCard = (count) => {
  const cardArray = [];
  for (let i = 0; i < count; i++) {
    cardArray.push(getCardElement());
  }
  return cardArray.join(` `);
};
