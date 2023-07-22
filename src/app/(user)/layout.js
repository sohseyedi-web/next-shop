import QueryProviders from "@/components/QueryProvider";
import React from "react";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "../../redux/Provider";
import Header from "../Header";
import "../globals.css";

export const metadata = {
  title: "FakeShop :)))",
  description: "Next.js Project Digital Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <QueryProviders>
          <Toaster />
          <ReduxProvider>
            <Header />
            {children}
          </ReduxProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
