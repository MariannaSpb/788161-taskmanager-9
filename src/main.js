'use strict';

const mainContainer = document.querySelector(`.main`);
const menuContainer = mainContainer.querySelector(`.main__control`);
const CARD_COUNT = 3;

const FILTER__ELEMENTS = [
  {
    id: `filter__all`,
    text: `All `,
    className: `all-count`,
    amount: 13,
    checked: true,
    disabled: false
  },
  {
    id: `filter__overdue`,
    text: `Overdue `,
    className: `overdue`,
    amount: 0,
    checked: false,
    disabled: true
  },
  {
    id: `filter__today`,
    text: `Today `,
    className: `today`,
    amount: 0,
    checked: false,
    disabled: true
  },
  {
    id: `filter__favorites`,
    text: `Favorites `,
    className: `favorites`,
    amount: 1,
    checked: false,
    disabled: false
  },
  {
    id: `filter__repeating`,
    text: `Repeating `,
    className: `repeating`,
    amount: 1,
    checked: false,
    disabled: false
  },
  {
    id: `filter__tags`,
    text: `Tags `,
    className: `tags`,
    amount: 1,
    checked: false,
    disabled: false
  },
  {
    id: `filter__archive`,
    text: `Archive `,
    className: `archive`,
    amount: 115,
    checked: false,
    disabled: false
  }
];

const getMenu = () => {
  return `<section class="control__btn-wrap">
  <input type="radio" name="control" id="control__new-task" class="control__input visually-hidden">
  <label for="control__new-task" class="control__label control__label--new-task">+ ADD NEW TASK</label>
  <input type="radio" name="control" id="control__task" class="control__input visually-hidden" checked="">
  <label for="control__task" class="control__label">TASKS</label>
  <input type="radio" name="control" id="control__statistic" class="control__input visually-hidden">
  <label for="control__statistic" class="control__label">STATISTICS</label>
</section>`;
};


const getSearchArea = () => {
  return `<section class="main__search search container">
    <input type="text" id="search__input" class="search__input"
        placeholder="START TYPING &mdash; SEARCH BY WORD, #HASHTAG OR DATE">
    <label class="visually-hidden" for="search__input">Search</label>
  </section>`;
};


const getFilterElement = (id, text, className, amount, isChecked = false, isDisabled = false) => {
  return `<input type="radio" id=${id} class="filter__input visually-hidden" name="filter"
  ${isChecked ? `checked` : ``}
  ${isDisabled ? `disabled` : ``}
  />
  <label for=${id} class="filter__label">${text}<span class="filter__${className}-count">${amount}</span></label>`;
};

const generateFilterList = (collection) => {
  // const filters = [];
  // elements.forEach((element) => {
  //   filters.push(getFilterElement(element.id, element.text, element.className, element.amount, element.checked, element.disabled));
  // });
  const filters = collection.map((item) => {
    return getFilterElement(item.id, item.text, item.className, item.amount, item.checked, item.disabled);
  });

  return filters.join(``);
};


const filterContainer = document.createElement(`section`);
filterContainer.classList.add(`main__filter`, `filter`, `container`);

mainContainer.appendChild(filterContainer);


const getBoardFilterList = () => {
  return `
  <section class="board container">
    <div class="board__filter-list">
      <a href="#" class="board__filter">SORT BY DEFAULT</a>
      <a href="#" class="board__filter">SORT BY DATE up</a>
      <a href="#" class="board__filter">SORT BY DATE down</a>
    </div>
    <div class="board__tasks"></div>
  </section>
  `;
};


const getLoadBtn = (text) => {
  return `<button class="load-more" type="button">${text}</button>`;
};

// внутренности карточки
const getControl = () => {
  return `<div class="card__control">
  <button type="button" class="card__btn card__btn--archive">
    archive
  </button>
  <button type="button" class="card__btn card__btn--favorites card__btn--disabled">
    favorites
  </button>
</div>`;
};

const getColorBar = () => {
  return `<div class="card__color-bar">
  <svg class="card__color-bar-wave" width="100%" height="10">
    <use xlink:href="#wave"></use>
  </svg>
</div>`;
};

const getTextareaWrap = (text) => {
  return `<div class="card__textarea-wrap">
  <label>
    <textarea class="card__text" placeholder="Start typing your text here..." name="text">${text}</textarea>
  </label>
</div>`;
};


const getCardElement = () => {
  return `<article class="card card--black">
  <div class="card__form">
    <div class="card__inner">
      <div class="card__control">
        <button type="button" class="card__btn card__btn--edit">
          edit
        </button>
        <button type="button" class="card__btn card__btn--archive">
          archive
        </button>
        <button
          type="button"
          class="card__btn card__btn--favorites card__btn--disabled"
        >
          favorites
        </button>
      </div>
      <div class="card__color-bar">
        <svg class="card__color-bar-wave" width="100%" height="10">
          <use xlink:href="#wave"></use>
        </svg>
      </div>
      <div class="card__textarea-wrap">
        <p class="card__text">Example default task with default color.</p>
      </div>
      <div class="card__settings">
        <div class="card__details">
          <div class="card__dates">
            <div class="card__date-deadline">
              <p class="card__input-deadline-wrap">
                <span class="card__date">23 September</span>
                <span class="card__time">11:15 PM</span>
              </p>
            </div>
          </div>
          <div class="card__hashtag">
            <div class="card__hashtag-list">
              <span class="card__hashtag-inner">
                <span class="card__hashtag-name">
                  #todo
                </span>
              </span>
              <span class="card__hashtag-inner">
                <span class="card__hashtag-name">
                  #personal
                </span>
              </span>
              <span class="card__hashtag-inner">
                <span class="card__hashtag-name">
                  #important
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>`;
};

