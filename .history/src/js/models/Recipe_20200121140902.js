import axios from 'axios';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
    } catch(error) {
        console.log(error);
    }
}