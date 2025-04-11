import type { Metadata } from "next";
import {
  Inter as BodyFont,
  Geist_Mono,
  Sora as TilliTypeface,
} from "next/font/google";
import { resolveTheme } from "next-color-scheme/server";

import "./globals.css";

import Script from "next/script";
import { Footer, Header, Theming } from "@/components/structure";

const geistSans = BodyFont({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transform The Way You Do Business | tilli",
  description: "Transform the way you do business.",
};

const tilliTypeFace = TilliTypeface({
  variable: "--font-tilli",
  weight: "variable",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const theme = await resolveTheme();

  return (
    <html lang="en" data-theme={"light"}>
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tilliTypeFace.variable} bg-background h-full antialiased`}
      >
        <Theming initialTheme={"light"}>
          <Header />
          {children}
          <Footer />
        </Theming>
        <Script id="tilli-title" async>
          {`
          const stagger = (time, ...fns) => {
          return new Promise((res) => {
                      let i = 0;
            const interval = setInterval(() => {
            console.log("calling", i)
            console.log(document.title)
              fns[i]();
              i++;
              if (i === fns.length - 1) {
                clearInterval(interval);
                res();
              }
            }, time);
          })
          }
          
          const sliceTitle = () => {
          if(document.title.length > 0) {
                      document.title = document.title.slice(0, -1);
          }
          }
          
          const buildTitle = (title) => {
            const titleArray = title.split("");
            let i = 0;
            const interval = setInterval(() => {
              if (i >= titleArray.length) {
              console.log("clear");
                clearInterval(interval);
                return;
              }
              const char = titleArray[i];
              document.title += char;
              console.log("setting", document.title);
              i++;
            }, 250);
          }
            
          stagger(250, ...(new Array(document.title.length - 1).fill(sliceTitle))).then(() => buildTitle("𝚝𝚒𝚕𝚕𝚒"));
          setTimeout(() => {
          document.title = "asdf" // "𝚝𝚒𝚕𝚕𝚒";
          }, 300000)
          `}
        </Script>
      </body>
    </html>
  );
}
