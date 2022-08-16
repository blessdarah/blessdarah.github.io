import { supabase } from '../supabaseClient';

export const useAuth = () => {
    async function signInWithEmail(email, password) {
        try {
            const { user, error } = await supabase.auth.signIn( email, password);
        } catch {

        }
    }
    async function signOut() {
        const { error } = await supabase.auth.signOut()
    }
    return {
        signInWithEmail,
        signOut
    }
}
