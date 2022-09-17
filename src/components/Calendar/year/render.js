import { createTable } from '../creator';
import {
  createYearControlArea,
  createYearNode
} from './creator';

import './index.scss';
import { getStartAndEndYear } from './utils';


export function render (container, year) {
  container.innerHTML = '';

  const oTable = createTable('my-year-calendar-table');

  const controlArea = createYearControlArea(year);
  const yearNode = createYearNode(year);

  yearNode.forEach(tr => oTable.appendChild(tr));

  container.appendChild(controlArea);
  container.appendChild(oTable);
}

export function update (year) {
  const oTable = document.querySelector('.my-year-calendar-table');
  const oStartYear = document.querySelector('.start-year');
  const oEndYear = document.querySelector('.end-year');

  const yearNode = createYearNode(year);
  const [startYear, endYear] = getStartAndEndYear(year)

  oTable.innerHTML = ''
  oStartYear.innerText = startYear;
  oEndYear.innerText = endYear;

  yearNode.forEach(tr => {
    oTable.appendChild(tr)
  })
}