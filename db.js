//
// people test
// 
// export const people = [
//     {
//         id: "0",
//       name: "Cjungwo",
//       age: 21,
//       gender: "male"
//     },
//     {
//         id: "1",
//         name: "Lspace",
//         age: 21,
//         gender: "male"
//     },
//     {
//         id: "2",
//         name: "Ksaelen",
//         age: 21,
//         gender: "female"
//     },
//     {
//         id: "3",
//         name: "Cjungmin",
//         age: 25,
//         gender: "female"
//     },
//     {
//         id: "4",
//         name: "Cjunghyen",
//         age: 17,
//         gender: "male"
//     }
// ];

// export const getById = id => {
//     const filteredPeople = people.filter(person => person.id === String(id));
//     return filteredPeople[0];
// }


// 
// movie test
// 
// let movies = [
//     {
//         id: 0,
//         name: "Star Wars",
//         score: 9

//     },
//     {
//         id: 1,
//         name: "Avengers",
//         score: 8

//     },
//     {
//         id: 2,
//         name: "The Godfather I",
//         score: 99

//     },
//     {
//         id: 3,
//         name: "Logan",
//         score: 7

//     },
// ];

// export const getMovies = () => movies;

// export const getById = id => {
//     const filteredMovies = movies.filter(movie => movie.id === id);
//     return filteredMovies[0];
// };

// export const deleteMovie = id => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id);
//     if(movies.length > cleanedMovies.length){
//         movies = cleanedMovies;
//         return true;
//     } else {
//         return false;
//     }
// };

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: `${movies.length +1}`,
//         name,
//         score
//     };
//     movies.push(newMovie);
//     return newMovie;
// };

// 
// other API test
// 
import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json?";


export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
};