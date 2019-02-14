import { updateMovieList, getMovies } from './movies';
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select2';

// Init Sortable list
initSortable();
initMarkdown();
initSelect2();

getMovies('Harry');

const form = document.getElementById('search-movies');

form.addEventListener('submit', updateMovieList);



