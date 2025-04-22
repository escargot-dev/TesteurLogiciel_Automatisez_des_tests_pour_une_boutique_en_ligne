README – #  Projet 10 — Tests automatisés avec Cypress

##  Réalisé par  
**Kumkang LE ROUIC — QA Engineer**

##  Description du projet

Ce projet vise à automatiser une série de tests fonctionnels et techniques pour une boutique en ligne, en utilisant le framework Cypress avec JavaScript. L'objectif principal est d'assurer la stabilité de l'application à travers différents scénarios critiques et récurrents, en complément des tests manuels existants.

##  Contexte
Ce projet consiste à :
- Évaluer un plan de tests manuels existant.
- Identifier deux scénarios critiques à automatiser.
- Écrire et exécuter des tests automatisés avec Cypress.
- Tester les API, le fonctionnement général (smoke tests) et des cas fonctionnels précis.
- Documenter le tout dans un dépôt GitHub.

##  Technologies utilisées
- JavaScript
- Cypress
- Node.js / npm
- Git & GitHub

##  Lancer la campagne de test Cypress
    # Installation des dependances  : npm install
    # Lancer l'interface graphique Cypress : npx cypress open
    # Ou executer tous les tests en headless : npx cypress run

---
## Lien GitHub du projet : 
    https://github.com/escargot-dev/TesteurLogiciel_Automatisez_des_tests_pour_une_boutique_en_ligne.git

## Scénarios automatisés sélectionnés (Parmi les scénarios possibles identifiés, deux ont été automatisés) :

    Connexion utilisateur (connextion.cy.js)

    Ajout au panier (panier.cy.js)

## Raisons du choix

  Le budget de temps et de ressources ne permettait pas d’automatiser l'ensemble des cinq scénarios critiques identifiés. Les fonctionnalités évaluées étaient :

    Connexion  / Affichage des produits  / Panier  / Inscription  / Navigation générale

  Deux scénarios ont été priorisés car ils sont à la fois :

    Les plus critiques pour l'expérience utilisateur.
    Les plus susceptibles de générer des erreurs s'ils sont altérés.
    Ils couvrent les étapes clés du parcours client : l'accès à l'espace utilisateur et la finalisation de la commande.

## Confiance et couverture

Néanmoins, il est clair que la campagne de test n'a pas été exhaustive et qu'il subsiste des lacunes dans la couverture des tests. En particulier, il y a des domaines critiques qui n'ont pas été suffisamment testés, notamment l'API du système et les fonctionnalités essentielles comme le panier.

Cette insuffisance de tests dans ces zones clés pourrait avoir des conséquences négatives sur l'expérience utilisateur et la stabilité du système une fois déployé en production. Il est donc crucial d'augmenter la couverture de test dans ces domaines critiques. Cela permettra de minimiser les risques d'échec imprévus et d'assurer un niveau de qualité élevé pour l'ensemble du système.

Pour ce faire, il est recommandé de mettre en place une stratégie de test plus robuste, en identifiant les fonctionnalités essentielles et les scénarios d'utilisation prioritaires, et en allouant suffisamment de ressources et de temps pour les tests dans ces domaines.

En conclusion, bien que la campagne de test ait fourni des informations précieuses, il est impératif de reconnaître les lacunes actuelles et de prendre des mesures concrètes pour renforcer la couverture de test, en particulier sur les aspects cruciaux tels que l'API et les fonctionnalités critiques comme le panier. Cela garantira la fiabilité et la qualité du système lors de son déploiement en production.
