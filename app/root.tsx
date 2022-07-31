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
import globalStyles from "./styles/global.css"

import NavBar from "~/components/NavBar/";
import Footer from "~/components/Footer";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "preconnect", href:"https://fonts.googleapis.com"},
    { rel: "preconnect", href:"https://fonts.gstatic.com", crossOrigin: "true" },
    { rel: "stylesheet", href:"https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@400&family=Great+Vibes&https://fonts.googleapis.com/css2?family=Cabin&family=Montserrat:wght@700&display=swap"},
    { rel: "stylesheet" ,href: globalStyles}
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Twin Silver Web Design | Pizza Demo",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className='h-screen m-0 flex flex-col'>
        <NavBar />
        <div className="pt-[60px] lg:pt-0 lg:pl-60">
          <Outlet />
        </div>
        <Footer/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
