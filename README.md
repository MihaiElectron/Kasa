# 🏠 Kasa – Application de location immobilière

## 📌 Description
Kasa est une application web de location immobilière développée avec **React** dans le cadre du **Projet 7 de la formation Intégrateur Web d’OpenClassrooms**.

L’objectif est de créer une application moderne, responsive et conforme aux maquettes fournies, en utilisant **React**, **React Router** et des données simulées en **JSON**.

---

## 🎯 Objectifs pédagogiques
- Initialiser une application React avec Vite
- Utiliser **React Router** pour la navigation
- Créer des composants réutilisables
- Gérer des données dynamiques à partir d’un fichier JSON
- Respecter des maquettes Figma
- Implémenter des animations simples (collapse, carousel)
- Gérer les erreurs de navigation (page 404)

---

## 🛠️ Technologies utilisées
- ⚛️ React
- 🚦 React Router DOM
- 🎨 Sass (SCSS)
- ⚡ Vite
- 📦 npm

---

# Installer les dépendances de base
npm install

# Créer un nouveau projet React avec Vite
npm create vite@latest P7_Kasa
# Lors de la sélection :
# - Framework : React
# - Variant : JavaScript

# Installer React Router pour la navigation
npm install react-router-dom

# Installer Sass pour pouvoir utiliser les fichiers .scss
npm install -D sass

## 📂 Structure du projet
```txt
src/
 ├── assets/
 ├── components/
 ├── pages/
 │    ├── Home
 │    ├── About
 │    ├── Housing
 │    └── Error
 ├── data/
 │    └── logements.json
 ├── styles/
 │    ├── base/
 │    ├── components/
 │    ├── pages/
 │    └── main.scss
 ├── App.jsx
 └── main.jsx
