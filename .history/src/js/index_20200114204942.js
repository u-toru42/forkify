import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/**Global state of the app
 * -Search object
 * Current recipe object
 * Shopping list object
 * Liked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1) Get query from view
    const query = 'pizza' // Todo

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results

        // 4) Search for recipes
        await state.search.getResults();

        // 5) render results on UI
        console.log(state.search.result);
    }
}

.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

const search = new Search('pizza');
console.log(search);
search.getResults();