const getCardFormElement = () => {
  return `<article class="card card card--edit card--yellow card--repeat>
            <form class="card__form" method="get">
              <div class="card__inner">
                ${getControl()}
                ${getColorBar()}
                ${getTextareaWrap(`Here is a card with filled data.`)}
                <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <button class="card__date-deadline-toggle" type="button">
                        date: <span class="card__date-status">yes</span>
                      </button>

                      <fieldset class="card__date-deadline">
                        <label class="card__input-deadline-wrap">
                          <input class="card__date" type="text" placeholder="" name="date" value="23 September 11:15 PM">
                        </label>
                      </fieldset>

                      <button class="card__repeat-toggle" type="button">
                        repeat:<span class="card__repeat-status">yes</span>
                      </button>

                      <fieldset class="card__repeat-days">
                        <div class="card__repeat-days-inner">
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-mo-4" name="repeat" value="mo">
                          <label class="card__repeat-day" for="repeat-mo-4">mo</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-tu-4" name="repeat" value="tu" checked="">
                          <label class="card__repeat-day" for="repeat-tu-4">tu</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-we-4" name="repeat" value="we">
                          <label class="card__repeat-day" for="repeat-we-4">we</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-th-4" name="repeat" value="th">
                          <label class="card__repeat-day" for="repeat-th-4">th</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-fr-4" name="repeat" value="fr" checked="">
                          <label class="card__repeat-day" for="repeat-fr-4">fr</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" name="repeat" value="sa" id="repeat-sa-4">
                          <label class="card__repeat-day" for="repeat-sa-4">sa</label>
                          <input class="visually-hidden card__repeat-day-input" type="checkbox" id="repeat-su-4" name="repeat" value="su" checked="">
                          <label class="card__repeat-day" for="repeat-su-4">su</label>
                        </div>
                      </fieldset>
                    </div>

                    <div class="card__hashtag">
                      <div class="card__hashtag-list">
                        <span class="card__hashtag-inner">
                          <input type="hidden" name="hashtag" value="repeat" class="card__hashtag-hidden-input">
                          <p class="card__hashtag-name">
                            #repeat
                          </p>
                          <button type="button" class="card__hashtag-delete">
                            delete
                          </button>
                        </span>

                        <span class="card__hashtag-inner">
                          <input type="hidden" name="hashtag" value="repeat" class="card__hashtag-hidden-input">
                          <p class="card__hashtag-name">
                            #cinema
                          </p>
                          <button type="button" class="card__hashtag-delete">
                            delete
                          </button>
                        </span>

                        <span class="card__hashtag-inner">
                          <input type="hidden" name="hashtag" value="repeat" class="card__hashtag-hidden-input">
                          <p class="card__hashtag-name">
                            #entertaiment
                          </p>
                          <button type="button" class="card__hashtag-delete">
                            delete
                          </button>
                        </span>
                      </div>

                      <label>
                        <input type="text" class="card__hashtag-input" name="hashtag-input" placeholder="Type new hashtag here">
                      </label>
                    </div>
                  </div>

                  <div class="card__colors-inner">
                    <h3 class="card__colors-title">Color</h3>
                    <div class="card__colors-wrap">
                      <input type="radio" id="color-black-4" class="card__color-input card__color-input--black visually-hidden" name="color" value="black">
                      <label for="color-black-4" class="card__color card__color--black">black</label>
                      <input type="radio" id="color-yellow-4" class="card__color-input card__color-input--yellow visually-hidden" name="color" value="yellow" checked="">
                      <label for="color-yellow-4" class="card__color card__color--yellow">yellow</label>
                      <input type="radio" id="color-blue-4" class="card__color-input card__color-input--blue visually-hidden" name="color" value="blue">
                      <label for="color-blue-4" class="card__color card__color--blue">blue</label>
                      <input type="radio" id="color-green-4" class="card__color-input card__color-input--green visually-hidden" name="color" value="green">
                      <label for="color-green-4" class="card__color card__color--green">green</label>
                      <input type="radio" id="color-pink-4" class="card__color-input card__color-input--pink visually-hidden" name="color" value="pink">
                      <label for="color-pink-4" class="card__color card__color--pink">pink</label>
                    </div>
                  </div>
                </div>
                <div class="card__status-btns">
                  <button class="card__save" type="submit">save</button>
                  <button class="card__delete" type="button">delete</button>
                </div>
              </div>
            </form>
          </article>`;
};

// общая функция рендеринга
const renderComponents = (getComponents, container) => {
  container.insertAdjacentHTML(`beforeend`, getComponents);
};


renderComponents(getMenu(), menuContainer);
renderComponents(getSearchArea(), mainContainer);
mainContainer.appendChild(filterContainer);
// renderComponents(getFilterElement(), mainContainer);
renderComponents(generateFilterList(FILTER__ELEMENTS), filterContainer);

renderComponents(getBoardFilterList(), mainContainer);

const taskContainer = document.querySelector(`.board`);
const taskList = taskContainer.querySelector(`.board__tasks`);
renderComponents(getCardFormElement(), taskList);

for (let i = 0; i < CARD_COUNT; i++) {
  renderComponents(getCardElement(), taskList);
}


renderComponents(getLoadBtn(`load more`), taskContainer);
