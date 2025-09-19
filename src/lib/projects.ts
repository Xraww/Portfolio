export type ImageMap = {
    [key: string]: string | string[] | ImageMap | undefined;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    features?: string[];
    demo?: string;
    code?: string;
    stack: string[];
    images?: ImageMap;
    pinned: boolean;
    isInDevelopment: boolean;
}

export const My_Projects = [
    {
        id: "anime-hub",
        name: "Anime Hub",
        description: "Search for anime and manga, with a profile system, a watchlist and more...",
        features: [
            "Search for anime and manga", 
            "Anime & Manga Library with filters", 
            "Media pages with overview, stats, schedule, characters and staff",
            "Watchlist", 
            "Profile card", 
            "Authentication system with email and Google",
            "Games section with quiz and more... (Not implemented yet)",
            "Community section with a forum, fanart gallery and more... (Not implemented yet)",
        ],
        demo: "",
        code: "", // https://github.com/Xraww/AnimeHub
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI", "Framer Motion", "Prisma", "PostgreSQL", "Better-Auth", "Resend", "Zod"],
        images: { // STILL IN DEVELOPMENT SO IT'S NOT DONE
            base_url: "/images/projects/anime-hub/",
            preview: "library/Library-Hero.png",
            library: ["Library-Hero.png", "Library-Search-Results.png"],
            landing: ["Preview.png", "Hero-and-Sidebar.png", "Featured-Medias.png", "Footer.png"],
            profile: ["Card.png", "Watchlist.png", "Signup.png", "Signin.png", "Dashboard.png", "Card-Edit.png"],
            media_overview: ["overview-1.png", "overview-2.png"],
            media_stats: ["stats-1.png", "stats-2.png"],
            media_schedule: ["schedule-1.png", "schedule-2.png"],
            media_characters: ["characters.png"],  
            media_staff: ["staff-production.png", "staff-studios.png", "staff-va.png"],
        },
        pinned: true,
        isInDevelopment: true,
    },
    {
        id: "lol-tracker",
        name: "League of Legends Tracker",
        description: "Search for players, stats and more about League of Legends...",
        features: [
            "Search for players", 
            "Search for items", 
            "Search for champions", 
            "Profile page with overview, match history, most played and masteries", 
            "Champion details page with stats, abilities, lore and more", 
            "Item details page with stats and lore", 
            "Landing page with hero, features, stats and footer", 
            "Leaderboard page with top players", 
        ],
        demo: "",
        code: "https://github.com/Xraww/LolTracker",
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "Riot API"],
        images: { 
            base_url: "/images/projects/lol-tracker/",
            preview: "profile/Profile.png",
            profile: ["Profile.png", "Profile-Overview-All-Sections.png", "Profile-Match-Details.png", "Profile-Most-Played.png", "Profile-Masteries.png"],
            champions: ["Champions.png", "Champion-Details-1.png", "Champion-Details-2.png", "Champion-Details-3.png"],
            items: ["Items.png", "Items-Details.png"],
            landing: ["Landing-Hero.png", "Landing-Explore.png", "Landing-Features.png", "Landing-Stats.png", "Landing-Footer.png"],
            leaderboard: ["Leaderboard.png"],
            searchPlayer: ["Search-Player.png", "Search-Player-Result.png"],
        },
        pinned: true,
        isInDevelopment: false,
    },
    {
        id: "sneakers",
        name: "Sneakers",
        description: "Manage a sneakers collection with admin panel and more...",
        features: [
            "Landing page with hero, new arrivals, story, quality and contact", 
            "Collection page with sneakers, contact and filters", 
            "Admin panel with dashboard, login, add and edit sneakers", 
        ],
        demo: "",
        code: "", // https://github.com/Xraww/Sneakers
        stack: ["React", "Node.js", "Express", "MongoDB/Mongoose", "Cloudinary", "JsonWebToken", "Bcrypt", "Multer", "Nodemailer"],
        images: { 
            base_url: "/images/projects/sneakers/",
            preview: "landing/Landing-Hero.png",
            landing: ["Landing-Hero.png", "Landing-Arrivals.png", "Landing-Story.png", "Landing-Quality.png", "Landing-Contact.png"],
            collection: ["Collection.png", "Collection-Contact.png"],
            admin: ["Admin-Dashboard.png", "Admin-Login.png", "Admin-Add-Modal.png", "Admin-Edit-Modal.png"],
        },
        pinned: true,
        isInDevelopment: false,
    },
    {
        id: "concierge",
        name: "Concierge service",
        description: "Landing page for the concierge service of a friend's business...",
        features: [
            "Landing page with hero, services, faq and contact", 
            "Dynamic map with locations", 
        ],
        demo: "https://www.uzes-conciergerie.fr/",
        code: "https://github.com/Xraww/Conciergerie",
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI", "Framer Motion", "Leaflet"],
        images: { 
            base_url: "/images/projects/concierge-service/",
            preview: "landing/Landing-Hero.png",
            landing: ["Landing-Hero.png", "Landing-Services.png", "Landing-Faq.png", "Landing-Contact.png"],
        },
        pinned: false,
        isInDevelopment: false,
    },
    {
        id: "invoice-maker",
        name: "Invoice Maker",
        description: "Create invoices for a friend's business using a form and handle PDF export...",
        features: [
            "Create invoices for a friend's business using a form and handle PDF export...", 
            "Form page with client, company, services on the left side of the page",
            "Previsualization page on the right side of the form",
            "Login page with password", 
        ],
        demo: "",
        code: "", // https://github.com/Xraww/InvoiceMaker
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI", "html2pdf.js"], // html2pdf.js internally bundles html2canvas & jspdf
        images: {
            base_url: "/images/projects/invoice-maker/",
            preview: "landing/Preview.png",
            signin: ["Mdp.png"],
            landing: ["Landing.png"],
            form: ["Form-Client.png", "Form-Company.png", "Form-Without-Services.png", "Form-With-Services.png"],
            previsualization: ["Prev-Completed.png", "Prev-Not-Completed.png"],
        },
        pinned: false,
        isInDevelopment: false,
    },
    {
        id: "portfolio",
        name: "Portfolio",
        description: "My personal portfolio website, with my projects and information about me...",
        features: [
            "Landing page with hero, projects, about me and contact", 
            "Projects page with projects list", 
            "Project details page with project details", 
            "CV page with export to PDF functionality", 
        ],
        demo: "https://xraww.fr",
        code: "https://github.com/Xraww/Portfolio",
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
        images: { // TODO: TAKE IMAGES WHEN DONE
            base_url: "/images/projects/portfolio/",
            preview: "landing/Preview.png",
            landing: ["Landing.png"],
        },
        pinned: false,
        isInDevelopment: false,
    },
]