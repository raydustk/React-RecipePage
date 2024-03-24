import React, { useState, useEffect } from 'react';
import './MiApi.css';

const RecipeSearch = ({ recipes: initialRecipes, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [recipesState, setRecipesState] = useState([]);

    // Update recipesState whenever initialRecipes changes
    useEffect(() => {
        setRecipesState(initialRecipes.map(recipe => ({ ...recipe, showInstructions: false })));
    }, [initialRecipes]);

    const handleChange = event => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        onSearch(newSearchTerm);
    };

    const toggleInstructions = id => {
        setRecipesState(prevRecipes =>
            prevRecipes.map(recipe => {
                if (recipe.idMeal === id) {
                    return { ...recipe, showInstructions: !recipe.showInstructions };
                }
                return recipe;
            })
        );
    };

    return (
        <div className="search-container">
            <h1>D e s s e r t s</h1>
            <input
                type="text"
                id="recipeSearchInput"
                placeholder="Search recipes by name..."
                value={searchTerm}
                onChange={handleChange}
            />
            <div className="search-results recipes-container">
                {recipesState.map(recipe => (
                    <div key={recipe.idMeal} className="recipe-card">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <h3>{recipe.strMeal}</h3>
                        <p className='ingredients'>Ingredients: {countIngredients(recipe)}</p>
                        <p className="country">{recipe.strArea}</p>
                        {recipe.showInstructions && <p className='country small'>{recipe.strInstructions}</p>}
                        <button onClick={() => toggleInstructions(recipe.idMeal)}>
                            {recipe.showInstructions ? 'Hide Instructions' : 'Show Instructions'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const countIngredients = recipe => {
    let count = 0;
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        if (ingredient) {
            count++;
        } else {
            break;
        }
    }
    return count;
};

export default RecipeSearch;

