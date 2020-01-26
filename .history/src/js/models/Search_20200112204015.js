import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        try {
            const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            console.log(res);
            this.result = res.data.recipes;
            console.log(recipes);
        } catch (error) {
            alert(error);
        }
    }
}
// https://forkify-api.herokuapp.com/api/search
// https://forkify-api.herokuapp.com/api/get