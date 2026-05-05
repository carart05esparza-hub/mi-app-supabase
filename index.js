import { createClient } from "@supabase/supabase-js";
const supabaseUrl = 'https://ywyhpmyhjcvykqkidtgg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3eWhwbXloamN2eWtxa2lkdGdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5NDQ3ODUsImV4cCI6MjA5MzUyMDc4NX0.dtbELGDMTiI4xhCV0EZ-SnDeuyQOhLT95_68cpJgRgw'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {
    const {data, error} = await supabase
    .from('Estudiantes')
    .select('*')

    if (error) {
        console.log('Error:',error)
    } else {
        console.log('Datos:',data)
    }
    
}

obtenerEstudiantes()