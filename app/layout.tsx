import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "@/styles/globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorSpotlight } from "@/components/ui/CursorSpotlight";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { FontLoader } from "@/components/FontLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Riden | Developer & Product Designer",
  description:
    "I design and build digital systems that actually work. Developer, Product Designer, and Automation Builder.",
  openGraph: {
    title: "Riden | Developer & Product Designer",
    description:
      "I design and build digital systems that actually work. Developer, Product Designer, and Automation Builder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable}`}
      suppressHydrationWarning
      style={{ backgroundColor: "#0b0f19" }}
    >
      <body
        className="min-h-screen min-w-0 overflow-x-hidden antialiased font-inter bg-[#0b0f19] text-[#f8fafc]"
        style={{ backgroundColor: "#0b0f19", color: "#f8fafc" }}
      >
        <FontLoader />
        <CursorSpotlight />
        <ScrollProgress />
        <NoiseOverlay />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", color: "#f8fafc" }}>
            Please enable JavaScript to view this site.
          </div>
        </noscript>
      </body>
    </html>
  );
}
