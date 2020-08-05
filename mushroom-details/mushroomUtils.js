import mushData from '../data/mushData.js';
import { findById } from '../common/utils.js';
import { renderMush } from './render-mush.js';

const main = document.querySelector('main');

// super clean code here! nice modularization

const params = new URLSearchParams(window.location.search);
const paramsId = params.get('id');

const findMush = findById(mushData, paramsId);

const section = renderMush(findMush);

main.append(section);