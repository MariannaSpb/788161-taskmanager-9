import {getControl, getColorBar, getTextareaWrap} from './cardElements.js';

export const getCardElement = () => {
  return `<article class="card card--black">
  <div class="card__form">
    <div class="card__inner">
      ${getControl()}
      ${getColorBar()}
      ${getTextareaWrap(`Example default task with default color.`)}
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
