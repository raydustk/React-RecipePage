import React, { useState, useEffect } from 'react';
import RecipeSearch from './Buscador';

const MiApi = () => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response1 = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Strawberries%20Romanoff');
                const data1 = await response1.json();
                const strawberryRecipe = data1.meals ? data1.meals[0] : null;

                const response2 = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Blackberry%20Fool');
                const data2 = await response2.json();
                const blackberryRecipe = data2.meals ? data2.meals[0] : null;

                const response3 = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Peach%20&%20Blueberry%20Grunt');
                const data3 = await response3.json();
                const peachBlueberryRecipe = data3.meals ? data3.meals[0] : null;

                const response4 = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Apple%20&%20Blackberry%20Crumble');
                const data4 = await response4.json();
                const appleBlackberryCrumbleRecipe = data4.meals ? data4.meals[0] : null;

                const response5 = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Apple%20Frangipan%20Tart');
                const data5 = await response5.json();
                const appleFrangipanTartRecipe = data5.meals ? data5.meals[0] : null;

                const response6 = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Treacle%20Tart');
                const data6 = await response6.json();
                const treacleTartRecipe = data6.meals ? data6.meals[0] : null;

                const recipes = [strawberryRecipe, blackberryRecipe, peachBlueberryRecipe, appleBlackberryCrumbleRecipe, appleFrangipanTartRecipe, treacleTartRecipe].filter(recipe => recipe !== null);
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
//* */
export default MiApi;
