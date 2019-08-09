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

export {getControl, getColorBar, getTextareaWrap};
