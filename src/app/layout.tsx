import { WindowProvider } from "@/context/WindowContext";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WindowProvider>
          {children}
        </WindowProvider>
      </body>
    </html>
  );
}