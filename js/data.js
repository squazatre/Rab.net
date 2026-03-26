var recipes = [
    {
        id: 1,
        titre: "Omelette aux fines herbes",
        description: "Une omelette simple et rapide, parfaite pour un déjeuner léger.",
        temps: 10,
        difficulte: "Facile",
        ingredients: [
            { nom: "oeufs", obligatoire: true },
            { nom: "beurre", obligatoire: true },
            { nom: "sel", obligatoire: true },
            { nom: "poivre", obligatoire: true },
            { nom: "persil", obligatoire: false },
            { nom: "ciboulette", obligatoire: false }
        ],
        ustensiles: ["poêle", "fourchette"],
        tags: ["végétarien", "rapide", "budget"],
        instructions: [
            "Battez les oeufs avec le sel et le poivre.",
            "Faites fondre le beurre dans une poêle chaude.",
            "Versez les oeufs et remuez doucement.",
            "Ajoutez les herbes et pliez l'omelette."
        ],
        emoji: "🍳"
    },
    {
        id: 2,
        titre: "Pâtes à la carbonara (la vraie !)",
        description: "La recette authentique italienne, sans crème fraîche.",
        temps: 15,
        difficulte: "Facile",
        ingredients: [
            { nom: "pâtes", obligatoire: true },
            { nom: "guanciale", obligatoire: true },
            { nom: "oeufs", obligatoire: true },
            { nom: "pecorino", obligatoire: true },
            { nom: "poivre", obligatoire: true }
        ],
        ustensiles: ["casserole", "poêle", "bol"],
        tags: ["classique", "rapide"],
        instructions: [
            "Faites cuire les pâtes dans l'eau bouillante salée.",
            "Faites revenir le guanciale dans une poêle sans matière grasse.",
            "Mélangez les jaunes d'oeufs avec le pecorino et beaucoup de poivre.",
            "Mélangez tout hors du feu avec un peu d'eau de cuisson."
        ],
        emoji: "🍝"
    },
    {
        id: 3,
        titre: "Pain perdu à la cannelle",
        description: "Le meilleur moyen d'utiliser du pain rassis.",
        temps: 15,
        difficulte: "Facile",
        ingredients: [
            { nom: "pain dur", obligatoire: true },
            { nom: "lait", obligatoire: true },
            { nom: "oeufs", obligatoire: true },
            { nom: "sucre", obligatoire: true },
            { nom: "beurre", obligatoire: true },
            { nom: "cannelle", obligatoire: false }
        ],
        ustensiles: ["poêle", "bol"],
        tags: ["sucré", "anti-gaspi", "enfantin"],
        instructions: [
            "Mélangez le lait, les oeufs, le sucre et la cannelle dans un bol.",
            "Trempez les tranches de pain dur dans le mélange.",
            "Faites dorer les tranches dans une poêle avec du beurre.",
            "Servez chaud avec un peu plus de sucre."
        ],
        emoji: "🍞"
    },
    {
        id: 4,
        titre: "Salade de pâtes à la sauce soja",
        description: "Une salade fraîche et originale avec des restes de pâtes.",
        temps: 10,
        difficulte: "Facile",
        ingredients: [
            { nom: "pâtes", obligatoire: true },
            { nom: "sauce soja", obligatoire: true },
            { nom: "huile de sésame", obligatoire: false },
            { nom: "oignon vert", obligatoire: false },
            { nom: "concombre", obligatoire: false }
        ],
        ustensiles: ["saladier"],
        tags: ["frais", "végétarien", "anti-gaspi"],
        instructions: [
            "Mélangez les pâtes cuites froides avec la sauce soja.",
            "Ajoutez l'huile de sésame et les légumes coupés.",
            "Laissez reposer 10 minutes avant de servir."
        ],
        emoji: "🥗"
    },
    {
        id: 5,
        titre: "Soupe de pâtes au Kub'Or",
        description: "Le réconfort absolu quand il ne reste presque rien.",
        temps: 10,
        difficulte: "Très facile",
        ingredients: [
            { nom: "pâtes", obligatoire: true },
            { nom: "kub'or", obligatoire: true },
            { nom: "eau", obligatoire: true },
            { nom: "beurre", obligatoire: false }
        ],
        ustensiles: ["casserole"],
        tags: ["budget", "rapide", "réconfort"],
        instructions: [
            "Faites bouillir de l'eau avec un Kub'Or.",
            "Ajoutez les petites pâtes (ou pâtes brisées).",
            "Laissez cuire le temps indiqué sur le paquet.",
            "Ajoutez une noisette de beurre à la fin."
        ],
        emoji: "🥣"
    },
    {
        id: 6,
        titre: "Riz sauté aux oeufs",
        description: "Une recette asiatique classique pour utiliser du riz de la veille.",
        temps: 15,
        difficulte: "Facile",
        ingredients: [
            { nom: "riz", obligatoire: true },
            { nom: "oeufs", obligatoire: true },
            { nom: "sauce soja", obligatoire: true },
            { nom: "huile", obligatoire: true },
            { nom: "petits pois", obligatoire: false }
        ],
        ustensiles: ["poêle", "spatule"],
        tags: ["anti-gaspi", "rapide", "asiatique"],
        instructions: [
            "Faites chauffer l'huile dans une poêle.",
            "Ajoutez le riz cuit et faites-le sauter 5 minutes.",
            "Poussez le riz sur le côté et versez les oeufs battus.",
            "Mélangez le tout et ajoutez la sauce soja."
        ],
        emoji: "🍚"
    },
    {
        id: 7,
        titre: "Gratin de pâtes express",
        description: "Transformez vos restes de pâtes en un plat gourmand.",
        temps: 20,
        difficulte: "Facile",
        ingredients: [
            { nom: "pâtes", obligatoire: true },
            { nom: "fromage râpé", obligatoire: true },
            { nom: "crème fraîche", obligatoire: true },
            { nom: "jambon", obligatoire: false },
            { nom: "kub'or", obligatoire: false }
        ],
        ustensiles: ["plat à four", "four"],
        tags: ["gourmand", "enfantin"],
        instructions: [
            "Préchauffez votre four à 200°C.",
            "Mélangez les pâtes avec la crème et le jambon coupé.",
            "Saupoudrez généreusement de fromage râpé.",
            "Faites gratiner pendant 15 minutes."
        ],
        emoji: "🥘"
    },
    {
        id: 8,
        titre: "Tartine chèvre miel",
        description: "Simple, raffiné et délicieux.",
        temps: 10,
        difficulte: "Facile",
        ingredients: [
            { nom: "pain", obligatoire: true },
            { nom: "fromage de chèvre", obligatoire: true },
            { nom: "miel", obligatoire: true },
            { nom: "noix", obligatoire: false },
            { nom: "salade", obligatoire: false }
        ],
        ustensiles: ["four"],
        tags: ["végétarien", "rapide"],
        instructions: [
            "Posez des rondelles de chèvre sur le pain.",
            "Versez un filet de miel par-dessus.",
            "Passez sous le gril du four pendant 5 minutes.",
            "Ajoutez quelques noix si vous en avez."
        ],
        emoji: "🥪"
    },
    {
        id: 9,
        titre: "Croque-monsieur classique",
        description: "Le sandwich chaud préféré des Français.",
        temps: 15,
        difficulte: "Facile",
        ingredients: [
            { nom: "pain de mie", obligatoire: true },
            { nom: "jambon", obligatoire: true },
            { nom: "fromage", obligatoire: true },
            { nom: "beurre", obligatoire: true }
        ],
        ustensiles: ["poêle", "appareil à croque"],
        tags: ["classique", "enfantin"],
        instructions: [
            "Beurrez les faces extérieures du pain.",
            "Garnissez avec du jambon et du fromage.",
            "Faites dorer à la poêle 3 minutes par face.",
            "Servez bien chaud et fondant."
        ],
        emoji: "🥪"
    },
    {
        id: 10,
        titre: "Mousse au chocolat express",
        description: "Juste deux ingrédients pour un dessert divin.",
        temps: 15,
        difficulte: "Moyen",
        ingredients: [
            { nom: "chocolat", obligatoire: true },
            { nom: "oeufs", obligatoire: true },
            { nom: "sucre", obligatoire: false }
        ],
        ustensiles: ["bol", "fouet électrique", "casserole"],
        tags: ["sucré", "gourmand"],
        instructions: [
            "Faites fondre le chocolat au bain-marie.",
            "Séparez les blancs des jaunes d'oeufs.",
            "Ajoutez les jaunes au chocolat fondu.",
            "Montez les blancs en neige et incorporez-les délicatement."
        ],
        emoji: "🍫"
    },
    {
        id: 11,
        titre: "Pommes de terre sautées",
        description: "Le plat d'accompagnement par excellence.",
        temps: 25,
        difficulte: "Facile",
        ingredients: [
            { nom: "pommes de terre", obligatoire: true },
            { nom: "huile", obligatoire: true },
            { nom: "ail", obligatoire: false },
            { nom: "persil", obligatoire: false }
        ],
        ustensiles: ["poêle", "couteau"],
        tags: ["végétarien", "budget"],
        instructions: [
            "Coupez les pommes de terre en dés.",
            "Faites-les dorer dans l'huile chaude.",
            "Laissez cuire à feu moyen pendant 20 minutes.",
            "Ajoutez l'ail et le persil en fin de cuisson."
        ],
        emoji: "🥔"
    },
    {
        id: 12,
        titre: "Quiche sans pâte",
        description: "Plus légère et très rapide à faire.",
        temps: 40,
        difficulte: "Facile",
        ingredients: [
            { nom: "oeufs", obligatoire: true },
            { nom: "lait", obligatoire: true },
            { nom: "farine", obligatoire: true },
            { nom: "fromage râpé", obligatoire: true },
            { nom: "jambon", obligatoire: false },
            { nom: "kub'or", obligatoire: false }
        ],
        ustensiles: ["moule à tarte", "bol", "four"],
        tags: ["familial", "pratique"],
        instructions: [
            "Préchauffez le four à 180°C.",
            "Mélangez les oeufs, le lait et la farine.",
            "Ajoutez le fromage et la garniture choisie.",
            "Versez dans le moule et cuisez 35 minutes."
        ],
        emoji: "🥧"
    },
    {
        id: 13,
        titre: "Croûtons maison au Kub'Or",
        description: "Pour pimper vos soupes et salades.",
        temps: 10,
        difficulte: "Très facile",
        ingredients: [
            { nom: "pain dur", obligatoire: true },
            { nom: "kub'or", obligatoire: true },
            { nom: "huile", obligatoire: true }
        ],
        ustensiles: ["poêle"],
        tags: ["anti-gaspi", "rapide"],
        instructions: [
            "Coupez le pain dur en petits dés.",
            "Faites chauffer l'huile dans une poêle.",
            "Émiettez le Kub'Or dans l'huile.",
            "Faites dorer les dés de pain jusqu'à ce qu'ils soient croustillants."
        ],
        emoji: "🥖"
    },
    {
        id: 14,
        titre: "Crêpes classiques",
        description: "Le goûter qui met tout le monde d'accord.",
        temps: 30,
        difficulte: "Facile",
        ingredients: [
            { nom: "farine", obligatoire: true },
            { nom: "oeufs", obligatoire: true },
            { nom: "lait", obligatoire: true },
            { nom: "sucre", obligatoire: false },
            { nom: "beurre", obligatoire: false }
        ],
        ustensiles: ["saladier", "poêle"],
        tags: ["sucré", "enfantin", "familial"],
        instructions: [
            "Mélangez la farine, les oeufs et le sucre.",
            "Versez le lait progressivement pour éviter les grumeaux.",
            "Laissez reposer si possible, sinon cuisez directement.",
            "Faites sauter les crêpes dans une poêle beurrée."
        ],
        emoji: "🥞"
    },
    {
        id: 15,
        titre: "Tian de légumes d'été",
        description: "Un plat provençal coloré et sain.",
        temps: 60,
        difficulte: "Facile",
        ingredients: [
            { nom: "courgettes", obligatoire: true },
            { nom: "tomates", obligatoire: true },
            { nom: "aubergines", obligatoire: true },
            { nom: "huile d'olive", obligatoire: true },
            { nom: "herbes de provence", obligatoire: false }
        ],
        ustensiles: ["plat à four", "couteau", "four"],
        tags: ["végétarien", "santé"],
        instructions: [
            "Coupez tous les légumes en rondelles fines.",
            "Rangez-les verticalement dans le plat en alternant.",
            "Arrosez d'huile d'olive et parsemez d'herbes.",
            "Enfournez pour 45 minutes à 180°C."
        ],
        emoji: "🥗"
    },
    {
        id: 16,
        titre: "Gâteau au yaourt",
        description: "Le premier gâteau que l'on apprend aux enfants.",
        temps: 50,
        difficulte: "Très facile",
        ingredients: [
            { nom: "yaourt", obligatoire: true },
            { nom: "farine", obligatoire: true },
            { nom: "sucre", obligatoire: true },
            { nom: "oeufs", obligatoire: true },
            { nom: "huile", obligatoire: true },
            { nom: "levure", obligatoire: true }
        ],
        ustensiles: ["saladier", "moule à gâteau", "four"],
        tags: ["sucré", "enfantin", "familial"],
        instructions: [
            "Videz le yaourt dans un saladier (le pot servira de mesure).",
            "Ajoutez le sucre, les oeufs et mélangez.",
            "Ajoutez la farine, la levure et l'huile.",
            "Faites cuire 35 minutes à 180°C."
        ],
        emoji: "🍰"
    },
    {
        id: 17,
        titre: "Ratatouille fondante",
        description: "Prend du temps mais qu'est-ce que c'est bon !",
        temps: 90,
        difficulte: "Moyen",
        ingredients: [
            { nom: "aubergines", obligatoire: true },
            { nom: "courgettes", obligatoire: true },
            { nom: "poivrons", obligatoire: true },
            { nom: "tomates", obligatoire: true },
            { nom: "oignons", obligatoire: true },
            { nom: "ail", obligatoire: true }
        ],
        ustensiles: ["cocotte", "couteau"],
        tags: ["végétarien", "classique"],
        instructions: [
            "Coupez tous les légumes en dés.",
            "Faites-les revenir séparément dans l'huile d'olive.",
            "Réunissez tout dans la cocotte.",
            "Laissez mijoter à feu doux pendant au moins 1 heure."
        ],
        emoji: "🥘"
    },
    {
        id: 18,
        titre: "Salade César simplifiée",
        description: "Fraîche, croquante et rassasiante.",
        temps: 15,
        difficulte: "Facile",
        ingredients: [
            { nom: "salade", obligatoire: true },
            { nom: "poulet", obligatoire: true },
            { nom: "pain dur", obligatoire: true },
            { nom: "parmesan", obligatoire: true },
            { nom: "mayonnaise", obligatoire: false }
        ],
        ustensiles: ["saladier", "poêle"],
        tags: ["frais", "complet"],
        instructions: [
            "Faites dorer le poulet et les croûtons de pain.",
            "Déchirez la salade dans un grand bol.",
            "Ajoutez le poulet, les croûtons et le parmesan.",
            "Assaisonnez avec une sauce à base de mayo et d'un peu d'eau."
        ],
        emoji: "🥗"
    },
    {
        id: 19,
        titre: "Pâtes au thon express",
        description: "Le placard sauveur de soirée.",
        temps: 15,
        difficulte: "Facile",
        ingredients: [
            { nom: "pâtes", obligatoire: true },
            { nom: "thon en conserve", obligatoire: true },
            { nom: "tomates concassées", obligatoire: true },
            { nom: "oignons", obligatoire: false }
        ],
        ustensiles: ["casserole", "poêle"],
        tags: ["budget", "rapide"],
        instructions: [
            "Lancez la cuisson des pâtes.",
            "Faites revenir l'oignon, ajoutez la tomate et le thon.",
            "Laissez mijoter le temps que les pâtes cuisent.",
            "Mélangez le tout et servez."
        ],
        emoji: "🍝"
    },
    {
        id: 20,
        titre: "Bananes flambées",
        description: "Un dessert spectaculaire en 5 minutes.",
        temps: 5,
        difficulte: "Moyen",
        ingredients: [
            { nom: "bananes", obligatoire: true },
            { nom: "beurre", obligatoire: true },
            { nom: "sucre", obligatoire: true },
            { nom: "rhum", obligatoire: true }
        ],
        ustensiles: ["poêle"],
        tags: ["sucré", "spectacle"],
        instructions: [
            "Coupez les bananes en deux dans le sens de la longueur.",
            "Faites-les dorer dans la poêle avec beurre et sucre.",
            "Versez le rhum et faites flamber avec précaution.",
            "Dégustez immédiatement."
        ],
        emoji: "🍌"
    },
    {
        id: 21,
        titre: "Soupe à l'oignon",
        description: "Un grand classique rustique et réconfortant.",
        temps: 45,
        difficulte: "Moyen",
        ingredients: [
            { nom: "oignons", obligatoire: true },
            { nom: "beurre", obligatoire: true },
            { nom: "farine", obligatoire: true },
            { nom: "kub'or", obligatoire: true },
            { nom: "pain dur", obligatoire: true },
            { nom: "fromage râpé", obligatoire: true }
        ],
        ustensiles: ["marmite", "four"],
        tags: ["classique", "budget"],
        instructions: [
            "Émincez les oignons et faites-les caraméliser dans le beurre.",
            "Ajoutez la farine, mélangez, puis versez l'eau avec le Kub'Or.",
            "Laissez mijoter 30 minutes.",
            "Versez dans des bols, ajoutez le pain et le fromage, puis faites gratiner au four."
        ],
        emoji: "🍲"
    },
    {
        id: 22,
        titre: "Lentilles saucisses",
        description: "Le plat familial par excellence, complet et équilibré.",
        temps: 40,
        difficulte: "Facile",
        ingredients: [
            { nom: "lentilles", obligatoire: true },
            { nom: "saucisses", obligatoire: true },
            { nom: "carottes", obligatoire: true },
            { nom: "oignons", obligatoire: false },
            { nom: "lardons", obligatoire: false }
        ],
        ustensiles: ["cocotte"],
        tags: ["familial", "complet"],
        instructions: [
            "Faites revenir l'oignon et les lardons.",
            "Ajoutez les carottes en rondelles et les lentilles.",
            "Couvrez d'eau froide (3 fois le volume des lentilles).",
            "Ajoutez les saucisses et laissez cuire 30-35 minutes."
        ],
        emoji: "🥘"
    },
    {
        id: 23,
        titre: "Gratin dauphinois",
        description: "Des pommes de terre, de la crème... la perfection.",
        temps: 75,
        difficulte: "Moyen",
        ingredients: [
            { nom: "pommes de terre", obligatoire: true },
            { nom: "crème fraîche", obligatoire: true },
            { nom: "ail", obligatoire: true },
            { nom: "beurre", obligatoire: true },
            { nom: "noix de muscade", obligatoire: false }
        ],
        ustensiles: ["plat à four", "four"],
        tags: ["classique", "végétarien"],
        instructions: [
            "Épluchez et coupez les pommes de terre en rondelles fines.",
            "Frottez le plat avec de l'ail et beurrez-le.",
            "Disposez les pommes de terre, salez, poivrez et versez la crème.",
            "Faites cuire 1h15 à 150°C."
        ],
        emoji: "🥔"
    },
    {
        id: 24,
        titre: "Salade de tomates mozza",
        description: "L'été dans votre assiette.",
        temps: 10,
        difficulte: "Très facile",
        ingredients: [
            { nom: "tomates", obligatoire: true },
            { nom: "mozzarella", obligatoire: true },
            { nom: "basilic", obligatoire: false },
            { nom: "huile d'olive", obligatoire: true }
        ],
        ustensiles: ["assiette"],
        tags: ["frais", "végétarien", "rapide"],
        instructions: [
            "Coupez les tomates et la mozza en rondelles.",
            "Alternez-les dans l'assiette.",
            "Arrosez d'huile d'olive et ajoutez le basilic."
        ],
        emoji: "🥗"
    },
    {
        id: 25,
        titre: "Hachis parmentier",
        description: "Le meilleur moyen de recycler un reste de viande.",
        temps: 45,
        difficulte: "Facile",
        ingredients: [
            { nom: "pommes de terre", obligatoire: true },
            { nom: "viande hachée", obligatoire: true },
            { nom: "lait", obligatoire: true },
            { nom: "beurre", obligatoire: true },
            { nom: "fromage râpé", obligatoire: false }
        ],
        ustensiles: ["plat à four", "presse-purée", "four"],
        tags: ["familial", "anti-gaspi"],
        instructions: [
            "Faites une purée avec les pommes de terre, le lait et le beurre.",
            "Faites revenir la viande hachée.",
            "Dans un plat, mettez la viande puis la purée par-dessus.",
            "Saupoudrez de fromage et faites gratiner 15 minutes."
        ],
        emoji: "🥧"
    },
    {
        id: 26,
        titre: "Oeufs à la coque",
        description: "Simple, efficace et ludique pour les enfants.",
        temps: 5,
        difficulte: "Très facile",
        ingredients: [
            { nom: "oeufs", obligatoire: true },
            { nom: "pain", obligatoire: true },
            { nom: "beurre", obligatoire: true }
        ],
        ustensiles: ["casserole"],
        tags: ["rapide", "enfantin"],
        instructions: [
            "Faites bouillir de l'eau.",
            "Plongez les oeufs délicatement et comptez exactement 3 minutes.",
            "Pendant ce temps, préparez des 'mouillettes' de pain beurré.",
            "Servez immédiatement."
        ],
        emoji: "🥚"
    },
    {
        id: 27,
        titre: "Risotto aux champignons",
        description: "Un plat crémeux et élégant.",
        temps: 35,
        difficulte: "Moyen",
        ingredients: [
            { nom: "riz", obligatoire: true },
            { nom: "champignons", obligatoire: true },
            { nom: "oignons", obligatoire: true },
            { nom: "kub'or", obligatoire: true },
            { nom: "parmesan", obligatoire: true }
        ],
        ustensiles: ["sautoir"],
        tags: ["végétarien", "gourmand"],
        instructions: [
            "Faites revenir l'oignon et les champignons.",
            "Ajoutez le riz et faites-le nacrer.",
            "Ajoutez le bouillon louche après louche en remuant souvent.",
            "À la fin, ajoutez le parmesan pour la crémosité."
        ],
        emoji: "🍄"
    },
    {
        id: 28,
        titre: "Pommes au four",
        description: "Le dessert de grand-mère tout simple.",
        temps: 35,
        difficulte: "Facile",
        ingredients: [
            { nom: "pommes", obligatoire: true },
            { nom: "sucre", obligatoire: true },
            { nom: "beurre", obligatoire: true },
            { nom: "cannelle", obligatoire: false }
        ],
        ustensiles: ["plat à four", "four"],
        tags: ["sucré", "santé"],
        instructions: [
            "Évidez le centre des pommes sans les percer.",
            "Mettez une noisette de beurre et un peu de sucre au centre.",
            "Placez dans un plat avec un fond d'eau.",
            "Faites cuire 30 minutes à 180°C."
        ],
        emoji: "🍎"
    },
    {
        id: 29,
        titre: "Cordon bleu maison",
        description: "Bien meilleur que ceux du commerce !",
        temps: 20,
        difficulte: "Facile",
        ingredients: [
            { nom: "poulet", obligatoire: true },
            { nom: "jambon", obligatoire: true },
            { nom: "fromage", obligatoire: true },
            { nom: "farine", obligatoire: true },
            { nom: "oeufs", obligatoire: true },
            { nom: "chapelure", obligatoire: true }
        ],
        ustensiles: ["poêle", "assiettes"],
        tags: ["enfantin", "gourmand"],
        instructions: [
            "Aplatissez les filets de poulet.",
            "Posez une tranche de jambon et de fromage, puis pliez en deux.",
            "Passez successivement dans la farine, l'oeuf battu puis la chapelure.",
            "Faites dorer à la poêle 5-6 minutes par face."
        ],
        emoji: "🍗"
    },
    {
        id: 30,
        titre: "Gnocchis à la poêle",
        description: "Croustillants à l'extérieur, fondants à l'intérieur.",
        temps: 10,
        difficulte: "Très facile",
        ingredients: [
            { nom: "gnocchis", obligatoire: true },
            { nom: "beurre", obligatoire: true },
            { nom: "sauge", obligatoire: false },
            { nom: "parmesan", obligatoire: false }
        ],
        ustensiles: ["poêle"],
        tags: ["rapide", "végétarien"],
        instructions: [
            "Faites chauffer le beurre dans une poêle.",
            "Ajoutez les gnocchis sans les faire bouillir avant.",
            "Faites dorer 5-8 minutes en remuant.",
            "Ajoutez le parmesan au moment de servir."
        ],
        emoji: "🥟"
    },
    {
        id: 31,
        titre: "Velouté de courgettes au Kiri",
        description: "La soupe que tous les enfants adorent.",
        temps: 25,
        difficulte: "Très facile",
        ingredients: [
            { nom: "courgettes", obligatoire: true },
            { nom: "kub'or", obligatoire: true },
            { nom: "fromage en portions", obligatoire: true }
        ],
        ustensiles: ["casserole", "mixeur plongeant"],
        tags: ["enfantin", "végétarien"],
        instructions: [
            "Coupez les courgettes en gros dés.",
            "Faites-les bouillir dans l'eau avec le Kub'Or pendant 20 minutes.",
            "Ajoutez les portions de fromage.",
            "Mixez longuement jusqu'à obtenir un velouté parfait."
        ],
        emoji: "🥣"
    },
    {
        id: 32,
        titre: "Tarte aux pommes",
        description: "Le classique indémodable du dimanche.",
        temps: 45,
        difficulte: "Moyen",
        ingredients: [
            { nom: "pâte feuilletée", obligatoire: true },
            { nom: "pommes", obligatoire: true },
            { nom: "sucre", obligatoire: true },
            { nom: "beurre", obligatoire: false }
        ],
        ustensiles: ["moule à tarte", "four"],
        tags: ["sucré", "familial"],
        instructions: [
            "Étalez la pâte dans le moule.",
            "Coupez les pommes en fines lamelles.",
            "Disposez-les en rosace sur la pâte.",
            "Saupoudrez de sucre et cuisez 30 minutes à 200°C."
        ],
        emoji: "🥧"
    },
    {
        id: 33,
        titre: "Taboulé express",
        description: "Frais et sans cuisson !",
        temps: 15,
        difficulte: "Très facile",
        ingredients: [
            { nom: "semoule", obligatoire: true },
            { nom: "tomates", obligatoire: true },
            { nom: "concombre", obligatoire: true },
            { nom: "citron", obligatoire: true },
            { nom: "huile d'olive", obligatoire: true },
            { nom: "menthe", obligatoire: false }
        ],
        ustensiles: ["saladier"],
        tags: ["frais", "végétarien"],
        instructions: [
            "Mettez la semoule sèche dans un saladier.",
            "Ajoutez les légumes coupés en tout petits dés.",
            "Versez le jus de citron, l'huile et mélangez.",
            "Laissez reposer au frais le temps que la semoule absorbe le jus."
        ],
        emoji: "🥗"
    },
    {
        id: 34,
        titre: "Boulettes de viande",
        description: "Gourmandes et faciles à préparer.",
        temps: 25,
        difficulte: "Facile",
        ingredients: [
            { nom: "viande hachée", obligatoire: true },
            { nom: "oeufs", obligatoire: true },
            { nom: "pain hard", obligatoire: false },
            { nom: "ail", obligatoire: false },
            { nom: "persil", obligatoire: false }
        ],
        ustensiles: ["poêle", "saladier"],
        tags: ["familial", "gourmand"],
        instructions: [
            "Mélangez la viande, l'oeuf et le pain trempé dans du lait.",
            "Formez des petites boules entre vos mains.",
            "Faites-les dorer à la poêle pendant 10-12 minutes.",
            "Servez avec une sauce tomate ou des pâtes."
        ],
        emoji: "🧆"
    },
    {
        id: 35,
        titre: "Frittata aux légumes",
        description: "L'omelette épaisse à l'italienne.",
        temps: 20,
        difficulte: "Facile",
        ingredients: [
            { nom: "oeufs", obligatoire: true },
            { nom: "pommes de terre", obligatoire: false },
            { nom: "courgettes", obligatoire: false },
            { nom: "oignons", obligatoire: true },
            { nom: "parmesan", obligatoire: true }
        ],
        ustensiles: ["poêle"],
        tags: ["végétarien", "économique"],
        instructions: [
            "Faites revenir les oignons et les légumes coupés fins.",
            "Battez les oeufs avec le parmesan.",
            "Versez sur les légumes et laissez cuire à feu doux.",
            "Retournez la frittata à mi-cuisson si possible."
        ],
        emoji: "🍳"
    },
    {
        id: 36,
        titre: "Gaspacho maison",
        description: "La soupe froide espagnole pour les chaudes journées.",
        temps: 15,
        difficulte: "Facile",
        ingredients: [
            { nom: "tomates", obligatoire: true },
            { nom: "poivrons", obligatoire: true },
            { nom: "concombre", obligatoire: true },
            { nom: "ail", obligatoire: true },
            { nom: "huile d'olive", obligatoire: true },
            { nom: "pain dur", obligatoire: false }
        ],
        ustensiles: ["mixeur"],
        tags: ["frais", "végétarien"],
        instructions: [
            "Lavez et coupez grossièrement tous les légumes.",
            "Mettez tout dans le mixeur avec le pain, l'huile et l'ail.",
            "Mixez jusqu'à obtenir une texture lisse.",
            "Servez très frais."
        ],
        emoji: "🍅"
    },
    {
        id: 37,
        titre: "Cake jambon olives",
        description: "L'indispensable de l'apéro ou du pique-nique.",
        temps: 60,
        difficulte: "Facile",
        ingredients: [
            { nom: "farine", obligatoire: true },
            { nom: "oeufs", obligatoire: true },
            { nom: "lait", obligatoire: true },
            { nom: "jambon", obligatoire: true },
            { nom: "olives", obligatoire: true },
            { nom: "fromage râpé", obligatoire: true }
        ],
        ustensiles: ["moule à cake", "bol", "four"],
        tags: ["pratique", "familial"],
        instructions: [
            "Mélangez farine, oeufs, huile et lait.",
            "Ajoutez le jambon, les olives et le fromage.",
            "Versez dans le moule.",
            "Faites cuire 45 minutes à 180°C."
        ],
        emoji: "🍞"
    },
    {
        id: 38,
        titre: "Salade de riz complète",
        description: "Parfaite pour utiliser un reste de riz.",
        temps: 10,
        difficulte: "Très facile",
        ingredients: [
            { nom: "riz", obligatoire: true },
            { nom: "thon en conserve", obligatoire: true },
            { nom: "tomates", obligatoire: true },
            { nom: "oeufs", obligatoire: false },
            { nom: "maïs", obligatoire: false }
        ],
        ustensiles: ["saladier"],
        tags: ["anti-gaspi", "santé"],
        instructions: [
            "Mélangez le riz cuit froid avec le thon émietté.",
            "Ajoutez les tomates en dés et les autres ingrédients dispo.",
            "Préparez une petite vinaigrette au citron.",
            "Mélangez tout et servez."
        ],
        emoji: "🍚"
    },
    {
        id: 39,
        titre: "Poêlée de légumes express",
        description: "Le vide-frigo sain et rapide.",
        temps: 20,
        difficulte: "Facile",
        ingredients: [
            { nom: "carottes", obligatoire: false },
            { nom: "courgettes", obligatoire: false },
            { nom: "oignons", obligatoire: true },
            { nom: "kub'or", obligatoire: true },
            { nom: "huile", obligatoire: true }
        ],
        ustensiles: ["poêle"],
        tags: ["végétarien", "budget"],
        instructions: [
            "Coupez tous les légumes en petits morceaux.",
            "Faites-les revenir dans l'huile.",
            "Ajoutez un Kub'Or émietté pour le goût.",
            "Laissez cuire à feu moyen 15 minutes."
        ],
        emoji: "🥘"
    },
    {
        id: 40,
        titre: "Compote de pommes maison",
        description: "Le dessert doux et naturel.",
        temps: 25,
        difficulte: "Très facile",
        ingredients: [
            { nom: "pommes", obligatoire: true },
            { nom: "sucre", obligatoire: false },
            { nom: "eau", obligatoire: true },
            { nom: "cannelle", obligatoire: false }
        ],
        ustensiles: ["casserole"],
        tags: ["sucré", "santé"],
        instructions: [
            "Épluchez et coupez les pommes en morceaux.",
            "Mettez-les dans la casserole avec un fond d'eau.",
            "Laissez mijoter 20 minutes à feu doux.",
            "Écrasez à la fourchette ou mixez selon la préférence."
        ],
        emoji: "🍎"
    },
    {
        id: 41,
        titre: "Omelette norvégienne",
        description: "Un dessert glacé et flambé pour les grandes occasions.",
        temps: 40,
        difficulte: "Difficile",
        ingredients: [
            { nom: "oeufs", obligatoire: true },
            { nom: "glace vanille", obligatoire: true },
            { nom: "génoise", obligatoire: true },
            { nom: "sucre", obligatoire: true },
            { nom: "rhum", obligatoire: false }
        ],
        ustensiles: ["batteur électrique", "four", "plat"],
        tags: ["sucré", "fête"],
        instructions: [
            "Posez la glace sur la génoise.",
            "Recouvrez entièrement de meringue (blancs d'oeufs battus avec sucre).",
            "Passez au four très chaud 5 minutes pour dorer la meringue.",
            "Flambez au rhum juste avant de servir."
        ],
        emoji: "🍦"
    },
    {
        id: 42,
        titre: "Salade de fruits frais",
        description: "Le plein de vitamines et de fraîcheur.",
        temps: 15,
        difficulte: "Très facile",
        ingredients: [
            { nom: "pommes", obligatoire: false },
            { nom: "bananes", obligatoire: false },
            { nom: "oranges", obligatoire: false },
            { nom: "citron", obligatoire: true },
            { nom: "sucre", obligatoire: false }
        ],
        ustensiles: ["saladier", "couteau"],
        tags: ["sucré", "santé", "frais"],
        instructions: [
            "Pelez et coupez tous les fruits en morceaux.",
            "Mélangez dans un saladier.",
            "Arrosez de jus de citron pour éviter que les fruits ne noircissent.",
            "Laissez reposer au frais 1 heure."
        ],
        emoji: "🥣"
    },
    {
        id: 43,
        titre: "Pain de viande",
        description: "Une recette économique et nourrissante.",
        temps: 60,
        difficulte: "Facile",
        ingredients: [
            { nom: "viande hachée", obligatoire: true },
            { nom: "oeufs", obligatoire: true },
            { nom: "oignons", obligatoire: true },
            { nom: "pain dur", obligatoire: true },
            { nom: "lait", obligatoire: true }
        ],
        ustensiles: ["moule à cake", "four"],
        tags: ["familial", "budget"],
        instructions: [
            "Faites tremper le pain dur dans le lait.",
            "Mélangez avec la viande, l'oeuf et l'oignon haché.",
            "Tassez dans un moule à cake.",
            "Faites cuire 45 minutes à 180°C."
        ],
        emoji: "🍞"
    },
    {
        id: 44,
        titre: "Tarte à la tomate",
        description: "Simple, colorée et délicieuse pour le dîner.",
        temps: 35,
        difficulte: "Facile",
        ingredients: [
            { nom: "pâte brisée", obligatoire: true },
            { nom: "tomates", obligatoire: true },
            { nom: "moutarde", obligatoire: true },
            { nom: "fromage râpé", obligatoire: true },
            { nom: "herbes de provence", obligatoire: false }
        ],
        ustensiles: ["moule à tarte", "four"],
        tags: ["végétarien", "estival"],
        instructions: [
            "Étalez la pâte et piquez-la avec une fourchette.",
            "Badigeonnez le fond de moutarde.",
            "Disposez les rondelles de tomates.",
            "Saupoudrez de fromage et d'herbes, puis cuisez 25 minutes à 200°C."
        ],
        emoji: "🥧"
    },
    {
        id: 45,
        titre: "Raviolis grillés",
        description: "Donnez une seconde vie à vos raviolis en boîte ou frais.",
        temps: 10,
        difficulte: "Très facile",
        ingredients: [
            { nom: "raviolis", obligatoire: true },
            { nom: "beurre", obligatoire: true },
            { nom: "parmesan", obligatoire: false }
        ],
        ustensiles: ["poêle"],
        tags: ["rapide", "anti-gaspi"],
        instructions: [
            "Faites chauffer le beurre dans une poêle.",
            "Déposez les raviolis égouttés.",
            "Faites griller à feu vif jusqu'à ce qu'ils soient bien dorés.",
            "Servez avec un peu de parmesan."
        ],
        emoji: "🥟"
    },
    {
        id: 46,
        titre: "Smoothie banane chocolat",
        description: "Le goûter énergétique parfait.",
        temps: 5,
        difficulte: "Très facile",
        ingredients: [
            { nom: "bananes", obligatoire: true },
            { nom: "lait", obligatoire: true },
            { nom: "chocolat", obligatoire: true },
            { nom: "sucre", obligatoire: false }
        ],
        ustensiles: ["mixeur"],
        tags: ["sucré", "rapide", "enfantin"],
        instructions: [
            "Mettez la banane coupée et le lait dans le mixeur.",
            "Ajoutez du chocolat en poudre ou fondu.",
            "Mixez 1 minute jusqu'à ce que ce soit bien mousseux.",
            "Servez bien frais."
        ],
        emoji: "🥤"
    },
    {
        id: 47,
        titre: "Galettes de pommes de terre",
        description: " Croustillantes et fondantes.",
        temps: 25,
        difficulte: "Facile",
        ingredients: [
            { nom: "pommes de terre", obligatoire: true },
            { nom: "oeufs", obligatoire: true },
            { nom: "farine", obligatoire: true },
            { nom: "oignons", obligatoire: true },
            { nom: "huile", obligatoire: true }
        ],
        ustensiles: ["râpe", "poêle"],
        tags: ["végétarien", "budget"],
        instructions: [
            "Râpez les pommes de terre et l'oignon.",
            "Pressez pour enlever l'eau.",
            "Mélangez avec l'oeuf et la farine.",
            "Formez des galettes et faites-les dorer à la poêle."
        ],
        emoji: "🥔"
    },
    {
        id: 48,
        titre: "Champignons farcis",
        description: "Une entrée savoureuse avec peu d'ingrédients.",
        temps: 25,
        difficulte: "Facile",
        ingredients: [
            { nom: "champignons", obligatoire: true },
            { nom: "fromage frais", obligatoire: true },
            { nom: "ail", obligatoire: false },
            { nom: "persil", obligatoire: false }
        ],
        ustensiles: ["plat à four", "four"],
        tags: ["végétarien", "entrée"],
        instructions: [
            "Enlevez les pieds des champignons.",
            "Mélangez le fromage frais avec l'ail et le persil.",
            "Remplissez les têtes de champignons avec ce mélange.",
            "Faites cuire 15 minutes à 200°C."
        ],
        emoji: "🍄"
    },
    {
        id: 49,
        titre: "Riz au lait de grand-mère",
        description: "Le dessert doudou par excellence.",
        temps: 45,
        difficulte: "Moyen",
        ingredients: [
            { nom: "riz", obligatoire: true },
            { nom: "lait", obligatoire: true },
            { nom: "sucre", obligatoire: true },
            { nom: "vanille", obligatoire: false }
        ],
        ustensiles: ["casserole"],
        tags: ["sucré", "classique", "enfantin"],
        instructions: [
            "Faites bouillir le lait avec le sucre et la vanille.",
            "Versez le riz et baissez le feu au minimum.",
            "Laissez cuire environ 35-40 minutes en remuant de temps en temps.",
            "Servez tiède ou froid."
        ],
        emoji: "🥣"
    },
    {
        id: 50,
        titre: "Quiche lorraine traditionnelle",
        description: "La vraie, l'unique.",
        temps: 50,
        difficulte: "Moyen",
        ingredients: [
            { nom: "pâte brisée", obligatoire: true },
            { nom: "lardons", obligatoire: true },
            { nom: "oeufs", obligatoire: true },
            { nom: "crème fraîche", obligatoire: true },
            { nom: "noix de muscade", obligatoire: false }
        ],
        ustensiles: ["moule à tarte", "four", "bol"],
        tags: ["classique", "familial"],
        instructions: [
            "Étalez la pâte et faites-la précuire 10 min.",
            "Faites blanchir les lardons.",
            "Mélangez oeufs, crème et muscade.",
            "Versez sur la pâte avec les lardons et cuisez 30 min à 180°C."
        ],
        emoji: "🥧"
    }
];

