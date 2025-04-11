"use client";

import type { Theme } from "next-color-scheme/react";
import { ThemeProvider } from "next-color-scheme/react";

const Theming: React.FC<React.PropsWithChildren<{ initialTheme: Theme }>> = ({
  children,
  initialTheme,
}) => {
  return (
    <ThemeProvider
      initialTheme={initialTheme}
      onThemeChange={(_, helpers) =>
        helpers.tailwindDataSelector("html", "data-theme")
      }
    >
      {children}
    </ThemeProvider>
  );
};

export default Theming;
