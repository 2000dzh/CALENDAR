import { createTable } from '../creator';
import {
  createWeekDaysNode,
  createDateNode,
  createControlArea
} from './creator';

import './index.scss'

export function render (container, year, month) {

  container.innerHTML = '';

  const oTable = createTable('my-calendar-table');
  const oThead = document.createElement('thead');
  const oTbody = document.createElement('tbody');
  const weekDayNode = createWeekDaysNode();

  oTbody.className = 'my-calendar-body';

  const dateTrs = createDateNode(year, month);
  const controlArea = createControlArea(year, month);
  oThead.appendChild(weekDayNode);

  dateTrs.forEach(tr => {
    oTbody.appendChild(tr);
  })

  oTable.appendChild(oThead);
  oTable.appendChild(oTbody);
  container.appendChild(controlArea);
  container.appendChild(oTable);
}

export function update (year, month) {
  const oTbody = document.querySelector('.my-calendar-body');
  const oTitleYear = document.querySelector('.title-year');
  const oTitleMonth = document.querySelector('.title-month');

  const dateTrs = createDateNode(year, month);

  oTbody.innerHTML = '';
  oTitleYear.innerText = year;
  oTitleMonth.innerText = month;

  dateTrs.forEach(tr => {
    oTbody.appendChild(tr);
  })

}