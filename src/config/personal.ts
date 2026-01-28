/**
 * Company Information Configuration
 *
 * This file contains all company information used throughout the landing page.
 * Update these values to change information across the entire site.
 */

export const personalInfo = {
    // Brand/Company
    brandName: "Automata",
    fullName: "Automata",
    tagline: "Automatizacion Inteligente",

    // Contact Information
    email: "contacto@automata.pe",

    // Social Media Links
    socialLinks: {
        github: "https://github.com/automatape2",
        linkedin: "https://www.linkedin.com/company/automata-pe/",
        twitter: "https://x.com/automata_pe"
    },

    // Social Media Usernames (display only)
    socialUsernames: {
        github: "automatape2",
        linkedin: "automata-pe",
        twitter: "@automata_pe"
    }
} as const;

export type PersonalInfo = typeof personalInfo;
