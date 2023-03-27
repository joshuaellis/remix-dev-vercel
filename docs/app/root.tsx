import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { MDXProvider } from "@mdx-js/react";

const comps = {
  h1: (props: any) => {
    return <h1 {...props} style={{ color: "green", fontSize: 200 }} />;
  },
  h2: (props: any) => {
    return <h2 {...props} style={{ color: "pink" }} />;
  },
};

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MDXProvider components={comps}>{children}</MDXProvider>
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
      <ScrollRestoration />
    </Document>
  );
}
