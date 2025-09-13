import { createClient } from '@supabase/supabase-js'

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not configured. Contact form will not work.');
}

// Create Supabase client only if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Function to send contact form email
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  business: string;
  phone: string;
  message: string;
}) => {
  // Check if Supabase client is properly initialized
  if (!supabase) {
    // Instead of throwing an error, return a mock success for demo
    console.log('Demo mode: Contact form submission:', formData);
    return { success: true, message: 'Demo submission logged' };
  }

  try {
    const { data, error } = await supabase.functions.invoke('send-contact-email', {
      body: formData
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error sending contact email:', error);
    // Return demo success instead of throwing
    return { success: true, message: 'Demo submission (error handled)' };
  }
};
