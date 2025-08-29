import AnimeHubDetails from "@/components/details/anime-hub";
import LolTrackerDetails from "@/components/details/lol-tracker";
import SneakersDetails from "@/components/details/sneakers";
import ConciergeServiceDetails from "@/components/details/concierge-service";
import InvoiceMakerDetails from "@/components/details/invoice-maker";
import PortfolioDetails from "@/components/details/portfolio";

export const My_Projects = [
    {
        id: "anime-hub",
        name: "Anime Hub",
        description: "Search for anime and manga, with a profile system, a watchlist and more...",
        details: AnimeHubDetails,
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
    },
    {
        id: "lol-tracker",
        name: "League of Legends Tracker",
        description: "Search for players, stats and more about League of Legends...",
        details: LolTrackerDetails,
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
    },
    {
        id: "sneakers",
        name: "Sneakers",
        description: "Manage a sneakers collection with admin panel and more...",
        details: SneakersDetails,
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
    },
    {
        id: "concierge",
        name: "Concierge service",
        description: "Landing page for the concierge service of a friend's business...",
        details: ConciergeServiceDetails,
        demo: "https://conciergerie-gilt.vercel.app/",
        code: "", // https://github.com/Xraww/Conciergerie
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI", "Framer Motion", "Leaflet"],
        images: { 
            base_url: "/images/projects/concierge-service/",
            preview: "landing/Landing-Hero.png",
            landing: ["Landing-Hero.png", "Landing-Services.png", "Landing-Faq.png", "Landing-Contact.png"],
        },
        pinned: false,
    },
    {
        id: "invoice-maker",
        name: "Invoice Maker",
        description: "Create invoices for a friend's business using a form and handle PDF export...",
        details: InvoiceMakerDetails,
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
    },
    {
        id: "portfolio",
        name: "Portfolio",
        description: "My personal portfolio website, with my projects and information about me...",
        details: PortfolioDetails,
        demo: "https://xraww.fr",
        code: "", // https://github.com/Xraww/Portfolio
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
        images: { // TODO: TAKE IMAGES WHEN DONE
            base_url: "/images/projects/portfolio/",
            preview: "landing/Preview.png",
            landing: ["Landing.png"],
        },
        pinned: false,
    },
]