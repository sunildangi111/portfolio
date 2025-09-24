// src/services/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hdgwaosphvawbeiydnki.supabase.co"   // Replace with your Supabase URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkZ3dhb3NwaHZhd2JlaXlkbmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NjcyMjgsImV4cCI6MjA3NDE0MzIyOH0.hc9YeNMEglifTC5Jg734sUU6KJEH18zq2c2QVwaR0rQ"             // Replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
