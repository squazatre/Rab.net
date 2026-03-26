/**
 * storage.js - Gestion de la persistance locale (localStorage)
 */

const STORAGE_KEYS = {
    INGREDIENTS: 'rab_ingredients',
    USTENSILES: 'rab_ustensiles',
    FAVORIS: 'rab_favoris',
    HISTORIQUE: 'rab_historique'
};

const Storage = {
    saveIngredients: (ingredients) => {
        localStorage.setItem(STORAGE_KEYS.INGREDIENTS, JSON.stringify(ingredients));
    },

    getIngredients: () => {
        const data = localStorage.getItem(STORAGE_KEYS.INGREDIENTS);
        return data ? JSON.parse(data) : ["oeufs", "pâtes", "sauce soja", "pain dur"]; // Default initial values for demo
    },

    saveUstensiles: (ustensiles) => {
        localStorage.setItem(STORAGE_KEYS.USTENSILES, JSON.stringify(ustensiles));
    },

    getUstensiles: () => {
        const data = localStorage.getItem(STORAGE_KEYS.USTENSILES);
        return data ? JSON.parse(data) : ["four", "poêle", "casserole"];
    },

    toggleFavori: (recipeId) => {
        let favoris = Storage.getFavoris();
        const index = favoris.indexOf(recipeId);
        if (index > -1) {
            favoris.splice(index, 1);
        } else {
            favoris.push(recipeId);
        }
        localStorage.setItem(STORAGE_KEYS.FAVORIS, JSON.stringify(favoris));
        return favoris.includes(recipeId);
    },

    getFavoris: () => {
        const data = localStorage.getItem(STORAGE_KEYS.FAVORIS);
        return data ? JSON.parse(data) : [];
    },

    addHistorique: (recipeId) => {
        let historique = Storage.getHistorique();
        // On garde les 10 dernières recettes uniques
        historique = [recipeId, ...historique.filter(id => id !== recipeId)].slice(0, 10);
        localStorage.setItem(STORAGE_KEYS.HISTORIQUE, JSON.stringify(historique));
    },

    getHistorique: () => {
        const data = localStorage.getItem(STORAGE_KEYS.HISTORIQUE);
        return data ? JSON.parse(data) : [];
    },

    clearAll: () => {
        localStorage.clear();
        location.reload();
    }
};
