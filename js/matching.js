/**
 * matching.js - Algorithme de recherche et tri des recettes
 */

const Matching = {
    /**
     * Calcule le score de correspondance d'une recette
     * @param {Object} recipe 
     * @param {Array} userIngredients 
     * @returns {Object} { score, missingIngredients, isStrictMatch }
     */
    calculateScore: (recipe, userIngredients) => {
        const normalizedUserIngredients = userIngredients.map(i => i.toLowerCase().trim());
        
        const totalObligatoire = recipe.ingredients.filter(i => i.obligatoire).length;
        let matchedObligatoire = 0;
        let missingObligatoire = [];

        recipe.ingredients.forEach(ing => {
            const found = normalizedUserIngredients.some(ui => ui.includes(ing.nom.toLowerCase()) || ing.nom.toLowerCase().includes(ui));
            
            if (found) {
                if (ing.obligatoire) matchedObligatoire++;
            } else if (ing.obligatoire) {
                missingObligatoire.push(ing.nom);
            }
        });

        const score = totalObligatoire === 0 ? 100 : Math.round((matchedObligatoire / totalObligatoire) * 100);
        
        return {
            score,
            missingIngredients: missingObligatoire,
            isStrictMatch: missingObligatoire.length === 0
        };
    },

    /**
     * Filtre et trie les recettes
     */
    filterRecipes: (recipes, userIngredients, userUstensiles, options = {}) => {
        const { query = "", tag = "Tout", isStrict = false } = options;
        
        return recipes
            .map(recipe => {
                const matchingData = Matching.calculateScore(recipe, userIngredients);
                return { ...recipe, ...matchingData };
            })
            .filter(recipe => {
                // Filtre Recherche textuelle
                if (query && !recipe.titre.toLowerCase().includes(query.toLowerCase()) && 
                    !recipe.ingredients.some(i => i.nom.toLowerCase().includes(query.toLowerCase()))) {
                    return false;
                }

                // Filtre Mode Strict
                if (isStrict && !recipe.isStrictMatch) {
                    return false;
                }

                // Filtre Tags
                if (tag !== "Tout" && !recipe.tags.includes(tag.toLowerCase())) {
                    return false;
                }

                // Filtre Ustensiles (Optionnel: on cache seulement si l'utilisateur n'a PAS de poêle par ex)
                // Pour Rab, on va juste marquer la recette, on ne la cache pas forcément sauf si vraiment impossible
                
                return true;
            })
            .sort((a, b) => {
                // Tri par score (décroissant)
                if (b.score !== a.score) return b.score - a.score;
                // Puis par titre (croissant)
                return a.titre.localeCompare(b.titre);
            });
    }
};
