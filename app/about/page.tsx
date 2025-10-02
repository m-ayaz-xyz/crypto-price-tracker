import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 mb-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">About Crypto Price Tracker</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground text-xl">
          <p>
            <strong>Crypto Price Tracker</strong> is a modern web application
            designed to provide users with up-to-date cryptocurrency market data
            in a clean and responsive interface.
          </p>
          <p>
            The project is built using <strong>Next.js</strong> for
            server-rendered React applications and utilizes the elegant and
            accessible components from the <strong>shadcn/ui</strong> library.
            Real-time crypto prices and statistics are powered by the reliable{" "}
            <strong>CoinGecko API</strong>.
          </p>
          <p>
            🔑 <strong>Key Features:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Live price updates for popular cryptocurrencies</li>
            <li>responsive UI design</li>
            <li>Tooltips, modals, and other modern UI components via ShadCN</li>
          </ul>
          <p>
            This project was developed as just to get experience in Shadcn UI,
            combining modern frontend frameworks, and public APIs to build a
            real-world web application.
          </p>
          <p>
            View source on{" "}
            <a
              href="https://github.com/m-ayaz-xyz/crypto-price-tracker"
              className="underline"
            >
              GitHub
            </a>
          </p>

          <p>
            🧑‍💻 <strong>Tech Stack:</strong> Next.js, TypeScript, Tailwind CSS,
            shadcn/ui, CoinGecko API
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
