import axios from 'axios';
import { proxy } from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
        console.log(res);
    } catch(error) {
        console.log(error);
    }
}