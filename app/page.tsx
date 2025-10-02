"use client";

import React, { useEffect, useState } from "react";
import { SlGraph } from "react-icons/sl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type Coin = {
  id: string;
  name: string;
  symbol: string;
  variant: string;
  image: string;
  current_price: number;
  atl: number;
  atl_change_percentage: number;
  high_24h: number;
  low_24h: number;
  ath_change_percentage: number;
  ath: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  price_change_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
};
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader } from "@/components/layout/loader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const page = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCoins = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setCoins(data);
    } catch (err) {
      setError(err.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <>
    
      {loading && (
        <p className="text-gray-600">
          <Loader />
        </p>
      )}
      
      {error && <div className="w-1/2 mt-4 mx-auto">
      <Alert variant="destructive">
        <Terminal />
        <AlertTitle>{error}</AlertTitle>
        <AlertDescription>
          Unable to connect to the server. Please check your internet connection or try again later.
        </AlertDescription>
      </Alert>
      </div>}
      <main className="w-[70%] mx-auto pt-6">
        <div className="flex flex-row flex-wrap gap-4 pb-8">
          {coins.map((coin) => (
            <Dialog key={coin.id}>
              <DialogTrigger>
                <Card key={coin.id} className="w-60">
                  <CardHeader>
                    <div className="flex flex-row gap-3">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-10 h-10"
                      />
                      <CardTitle className="flex items-center">
                        {coin.name} ({coin.symbol.toUpperCase()})
                      </CardTitle>
                    </div>
                    <CardDescription className="text-4xl">
                      ${coin.current_price}
                    </CardDescription>
                    {/* <CardAction>Card Action</CardAction> */}
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl">High & Low (24h)</p>
                    <p>High: {coin.high_24h}</p>
                    <p>Low: {coin.low_24h} </p>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <SlGraph />
                    <p
                      className={`flex items-center ${
                        coin.price_change_percentage_24h < 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {coin.price_change_percentage_24h}%
                    </p>
                  </CardFooter>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex flex-row gap-2 justify-center items-center">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="w-10 h-10"
                    />
                    {coin.name}
                    {coin.symbol.toUpperCase()}
                  </DialogTitle>
                  <DialogDescription>
                    <div>
                      <p className="text-4xl text-black">
                        {coin.current_price}
                        <sup className="text-2xl">USD</sup>
                      </p>
                    </div>
                    <div>
                      <p
                        className={`text-1xl ${
                          coin.price_change_percentage_24h > 0
                            ? "text-green-400"
                            : "text-red-500"
                        }`}
                      >
                        {coin.price_change_24h}(
                        {coin.price_change_percentage_24h})
                      </p>
                    </div>
                    <div className="w-100px text-black bg-amber-200 p-2 mt-5 mb-2 rounded-md">
                      <p>High: {coin.high_24h}</p>
                      <p>Low: {coin.low_24h}</p>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div>
                            <p>
                              Market cap (24h): {coin.market_cap_change_24h}(
                              {coin.market_cap_change_percentage_24h})
                            </p>
                            <p>Market Cap Rank: {coin.market_cap_rank}</p>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Total Market Cap = Current Price x Circulating
                            Supply(Trading coins available in market)
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <div className="w-100px text-black bg-blue-200 p-2 mt-5 mb-2 rounded-md">
                      <p>All Time High: {coin.ath}</p>
                      <p>All Time High %: {coin.ath_change_percentage}</p>
                      <p>All Time Low: {coin.atl}</p>
                      <p>All Time Low %: {coin.atl_change_percentage}</p>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </main>
    </>
  );
};

export default page;
