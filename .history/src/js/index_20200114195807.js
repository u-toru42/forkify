import Search from './models/Search';


/**Global state of the app
 * -Search object
 * Current recipe object
 * Shopping list object
 * Liked recipes
 */
const state = {};

const controlSearch = () => {
    // 1) Get query from view
    const query = 'pizza'; // Todo

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

const search = new Search('pizza');
console.log(search);
search.getResults();