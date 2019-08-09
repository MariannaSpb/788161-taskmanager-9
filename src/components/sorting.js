import {getCardFormElement} from './task-edit.js';
import {generationCard} from './card-generation.js';
import {getLoadBtn} from './load-more-button.js';

const CARD_COUNT = 3;
export const getBoardSortingList = () => {
  return `
  <section class="board container">
    <div class="board__filter-list">
      <a href="#" class="board__filter">SORT BY DEFAULT</a>
      <a href="#" class="board__filter">SORT BY DATE up</a>
      <a href="#" class="board__filter">SORT BY DATE down</a>
    </div>
    <div class="board__tasks">
    ${getCardFormElement()}
    ${generationCard(CARD_COUNT)}
    </div>
    ${getLoadBtn(`load more`)}
  </section>
  `;
};
