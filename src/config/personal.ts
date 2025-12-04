/**
 * Personal Information Configuration
 * 
 * This file contains all personal information used throughout the portfolio.
 * Update these values to change your personal information across the entire site.
 */

export const personalInfo = {
    // Brand/Name
    brandName: "Automata",
    fullName: "Jose Anicama",

    // Contact Information
    email: "j.j.anicamatanta@gmail.com",

    // Social Media Links
    socialLinks: {
        github: "https://github.com/automatape2",
        linkedin: "https://www.linkedin.com/in/jjanicamatanta/",
        twitter: "https://x.com/JJAnicamaTanta"
    },

    // Social Media Usernames (display only)
    socialUsernames: {
        github: "automatape2",
        linkedin: "jjanicamatanta",
        twitter: "@JJAnicamaTanta"
    }
} as const;

export type PersonalInfo = typeof personalInfo;
