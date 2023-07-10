import axios from "axios";

export const client = axios.create({
	baseURL: process.env.MOVIES_API_URL,
	headers: {
		"X-RapidAPI-Key": process.env.MOVIES_API_KEY,
		"X-RapidAPI-Host": process.env.MOVIES_API_HOST
	},
});
