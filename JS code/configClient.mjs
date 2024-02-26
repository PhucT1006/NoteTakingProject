// implement API 
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'; 
dotenv.config();

const supabaseUrl = process.env.API_URL
const supabaseKey = process.env.API_KEY
 const supabase = createClient(supabaseUrl, supabaseKey); 
 export default supabase; 
