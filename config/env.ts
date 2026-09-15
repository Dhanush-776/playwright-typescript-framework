import dotenv from 'dotenv';

const environment = process.env.TEST_ENV || 'dev';

dotenv.config({
    path: `.env.${environment}`
});

const baseURL = process.env.BASE_URL;

if(!baseURL){
    throw new Error('BASE URL is not defined');
}

export const env = {
    baseURL,
    environment
};