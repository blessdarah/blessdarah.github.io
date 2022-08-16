export const useUtils = () => {
    const slugify = (str) => {
        const slugedVal = str.trim().toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
        return slugedVal;
    }
    return {
        slugify 
    }
}
