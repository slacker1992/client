"use client";
import Header from "@/components/Header";
import { store } from "@/store";
import { theme } from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Header />
            {children}
            {/* <Footer /> */}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
