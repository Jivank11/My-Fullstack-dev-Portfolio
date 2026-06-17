import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Providers from "../Providers.tsx";
import "../globals.css";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://jivan-karlapudi.dev";

  const title = "Jivan Karlapudi | Full Stack Developer";
  const description =
    "Portfolio of Jivan Karlapudi, a full-stack developer focused on Java Spring Boot, React.js, REST APIs, MySQL, and scalable web applications.";
  const ogImage = `${baseUrl}/pp.jpg`;

  return {
    title,
    description,
    viewport: "width=device-width, initial-scale=1",
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
        "x-default": `${baseUrl}/en`,
      },
      canonical: `${baseUrl}/${locale}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: "Jivan Karlapudi Portfolio",
      images: [
        {
          url: ogImage,
          width: 819,
          height: 823,
          alt: "Jivan Karlapudi - Full Stack Developer",
          type: "image/jpeg",
        },
      ],
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@jivank111",
      site: "@jivank111",
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Jivan Karlapudi",
        url: baseUrl,
        jobTitle: "Full Stack Developer",
        description:
          "Full Stack Developer with hands-on experience building scalable web applications using Java Spring Boot, React.js, MySQL, and RESTful APIs.",
        image: ogImage,
        email: "jivank1110@gmail.com",
        telephone: "+91 93071 15549",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.linkedin.com/in/jivan-karlapudi",
          "https://github.com/Jivank11",
        ],
        knowsAbout: [
          "JavaScript",
          "Java",
          "React",
          "Redux",
          "Spring Boot",
          "REST APIs",
          "MySQL",
          "MongoDB",
          "Firebase",
          "Data Structures and Algorithms",
          "Web Development",
          "Full Stack Development",
        ],
      }),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  // Import messages directly to ensure correct locale is used
  const messages = (await import(`../../i18n/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <head>
        <meta
          name="google-site-verification"
          content="PW82MjVgB5OXOfa6RcjIX06LfN3lZ1arROcD41Ao1z4"
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
