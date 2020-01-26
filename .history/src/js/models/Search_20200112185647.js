import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
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
// https://forkify-api.herokuapp.com/api/search
// https://forkify-api.herokuapp.com/api/get