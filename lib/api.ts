export async function getCryptoHistory(
  id: string = "bitcoin",
  days: number = 7
) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`
  );
  const data = await res.json();
  return data.prices.map((p: [number, number]) => ({
    time: new Date(p[0]).toLocaleDateString(),
    price: p[1],
  }));
}
