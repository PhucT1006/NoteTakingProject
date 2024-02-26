// implement API 
import { createClient } from '@supabase/supabase-js' // create a client to use supabase 
import dotenv from 'dotenv'; // importing the .env file to access the API URL and KEY 
dotenv.config(); // used to load the env variables (API URL and KEY)


const supabaseUrl = process.env.API_URL
const supabaseKey = process.env.API_KEY

 const supabase = createClient(supabaseUrl, supabaseKey); // creating the client using the URL and KEY 
 export default supabase; //exporting it 
