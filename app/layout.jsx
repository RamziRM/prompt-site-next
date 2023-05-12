// To
import "@styles/globals.css";

export const metadata = {
  title: "PROMPTS",
  description: "Discover and share AI promptsz",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;