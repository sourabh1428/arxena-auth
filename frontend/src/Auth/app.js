import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://beynirbjdoaqmveulgdc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJleW5pcmJqZG9hcW12ZXVsZ2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2MTA2MzQsImV4cCI6MjAxNzE4NjYzNH0.qsIKa6DyJEqWQVfQbQpijlfxEBo8ZOTpROAF7M_lvuY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)