import { createClient } from '@supabase/supabase-js'

const URL = 'https://mysctdwxdhcoectflaqz.supabase.co'

const API_KEY = 'sb_publishable_zt8sVO2c7EM-C29PTm3nvA_UA14Rzkr'

export const supabase = createClient(URL, API_KEY)



