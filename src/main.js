import {getMenu} from './components/site-menu';
import {getSearchArea} from './components/search';
import {getFilterElement} from './components/filter';
import {getBoardSortingList} from './components/sorting';


const mainContainer = document.querySelector(`.main`);
const menuContainer = mainContainer.querySelector(`.main__control`);


const renderComponents = (getComponents, container) => {
  container.insertAdjacentHTML(`beforeend`, getComponents);
};

renderComponents(getMenu(), menuContainer);
renderComponents(getSearchArea(), mainContainer);
renderComponents(getFilterElement(), mainContainer);
renderComponents(getBoardSortingList(), mainContainer);