var commonIngredients = [
    // Légumes & Plantes
    { nom: "ail", emoji: "🧄" },
    { nom: "ail des ours", emoji: "🌿" },
    { nom: "amarante (feuilles)", emoji: "🌿" },
    { nom: "artichaut", emoji: "🥗" },
    { nom: "asperge blanche", emoji: "🥗" },
    { nom: "asperge verte", emoji: "🥗" },
    { nom: "aubergine", emoji: "🍆" },
    { nom: "aubergine blanche", emoji: "🍆" },
    { nom: "baselle", emoji: "🌿" },
    { nom: "betterave rouge", emoji: "🍠" },
    { nom: "betterave chioggia", emoji: "🍠" },
    { nom: "betterave jaune", emoji: "🍠" },
    { nom: "blette (bette à carde)", emoji: "🌿" },
    { nom: "brocoli", emoji: "🥦" },
    { nom: "brocoli à jets", emoji: "🥦" },
    { nom: "butternut (doubeurre)", emoji: "🎃" },
    { nom: "calebasse", emoji: "🥒" },
    { nom: "capucine tubéreuse", emoji: "🍠" },
    { nom: "cardon", emoji: "🌿" },
    { nom: "carotte", emoji: "🥕" },
    { nom: "carotte violette", emoji: "🥕" },
    { nom: "cébette", emoji: "🧅" },
    { nom: "céleri-branche", emoji: "🌿" },
    { nom: "céleri-rave", emoji: "🍠" },
    { nom: "cerfeuil tubéreux", emoji: "🍠" },
    { nom: "chayotte (christophine)", emoji: "🍐" },
    { nom: "chervis", emoji: "🍠" },
    { nom: "chicorée", emoji: "🥬" },
    { nom: "chou blanc", emoji: "🥬" },
    { nom: "chou cabus", emoji: "🥬" },
    { nom: "chou chinois (pak-choï)", emoji: "🥬" },
    { nom: "chou chinois (pétsaï)", emoji: "🥬" },
    { nom: "chou de bruxelles", emoji: "🥦" },
    { nom: "chou de milan", emoji: "🥬" },
    { nom: "chou-fleur", emoji: "🥦" },
    { nom: "chou frisé (kale)", emoji: "🥬" },
    { nom: "chou pointu", emoji: "🥬" },
    { nom: "chou rouge", emoji: "🥬" },
    { nom: "chou romanesco", emoji: "🥦" },
    { nom: "chou-rave", emoji: "🥬" },
    { nom: "ciboule", emoji: "🧅" },
    { nom: "ciboulette", emoji: "🌿" },
    { nom: "citrouille", emoji: "🎃" },
    { nom: "claytone de cuba", emoji: "🌿" },
    { nom: "concombre", emoji: "🥒" },
    { nom: "concombre arménien", emoji: "🥒" },
    { nom: "cornichon", emoji: "🥒" },
    { nom: "courge de nice", emoji: "🎃" },
    { nom: "courge gland", emoji: "🎃" },
    { nom: "courge musquée", emoji: "🎃" },
    { nom: "courge spaghetti", emoji: "🎃" },
    { nom: "courgette", emoji: "🥒" },
    { nom: "courgette jaune", emoji: "🥒" },
    { nom: "cresson", emoji: "🌿" },
    { nom: "crosne", emoji: "🍠" },
    { nom: "échalote", emoji: "🧅" },
    { nom: "échalote grise", emoji: "🧅" },
    { nom: "endive", emoji: "🥬" },
    { nom: "épinard", emoji: "🌿" },
    { nom: "épinard de nouvelle-zélande", emoji: "🌿" },
    { nom: "fenouil", emoji: "🌿" },
    { nom: "fève", emoji: "🫘" },
    { nom: "févettes", emoji: "🫘" },
    { nom: "frisée (salade)", emoji: "🥬" },
    { nom: "gombo", emoji: "🌿" },
    { nom: "haricot beurre", emoji: "🫘" },
    { nom: "haricot coco (frais)", emoji: "🫘" },
    { nom: "haricot kilomètre", emoji: "🫘" },
    { nom: "haricot mungo (pousses de soja)", emoji: "🌿" },
    { nom: "haricot plat", emoji: "🫘" },
    { nom: "haricot vert", emoji: "🫘" },
    { nom: "hélianthi", emoji: "🍠" },
    { nom: "igname", emoji: "🍠" },
    { nom: "laitue batavia", emoji: "🥬" },
    { nom: "laitue feuille de chêne", emoji: "🥬" },
    { nom: "laitue iceberg", emoji: "🥬" },
    { nom: "laitue romaine", emoji: "🥬" },
    { nom: "lentille fraîche", emoji: "🫘" },
    { nom: "luffa", emoji: "🥒" },
    { nom: "mâche", emoji: "🥬" },
    { nom: "maïs doux", emoji: "🌽" },
    { nom: "manioc", emoji: "🍠" },
    { nom: "margose (momordique)", emoji: "🥒" },
    { nom: "mertensia (huître végétale)", emoji: "🌿" },
    { nom: "navet blanc", emoji: "🍠" },
    { nom: "navet boule d'or", emoji: "🍠" },
    { nom: "navet daïkon", emoji: "🍠" },
    { nom: "oca du pérou", emoji: "🍠" },
    { nom: "oignon blanc", emoji: "🧅" },
    { nom: "oignon jaune", emoji: "🧅" },
    { nom: "oignon nouveau", emoji: "🧅" },
    { nom: "oignon rouge", emoji: "🧅" },
    { nom: "panais", emoji: "🍠" },
    { nom: "patate douce", emoji: "🍠" },
    { nom: "pâtisson", emoji: "🎃" },
    { nom: "persil tubéreux", emoji: "🌿" },
    { nom: "petit pois", emoji: "🫛" },
    { nom: "piment de cayenne", emoji: "🌶" },
    { nom: "piment d'espelette", emoji: "🌶" },
    { nom: "piment doux", emoji: "🫑" },
    { nom: "piment habanero", emoji: "🌶" },
    { nom: "piment jalapeño", emoji: "🌶" },
    { nom: "piment oiseau", emoji: "🌶" },
    { nom: "pissenlit", emoji: "🌿" },
    { nom: "poire de terre (yacon)", emoji: "🍠" },
    { nom: "poireau", emoji: "🥬" },
    { nom: "poireau d'été", emoji: "🥬" },
    { nom: "poireau perpétuel", emoji: "🥬" },
    { nom: "pois chiche (frais)", emoji: "🫘" },
    { nom: "pois gourmand (mangetout)", emoji: "🫛" },
    { nom: "poivron jaune", emoji: "🫑" },
    { nom: "poivron rouge", emoji: "🫑" },
    { nom: "poivron vert", emoji: "🫑" },
    { nom: "pomme de terre", emoji: "🥔" },
    { nom: "pomme de terre vitelotte", emoji: "🥔" },
    { nom: "potimarron", emoji: "🎃" },
    { nom: "potiron", emoji: "🎃" },
    { nom: "pourpier", emoji: "🌿" },
    { nom: "radicchio", emoji: "🥬" },
    { nom: "radis blanc", emoji: "🍠" },
    { nom: "radis glaçon", emoji: "🍠" },
    { nom: "radis noir", emoji: "🍠" },
    { nom: "radis rose", emoji: "🍠" },
    { nom: "roquette", emoji: "🥬" },
    { nom: "rutabaga", emoji: "🍠" },
    { nom: "salade (laitue classique)", emoji: "🥬" },
    { nom: "salsifis", emoji: "🍠" },
    { nom: "scarole", emoji: "🥬" },
    { nom: "scorsonère", emoji: "🍠" },
    { nom: "taro", emoji: "🍠" },
    { nom: "tétragone", emoji: "🌿" },
    { nom: "tomate cerise", emoji: "🍅" },
    { nom: "tomate cœur de bœuf", emoji: "🍅" },
    { nom: "tomate noire de crimée", emoji: "🍅" },
    { nom: "tomate roma", emoji: "🍅" },
    { nom: "tomate grappe", emoji: "🍅" },
    { nom: "topinambour", emoji: "🍠" },
    { nom: "trévise", emoji: "🥬" },
    { nom: "chou-palmiste (cœur de palmier)", emoji: "🌿" },
    { nom: "pousses de bambou", emoji: "🌿" },
    { nom: "pousses de fougère", emoji: "🌿" },
    { nom: "nopal (raquette de cactus)", emoji: "🌵" },
    { nom: "salicorne", emoji: "🌿" },
    { nom: "algue nori", emoji: "🌿" },
    { nom: "algue wakamé", emoji: "🌿" },
    { nom: "algue kombu", emoji: "🌿" },
    { nom: "algue dulse", emoji: "🌿" },
    { nom: "oignon grelot", emoji: "🧅" },
    { nom: "banane plantain", emoji: "🍌" },

    // Viandes
    { nom: "côte de bœuf", emoji: "🥩" },
    { nom: "entrecôte", emoji: "🥩" },
    { nom: "faux-filet", emoji: "🥩" },
    { nom: "filet de bœuf", emoji: "🥩" },
    { nom: "rumsteck", emoji: "🥩" },
    { nom: "bavette d'aloyau", emoji: "🥩" },
    { nom: "onglet de bœuf", emoji: "🥩" },
    { nom: "hampe de bœuf", emoji: "🥩" },
    { nom: "macreuse", emoji: "🥩" },
    { nom: "paleron de bœuf", emoji: "🥩" },
    { nom: "collier de bœuf", emoji: "🥩" },
    { nom: "plat de côtes de bœuf", emoji: "🥩" },
    { nom: "queue de bœuf", emoji: "🥩" },
    { nom: "langue de bœuf", emoji: "🥩" },
    { nom: "joue de bœuf", emoji: "🥩" },
    { nom: "cœur de bœuf", emoji: "🥩" },
    { nom: "foie de bœuf", emoji: "🥩" },
    { nom: "rognons de bœuf", emoji: "🥩" },
    { nom: "tripes de bœuf", emoji: "🥩" },
    { nom: "os à moelle", emoji: "🦴" },
    { nom: "rosbif", emoji: "🥩" },
    { nom: "escalope de veau", emoji: "🥩" },
    { nom: "côte de veau", emoji: "🥩" },
    { nom: "filet de veau", emoji: "🥩" },
    { nom: "jarret de veau", emoji: "🥩" },
    { nom: "tendron de veau", emoji: "🥩" },
    { nom: "poitrine de veau", emoji: "🥩" },
    { nom: "épaule de veau", emoji: "🥩" },
    { nom: "collier de veau", emoji: "🥩" },
    { nom: "ris de veau", emoji: "🥩" },
    { nom: "tête de veau", emoji: "🥩" },
    { nom: "foie de veau", emoji: "🥩" },
    { nom: "rognons de veau", emoji: "🥩" },
    { nom: "paupiette de veau", emoji: "🥩" },
    { nom: "côte de porc", emoji: "🥩" },
    { nom: "échine de porc", emoji: "🥩" },
    { nom: "filet mignon de porc", emoji: "🥩" },
    { nom: "travers de porc (ribs)", emoji: "🥩" },
    { nom: "poitrine de porc", emoji: "🥩" },
    { nom: "épaule de porc", emoji: "🥩" },
    { nom: "rouelle de porc", emoji: "🥩" },
    { nom: "jarret de porc", emoji: "🥩" },
    { nom: "pied de porc", emoji: "🥩" },
    { nom: "lard fumé", emoji: "🥓" },
    { nom: "lardons", emoji: "🥓" },
    { nom: "gigot d'agneau", emoji: "🍗" },
    { nom: "souris d'agneau", emoji: "🍗" },
    { nom: "épaule d'agneau", emoji: "🍗" },
    { nom: "côtelette d'agneau", emoji: "🍗" },
    { nom: "cuisse de poulet", emoji: "🍗" },
    { nom: "blanc de poulet", emoji: "🍗" },
    { nom: "filet de poulet", emoji: "🍗" },
    { nom: "pilon de poulet", emoji: "🍗" },
    { nom: "aile de poulet", emoji: "🍗" },
    { nom: "foie de poulet", emoji: "🍗" },
    { nom: "cuisse de dinde", emoji: "🍗" },
    { nom: "blanc de dinde", emoji: "🍗" },
    { nom: "escalope de dinde", emoji: "🍗" },
    { nom: "magret de canard", emoji: "🍗" },
    { nom: "cuisse de canard", emoji: "🍗" },
    { nom: "foie gras", emoji: "🦆" },
    { nom: "lapin", emoji: "🐇" },
    { nom: "sanglier", emoji: "🐗" },
    { nom: "chevreuil", emoji: "🦌" },
    { nom: "biche", emoji: "🦌" },
    { nom: "autruche", emoji: "🥩" },
    { nom: "cheval", emoji: "🥩" },
    { nom: "grenouille", emoji: "🐸" },
    { nom: "caille", emoji: "🍗" },
    { nom: "pigeon", emoji: "🍗" },
    { nom: "chair à saucisse", emoji: "🥩" },
    { nom: "saucisse de toulouse", emoji: "🌭" },
    { nom: "chipolata", emoji: "🌭" },
    { nom: "merguez", emoji: "🌭" },
    { nom: "andouillette", emoji: "🌭" },
    { nom: "boudin noir", emoji: "🌭" },
    { nom: "boudin blanc", emoji: "🌭" },
    { nom: "jambon blanc", emoji: "🥓" },
    { nom: "jambon cru", emoji: "🥓" },
    { nom: "chorizo", emoji: "🍕" },
    { nom: "saucisson sec", emoji: "🥓" },
    { nom: "steak haché", emoji: "🥩" },
    { nom: "saucisse de francfort", emoji: "🌭" },

    // Fruits
    { nom: "pomme", emoji: "🍎" },
    { nom: "pomme granny smith", emoji: "🍏" },
    { nom: "pomme golden", emoji: "🍎" },
    { nom: "poire", emoji: "🍐" },
    { nom: "pêche", emoji: "🍑" },
    { nom: "nectarine", emoji: "🍑" },
    { nom: "abricot", emoji: "🍑" },
    { nom: "prune", emoji: "🫐" },
    { nom: "reine-claude", emoji: "🫐" },
    { nom: "mirabelle", emoji: "🫐" },
    { nom: "cerise", emoji: "🍒" },
    { nom: "fraise", emoji: "🍓" },
    { nom: "framboise", emoji: "🍓" },
    { nom: "mûre", emoji: "🫐" },
    { nom: "myrtille", emoji: "🫐" },
    { nom: "cassis", emoji: "🫐" },
    { nom: "groseille", emoji: "🫐" },
    { nom: "airelle", emoji: "🫐" },
    { nom: "orange", emoji: "🍊" },
    { nom: "citron jaune", emoji: "🍋" },
    { nom: "citron vert (lime)", emoji: "🍋" },
    { nom: "pamplemousse", emoji: "🍊" },
    { nom: "clémentine", emoji: "🍊" },
    { nom: "kumquat", emoji: "🍊" },
    { nom: "melon", emoji: "🍈" },
    { nom: "pastèque", emoji: "🍉" },
    { nom: "raisin", emoji: "🍇" },
    { nom: "figue", emoji: "🫐" },
    { nom: "banane", emoji: "🍌" },
    { nom: "ananas", emoji: "🍍" },
    { nom: "mangue", emoji: "🥭" },
    { nom: "papaye", emoji: "🥭" },
    { nom: "noix de coco", emoji: "🥥" },
    { nom: "kiwi", emoji: "🥝" },
    { nom: "fruit de la passion", emoji: "🫐" },
    { nom: "grenade", emoji: "🍎" },
    { nom: "litchi", emoji: "🫐" },
    { nom: "carambole", emoji: "⭐" },
    { nom: "kaki", emoji: "🍅" },
    { nom: "pitaya (fruit du dragon)", emoji: "🌵" },
    { nom: "datte", emoji: "🫐" },
    { nom: "noix", emoji: "🥥" },
    { nom: "noisette", emoji: "🌰" },
    { nom: "amande", emoji: "🌰" },
    { nom: "pistache", emoji: "🌰" },
    { nom: "châtaigne", emoji: "🌰" },

    // Ingrédients de base déjà présents
    { nom: "pâtes", emoji: "🍝" },
    { nom: "riz", emoji: "🍚" },
    { nom: "oeufs", emoji: "🥚" },
    { nom: "sucre", emoji: "🍚" },
    { nom: "farine", emoji: "🌾" },
    { nom: "lait", emoji: "🥛" },
    { nom: "beurre", emoji: "🧈" },
    { nom: "fromage", emoji: "🧀" },
    { nom: "chocolat", emoji: "🍫" },
    { nom: "sauce soja", emoji: "🍶" },
    { nom: "kub'or", emoji: "🧊" }
];

// On exporte pour pouvoir l'utiliser ailleurs
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { recipes, commonIngredients };
} else {
    window.recipes = recipes;
    window.commonIngredients = commonIngredients;
}
