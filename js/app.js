/**
 * app.js - Orchestrateur du site
 */

document.addEventListener('DOMContentLoaded', () => {
    // État de l'application
    let state = {
        ingredients: Storage.getIngredients(),
        ustensiles: Storage.getUstensiles(),
        favoris: Storage.getFavoris(),
        searchQuery: "",
        activeTag: "Tout",
        isStrict: false
    };

    // Éléments DOM
    const ingredientsList = document.getElementById('ingredients-list');
    const ingredientInput = document.getElementById('ingredient-input');
    const recipeContainer = document.getElementById('recipe-container');
    const recipeCount = document.getElementById('recipe-count');
    const recipeSearch = document.getElementById('recipe-search');
    const modeStrictToggle = document.getElementById('mode-strict');
    const modeLabel = document.getElementById('mode-label');
    const filterChips = document.querySelectorAll('.filter-chip');
    const clearFrigoBtn = document.getElementById('clear-frigo');
    const recipeModal = document.getElementById('recipe-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close');

    /**
     * Initialisation
     */
    function init() {
        renderIngredients();
        renderRecipes();
        setupEventListeners();
    }

    /**
     * Rendu des ingrédients (chips) dans la sidebar
     */
    function renderIngredients() {
        ingredientsList.innerHTML = '';
        state.ingredients.forEach((ing, index) => {
            const chip = document.createElement('div');
            chip.className = 'chip';
            chip.innerHTML = `
                ${ing}
                <span class="chip-remove" data-index="${index}">&times;</span>
            `;
            ingredientsList.appendChild(chip);
        });
        Storage.saveIngredients(state.ingredients);
    }

    /**
     * Rendu des cartes recettes
     */
    function renderRecipes() {
        const filtered = Matching.filterRecipes(recipes, state.ingredients, state.ustensiles, {
            query: state.searchQuery,
            tag: state.activeTag,
            isStrict: state.isStrict
        });

        recipeCount.textContent = `${filtered.length} recette${filtered.length > 1 ? 's' : ''}`;
        
        recipeContainer.innerHTML = '';
        
        if (filtered.length === 0) {
            recipeContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                    <h3>Désolé, aucune recette ne correspond ! 🥕</h3>
                    <p>Essayez d'ajouter plus d'ingrédients ou passez en mode flexible.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(recipe => {
            const isFav = state.favoris.includes(recipe.id);
            const card = document.createElement('div');
            card.className = 'recipe-card';
            
            let matchClass = 'match-low';
            if (recipe.score >= 80) matchClass = 'match-high';
            else if (recipe.score >= 50) matchClass = 'match-medium';

            card.innerHTML = `
                <div class="recipe-image">${recipe.emoji}</div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <h3 class="recipe-title">${recipe.titre}</h3>
                    <span class="fav-heart ${isFav ? 'active' : ''}" data-id="${recipe.id}">${isFav ? '❤️' : '🤍'}</span>
                </div>
                <div class="recipe-meta">
                    <span>⏱ ${recipe.temps} min</span>
                    <span class="match-badge ${matchClass}">${recipe.score}% match</span>
                </div>
                ${!state.isStrict && recipe.missingIngredients.length > 0 ? `
                    <div class="missing-ingredients">
                        Il vous manque : <span class="missing-ingredient">${recipe.missingIngredients.slice(0, 2).join(', ')}${recipe.missingIngredients.length > 2 ? '...' : ''}</span>
                    </div>
                ` : ''}
            `;
            
            card.addEventListener('click', (e) => {
                if (e.target.classList.contains('fav-heart')) return;
                openRecipeDetail(recipe);
            });

            recipeContainer.appendChild(card);
        });
    }

    /**
     * Ouvre la modal de détail
     */
    function openRecipeDetail(recipe) {
        Storage.addHistorique(recipe.id);
        
        modalBody.innerHTML = `
            <div style="display: flex; gap: 40px; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 300px;">
                    <div class="recipe-image" style="height: 300px; font-size: 150px; margin-bottom: 24px;">${recipe.emoji}</div>
                    <h2>Ingrédients</h2>
                    <ul style="margin-top: 16px; list-style: none;">
                        ${recipe.ingredients.map(ing => {
                            const hasIt = state.ingredients.some(ui => ui.toLowerCase().includes(ing.nom.toLowerCase()) || ing.nom.toLowerCase().includes(ui));
                            return `<li style="margin-bottom: 8px; font-size: 18px;">
                                ${hasIt ? '✅' : '❌'} ${ing.nom} ${ing.obligatoire ? '<b>*</b>' : ''}
                            </li>`;
                        }).join('')}
                    </ul>
                </div>
                <div style="flex: 1.5; min-width: 300px;">
                    <h1 style="font-size: 36px; margin-bottom: 16px;">${recipe.titre}</h1>
                    <p style="font-size: 18px; color: var(--text-light); margin-bottom: 24px;">${recipe.description}</p>
                    
                    <div style="display: flex; gap: 20px; margin-bottom: 32px;">
                        <span class="chip">⏱ ${recipe.temps} min</span>
                        <span class="chip">📊 ${recipe.difficulte}</span>
                    </div>

                    <h2>Instructions</h2>
                    <ol style="margin-top: 16px; padding-left: 20px;">
                        ${recipe.instructions.map(step => `<li style="margin-bottom: 12px; font-size: 18px;">${step}</li>`).join('')}
                    </ol>
                </div>
            </div>
        `;
        recipeModal.style.display = 'block';
    }

    /**
     * Event Listeners
     */
    function setupEventListeners() {
        const autocompleteList = document.getElementById('autocomplete-list');

        // Autocomplete des ingrédients
        ingredientInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase().trim();
            autocompleteList.innerHTML = '';
            
            if (!val) {
                autocompleteList.classList.remove('active');
                return;
            }

            const matches = commonIngredients.filter(ing => 
                ing.nom.toLowerCase().startsWith(val) && !state.ingredients.includes(ing.nom)
            ).slice(0, 5);

            if (matches.length > 0) {
                matches.forEach(match => {
                    const item = document.createElement('div');
                    item.className = 'suggestion-item';
                    item.innerHTML = `<span class="emoji">${match.emoji}</span> ${match.nom}`;
                    item.addEventListener('click', () => {
                        addIngredient(match.nom);
                        ingredientInput.value = '';
                        autocompleteList.classList.remove('active');
                    });
                    autocompleteList.appendChild(item);
                });
                autocompleteList.classList.add('active');
            } else {
                autocompleteList.classList.remove('active');
            }
        });

        function addIngredient(name) {
            if (!state.ingredients.includes(name.toLowerCase())) {
                state.ingredients.push(name.toLowerCase());
                renderIngredients();
                renderRecipes();
            }
        }

        // Ajout ingrédient manuel (Enter)
        ingredientInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && ingredientInput.value.trim()) {
                addIngredient(ingredientInput.value.trim());
                ingredientInput.value = '';
                autocompleteList.classList.remove('active');
            }
        });

        // Fermer l'autocomplete si on clique ailleurs
        document.addEventListener('click', (e) => {
            if (!ingredientInput.contains(e.target) && !autocompleteList.contains(e.target)) {
                autocompleteList.classList.remove('active');
            }
        });

        // Suppression ingrédient
        ingredientsList.addEventListener('click', (e) => {
            if (e.target.classList.contains('chip-remove')) {
                const index = parseInt(e.target.dataset.index);
                state.ingredients.splice(index, 1);
                renderIngredients();
                renderRecipes();
            }
        });

        // Toggle Strict/Flexible
        modeStrictToggle.addEventListener('change', () => {
            state.isStrict = modeStrictToggle.checked;
            modeLabel.textContent = state.isStrict ? "Mode Strict" : "Mode Flexible";
            renderRecipes();
        });

        // Recherche recettes
        recipeSearch.addEventListener('input', (e) => {
            state.searchQuery = e.target.value;
            renderRecipes();
        });

        // Filtres Tags
        filterChips.forEach(chip => {
            chip.addEventListener('click', () => {
                filterChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                state.activeTag = chip.textContent;
                renderRecipes();
            });
        });

        // Favoris
        recipeContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('fav-heart')) {
                const id = parseInt(e.target.dataset.id);
                Storage.toggleFavori(id);
                state.favoris = Storage.getFavoris();
                renderRecipes();
            }
        });

        // Clear Frigo
        clearFrigoBtn.addEventListener('click', () => {
            state.ingredients = [];
            renderIngredients();
            renderRecipes();
        });

        // Toggles Sections Sidebar
        const setupSidebarToggle = (toggleId, contentId) => {
            const toggle = document.getElementById(toggleId);
            const content = document.getElementById(contentId);
            if (toggle && content) {
                toggle.addEventListener('click', () => {
                    toggle.classList.toggle('active');
                    content.classList.toggle('active');
                });
            }
        };

        setupSidebarToggle('ingredients-toggle', 'ingredients-content');
        setupSidebarToggle('ustensiles-toggle', 'ustensiles-content');

        // Modal close
        closeModal.onclick = () => recipeModal.style.display = 'none';
        window.onclick = (e) => {
            if (e.target === recipeModal) recipeModal.style.display = 'none';
        };
    }

    init();
});
