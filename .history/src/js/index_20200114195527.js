import Search from './models/Search';


/**Global state of the app
 * -Search object
 * Current recipe object
 * Shopping list object
 * Liked recipes
 */
const state = {};

const controlSearch = () => {

}

document.querySelector('.search').addEventListener('submit', e => {
    

});

const search = new Search('pizza');
console.log(search);
search.getResults();