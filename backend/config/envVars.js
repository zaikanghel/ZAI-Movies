import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
	MONGO_URI: "mongodb+srv://zaikanghel:mSCQZCxuqfIeRJcC@zaimovies.0xwzm.mongodb.net/netflix_db?retryWrites=true&w=majority&appName=ZaiMovies",
	PORT: "5000" || 5000,
	JWT_SECRET: "your_jwt_secret",
	NODE_ENV: "production",
	TMDB_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTNjMjIyZmZkMjg2ZjM1M2FjNTMyOTZkMjc3OWFkMyIsIm5iZiI6MTcyNzM5NzI3NS4zNzE5NjgsInN1YiI6IjY2ZjVmYmVlODU2MzNiZjkyMjk2NGEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HYLZ3bi-o5bZK8gEddd7PU-5UUOyqIMFqV9DawpdB1M",
};
