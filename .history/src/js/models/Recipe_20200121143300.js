import axios from 'axios';
import { proxy } from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            console.log(res);
    } catch(error) {
        console.log(error);
    }
}