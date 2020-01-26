export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults(query) {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        try {
            const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?q=${query}`);
            const recipes = res.data.recipes;
            console.log(recipes);
        } catch (error) {
            alert(error);
        }
    }
    getResults('pasta');
}

import axios from 'axios';



// https://forkify-api.herokuapp.com/api/search
// https://forkify-api.herokuapp.com/api/get