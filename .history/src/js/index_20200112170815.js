import axios from 'axios';

async function getResults(query) {
    const res = axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
}
getResults();

// https://forkify-api.herokuapp.com/api/search
// https://forkify-api.herokuapp.com/api/get