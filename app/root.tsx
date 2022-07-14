import type {
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./tailwind.css";

import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "preconnect", href:"https://fonts.googleapis.com"},
    { rel: "preconnect", href:"https://fonts.gstatic.com", crossorigin: "true" },
    { rel: "stylesheet", href:"https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@400&family=Great+Vibes&display=swap"},
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Twin Silver Web Design | Pizza Demo",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="h-full font-['Cormorant_SC',serif]">
    <head>
      <Meta />
      <Links />
    </head>
    <body className='h-full bg-white'>
    <div className="relative min-w-full min-h-full overflow-hidden">
      <NavBar/>
      <div className="pt-32 lg:pt-4  px-4 lg:pl-64 pb-12 w-full">
        <Outlet />
      </div>
      <Footer/>
    </div>
    <ScrollRestoration />
    <Scripts />
    <LiveReload />

    </body>
    </html>
  );
}
