import { elements } from './base';

export const getInput = () => elements.searchInput.value;

const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${}" alt="Test">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">Pasta with Tomato ...</h4>
                    <p class="results__author">The Pioneer Woman</p>
                </div>
            </a>
        </li>
    `;
}

export const renderResults = recipes => {
    recipes.foreach(el => renderRecipe);
}