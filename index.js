import fakeData from './fakeData.js'
import { ACTIVITIES, FACE_EMOTIONS } from './icons.js'
var moment = require('moment')

const parseHTML = htmlString => {
  let parser = new DOMParser()
  let doc = parser.parseFromString(htmlString, 'text/html')
  return doc.body.firstChild
}

function render() {
  console.log(fakeData)
  const setter = document.querySelector('#month-setter')
  const monthOptions = setter.querySelectorAll('.month-option')
  Array.from(monthOptions).forEach(option => {})

  const entriesContainer = document.querySelector('#entries')

  fakeData.forEach(entry => {
    const elem = parseHTML(`<div class="mdc-card demo-card demo-ui-control entry mdc-ripple-upgraded" >
    <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
      <div class="demo-card__primary">
        <h2 class="demo-card__title mdc-typography mdc-typography--headline6">${moment(new Date(entry.date)).format('dddd, DD MMMM')}</h2>
      </div>
    </div>
    <div style="height: 100%; width: 100px;">
      ${FACE_EMOTIONS[entry.emotion]}
    </div>
    <div class="mdc-card__actions">
      <div style="display: inline-block;">${entry.activities
        .map(activity => {
          return ACTIVITIES[activity]
        })
        .join('')}</div>
      <div style="position: absolute; right: 10px;">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.7188 4.03125L15.8906 5.85938L12.1406 2.10938L13.9688 0.28125C14.1562 0.09375 14.3906 0 14.6719 0C14.9531 0 15.1875 0.09375 15.375 0.28125L17.7188 2.625C17.9062 2.8125 18 3.04688 18 3.32812C18 3.60938 17.9062 3.84375 17.7188 4.03125ZM0 14.25L11.0625 3.1875L14.8125 6.9375L3.75 18H0V14.25Z" fill="#666666"/>
        </svg>
      
      </div>

    </div>
  </div>`)
    entriesContainer.appendChild(elem)
  })
}

render()
