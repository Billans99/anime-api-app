<<<<<<< HEAD
# anime-api-app
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> efa3844 (Initial commit)

# Instructions

1. npm install (install the node package manager)
2. npm install axios
3. npm run dev (npm run dev in terminal and paste the local host url in a browser)

# Info
Title: ANIME-API-APP

A functional anime app that displays information cards about different anime. More information can be viewed by clicking the 'view' buttons located inside each card. Here you will find more information about that specific anime. The data is fetched from the Jikan Rest api v4 endpoints. Jikan API is an unofficial MyAnimeList API that is free and is rate limited. Due to the rate limiting, some of the data is not loaded correctly and the console will return a 429 error "Too Many Requests". 

This app may contain imagery that is for adult audiences.

# How to use this app:
Scroll up and down to view various animes cards with fetched data by Jikan api v4. 
Each card displays an image, title, score, and view button. 

Clicking the view button displays a modal popup with even more data such as genre, summary, background, and more. Click on a tab heading to view that specific information. 

Click on the 'home' button at the top left of the app to return to the home section of cards which are assorted by the MyAnimeList mal_id. Note: The home page is the first page, you will see when opening the app. 
    // The home page of anime cards will be Safe For Work.

Click on the 'top' button to view animes that are assorted from the highest rated anime out of 10.
    // The Top anime cards will be Safe For Work.

Click the 'recommendations' button to view non-assorted anime recommendations whereby MyAnimeList users endorse two similar animes, and provide a description (typically discussing the similarities).
    // PLEASE BE AWARE: The recommendations section may contain recommendations that are Not Safe For Work.

To view random anime, click on the 'random' button. This page displays a brief summary of a random anime that can give you an idea of what you want to watch next. Click on 'Find Another Random Anime' to view another. 
    // PLEASE BE AWARE: As there are no query parameters for the random anime endpoint, hentai/pornographic rated animes may appear that are not considered Safe For Work.

Use the search bar at the top of the page to find specific anime, and either press enter, or click the search button on the right of the search bar to initiate the search. 
    // The search will be safe for work. 

To load more anime, click the Load More button at the bottom of the page.