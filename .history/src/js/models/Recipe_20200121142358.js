/**
 * 139
 */
const res = await axios(`${PROXY}http://food2fork.com/api/get?key=${KEY}&rId=${this.id}`);
const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
/**
 * 139
 */
import axios from 'axios';
import { proxy } from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`${proxy}https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            console.log(res);
    } catch(error) {
        console.log(error);
    }
}