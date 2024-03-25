import React, { useState, useEffect } from 'react';
import RecipeSearch from './Buscador';

const MiApi = () => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
                const data = await response.json();
                const recipes = data.meals || [];
                const sortedRecipes = recipes.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
                setAllRecipes(sortedRecipes);
                setFilteredRecipes(sortedRecipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    const handleSearch = searchTerm => {
        const filtered = allRecipes.filter(recipe =>
            recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRecipes(filtered);
    };

    return (
        <div>
            <RecipeSearch recipes={filteredRecipes} onSearch={handleSearch} />
        </div>
    );
};

export default MiApi;

export default MiApi;
