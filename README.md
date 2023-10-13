# Pawsitive Adoptions

Pawsitive Adoptions is a full stack web application built with React Vite on the front end, and Node.js Express on the backend. Uses a PetFinder API to connect with adoptable dogs and cats.

## Setup

1. Clone repo.
2. Run npm install on client side and on server side.
3. Create .env file on server side (copy .env.example).
4. Create free account on https://www.petfinder.com/developers/ and obtain API keys to fill in .env file.
5. /server: npm run db:reset
6. /client: npm run dev
7. /server: npm run dev
8. Client runs on http://localhost:8080/
9. Server runs on http://localhost:5173/

## Server Dependencies

- Axios ^1.5.1
- Bcrypt ^5.1.1
- Cookie-Parser ~1.4.4
- Cors ^2.8.5
- Debug ~2.6.9
- Dotenv ^16.3.1
- Express ~4.16.1
- Jsonwebtoken ^9.0.2
- Morgan ~1.9.1
- Pg ^8.11.3
- Nodemon ^3.0.1

## Client Dependencies

- @fortawesome/fontawesome-svg-core ^6.4.2
- @fortawesome/free-brands-svg-icons ^6.4.2
- @fortawesome/react-fontawesome ^0.2.0
- Axios ^1.5.1
- Jwt-decode ^3.1.2
- React ^18.2.0
- React-dom ^18.2.0
- React-router-dom ^6.16.0
- @types/react ^18.2.15
- @types/react-dom ^18.2.7
- @vitejs/plugin-react-swc ^3.3.2
- Eslint ^8.45.0
- Eslint-plugin-react ^7.32.2
- Eslint-plugin-react-hooks ^4.6.0
- Eslint-plugin-react-refresh ^0.4.3
- Sass ^1.68.0
- Vite ^4.4.5

## Functionality

1. Click on photos and open modals, cycle through photos of more than one present.
2. Search for 'cat' or 'dog' in search bar.
3. Click on links to articles on home page.
4. Navigate to pages in footer for 'About Us', 'Contact Us', and 'FAQ'.
5. Click heart on photo to favourite animal.
6. Click on heart in header to navigate to Favourites page.
7. Click Signup button in header, fill in form and create a user (automatically logged in and sent to home page when user created).
8. Logout by pressing logout button in header (automatically sent to home page after logging out).
9. Login by filling in form after hitting Login button in header (automatically logged in and sent to home page when logged in).
10. Click on logo to refresh home page or go back to home page.

## Screenshots

!['Home Page'](https://github.com/curtiskelowna/pawsitive-adoption/blob/main/client/public/images/home-page.png?raw=true)
!['Open Modal'](https://github.com/curtiskelowna/pawsitive-adoption/blob/main/client/public/images/open-modal.png?raw=true)
!['Favorites Page'](https://github.com/curtiskelowna/pawsitive-adoption/blob/main/client/public/images/favorites-page.png?raw=true)
!['Signup Page'](https://github.com/curtiskelowna/pawsitive-adoption/blob/main/client/public/images/sign-up-page.png?raw=true)
!['Login Page'](https://github.com/curtiskelowna/pawsitive-adoption/blob/main/client/public/images/login-page.png?raw=true)