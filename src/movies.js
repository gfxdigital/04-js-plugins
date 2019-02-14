const list = document.getElementById('results');
const input = document.querySelector('.form-control');

const getMovies = (movieName) => {
	fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=adf1f2d7`)
	  .then(response => response.json())
	  .then((data) => {
	    const movies = data.Search;
	    movies.forEach((movie) => {
	    	const item = `<li style="max-width: 200px">
				    		<img src="${movie.Poster}" style="max-width: 100px;">
				    		<p>${movie.Title}</p>
				    	  </li>`;
			list.insertAdjacentHTML('beforeend', item);
	    })
	  });
}


const updateMovieList = (event) => {
	event.preventDefault();

	list.innerHTML = '';
	getMovies(input.value);
}

export { updateMovieList, getMovies };
