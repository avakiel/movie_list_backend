const fs = require('fs');
const { Movie } = require('../models/movie')

const moviesData = require('./seeders/db.json');

async function seedDatabase() {
  try {
    for (const movieData of moviesData) {
      await Movie.create({
        title: movieData.title,
        description: movieData.description,
        rating: movieData.rating,
        release_date: movieData.release_date,
        genre: movieData.genre,
        actors: movieData.actors,
        director: movieData.director,
        image: movieData.image,
      });
    }
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();