import axios from 'axios';

async function getResults(query) {
    axios(`https://forkify-api.herokuapp.com/api/search`)
}
getResults();

// https://forkify-api.herokuapp.com/api/search
// https://forkify-api.herokuapp.com/api/get