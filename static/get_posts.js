import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient('https://arflavikvucjcuajszcy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyZmxhdmlrdnVjamN1YWpzemN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3Nzc0MDksImV4cCI6MTk5MDM1MzQwOX0.717Uzvx7_W4xMOvN898b3FPh9jR49NmTsn9rvibsRiE')

async function getPosts () {
    let { data: posts, error } = await supabase
        .from('posts')
        .select('*')
}
