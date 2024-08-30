# Application Frontend HRnet

Bienvenue dans l'application Frontend HRnet. Ce projet permet aux administrateurs de l'entreprise HRNET d'ajouter des informations importantes concernant ses employés et de les afficher dans un tableau de données filtrable. Codé en React et TypeScript, le projet est déployé sur GitHub Pages.

## Table des matières

- [Démo](#démo)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Utilisation](#utilisation)

## Démo

Vous pouvez voir la démo en ligne de l'application Frontend HRnet ici :

[Démo Frontend HRnet](https://aroldmauger.github.io/hrnet-front/)

## Fonctionnalités

- **Formulaire d'ajout d'employé** : Un formulaire qui permet aux utilisateurs de saisir les informations d'un nouvel employé. Le formulaire utilise React-Hook-Form pour la validation et la gestion des données.
- **Données persistantes des employés** : Les informations des employés sont stockées dans Redux, et Redux Persist garantit que les données sont conservées même après un rafraîchissement de la page.
- **Liste des employés** : Un tableau de données qui affiche les employés actuels avec des capacités de tri, de pagination et de recherche. Le tableau de données est propulsé par `react-data-table-component`.
- **Intégration de plugin personnalisé** : Le projet intègre un plugin personnalisé appelé `react-selector-by-ar-mauger`, qui améliore l'interface utilisateur avec des listes déroulantes personnalisées.

## Technologies

Ce projet utilise les technologies suivantes :

- **React** : "^18.3.1"
- **TypeScript** : "^5.2.2"
- **Redux** : "^5.0.1"
- **React-Redux** : "^9.1.2"
- **Redux Persist** : "^6.0.0"
- **React-Hook-Form** : "^7.52.1"
- **React-Data-Table-Component** : "^7.6.2"
- **React Router Dom** : "^6.25.1"
- **Sass** : "^1.77.8"
- **Vite** : "^5.3.4"

## Installation

Pour installer et exécuter le projet localement, suivez ces étapes :

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/aroldmauger/hrnet-front.git


2. Naviguez dans le répertoire du projet :

  ```bash
  cd hrnet-front
  ``` 
3. Installez les dépendances :

  ```bash
  npm install
  ```
## Utilisation

### Développement
Pour démarrer le projet en mode développement, entrez la commande suivante dans votre terminal :

  ```bash
  npm run dev
  ```