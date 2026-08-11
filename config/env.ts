import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.BASE_URL;

if(!baseURL){
    throw new Error('BASE URL is not defined');
}

export const env = {
    baseURL
};