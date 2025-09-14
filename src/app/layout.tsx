import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Alexis Bonzi | Web Developer Portfolio",
    description: "Web developer specializing in Next.js, React, and Tailwind CSS. Check out my projects, skills, and CV.",
    keywords: [
        "web developer",
        "freelance",
        "Next.js",
        "React",
        "Tailwind CSS",
        "TypeScript",
        "portfolio",
        "Xraww",
        "Alexis Bonzi",
    ],
    authors: [{ name: "Alexis Bonzi" }],
    openGraph: {
        title: "Alexis Bonzi | Web Developer Portfolio",
        description: "Web developer specializing in modern web applications with Next.js and React.",
        url: "https://xraww.fr",
        siteName: "Alexis Bonzi Portfolio",
        images: [
            {
                url: "https://xraww.fr/api/og",
                width: 1200,
                height: 630,
                alt: "Alexis Bonzi Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Alexis Bonzi | Web Developer Portfolio",
        description: "Web developer specializing in Next.js and React.",
        images: ["https://xraww.fr/api/og"],
        creator: "@Xraaww",
    },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    const globalSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                name: "Alexis Bonzi",
                jobTitle: "Web Developer",
                url: "https://xraww.fr",
                sameAs: [
                    "https://github.com/Xraww",
                    "https://www.linkedin.com/in/xraww",
                    "https://twitter.com/Xraaww"
                ],
                knowsAbout: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
                worksFor: {
                    "@type": "Organization",
                    name: "Freelance"
                }
            },
            {
                "@type": "WebSite",
                url: "https://xraww.fr",
                name: "Portfolio Alexis Bonzi | Web Developer",
                publisher: {
                    "@type": "Person",
                    name: "Alexis Bonzi"
                }
            }
        ]
    };

    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <head>
                <Script id="json-ld-global" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}/>
            </head>
            
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col gap-10`}>
                {children}
            </body>
        </html>
    );
}