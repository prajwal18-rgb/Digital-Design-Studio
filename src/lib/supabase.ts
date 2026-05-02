import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hzogtqskgzbtvknrojos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6b2d0cXNrZ3pidHZrbnJvam9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc2MzQ0ODUsImV4cCI6MjA5MzIxMDQ4NX0.V9PHfIYa-7pVyOJwPNY05125YfktCSg4zBN13DZM5ug'

export const supabase = createClient(supabaseUrl, supabaseKey)
