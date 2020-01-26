import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://crossorigin.me/';
    const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
}
getResults();

// https://forkify-api.herokuapp.com/api/search
// https://forkify-api.herokuapp.com/api/get