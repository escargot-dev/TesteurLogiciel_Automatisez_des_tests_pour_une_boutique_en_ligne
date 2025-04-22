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

Bien que la campagne de test ait permis de detecter des bugs critiques et dautomatiser deux
scenarios cles (connexion et panier), elle nest pas encore exhaustive. Des zones sensibles comme
lAPI ou le systeme de stock meriteraient une couverture plus large.
Il est fortement recommande de renforcer la strategie de test, en identifiant les priorites
fonctionnelles et en allouant plus de temps aux tests automatises. Cela garantira une **meilleure
fiabilite du systeme en production**.
---
** Conclusion :**
Cette premiere phase dautomatisation est prometteuse, mais necessite un elargissement pour
securiser davantage lapplication cote API et gestion de stock.
