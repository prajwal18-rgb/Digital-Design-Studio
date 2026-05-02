import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hzogtqskgzbtvknrojos.supabase.co'
const supabaseKey = 'sb_publishable_aY44_wl0JJmzTqVEhhMnPQ__C8TaIW7'

export const supabase = createClient(supabaseUrl, supabaseKey)
