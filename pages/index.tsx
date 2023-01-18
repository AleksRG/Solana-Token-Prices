import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [price, setPrice] = useState("0");
  const [address, setAddress] = useState(
    "So11111111111111111111111111111111111111112"
  );
  const token = {
    method: "GET",
    url: `https://solana-gateway.moralis.io/token/mainnet/${address}/price`,
    headers: {
      accept: "application/json",
      "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
    },
  };
  useEffect(() => {
    setPrice("...");
    axios
      .request(token)
      .then(function (response) {
        setPrice(response.data.usdPrice);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [address]);
  return (
    <main className="bg-gradient-to-b from-sky-700 via-gray-900 to-black h-screen w-screen flex flex-col justify-center items-center space-y-6">
      <div className="flex space-x-4">
        <Button
          address="So11111111111111111111111111111111111111112"
          setAddress={setAddress}
        />
        <Button
          address="xxxxa1sKNGwFtw2kFn8XauW9xq8hBZ5kVtcSesTT9fW"
          setAddress={setAddress}
        />{" "}
        <Button
          address="2cJgFtnqjaoiu9fKVX3fny4Z4pRzuaqfJ3PBTMk2D9ur"
          setAddress={setAddress}
        />{" "}
        <Button
          address="NFTUkR4u7wKxy9QLaX2TGvd9oZSWoMo4jqSJqdMb7Nk"
          setAddress={setAddress}
        />
        <Button
          setAddress={setAddress}
          address={"9zoqdwEBKWEi9G5Ze8BSkdmppxGgVv1Kw4LuigDiNr9m"}
        />{" "}
        <Button
          setAddress={setAddress}
          address={"Fm9rHUTF5v3hwMLbStjZXqNBBoZyGriQaFM6sTFz3K8A"}
        />{" "}
        <Button
          setAddress={setAddress}
          address={"4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"}
        />{" "}
        <Button
          setAddress={setAddress}
          address={"9WMwGcY6TcbSfy9XPpQymY3qNEsvEaYL3wivdwPG2fpp"}
        />
      </div>
      <div className="rounded-full font-mono text-sky-500 w-72 border border-white/10 bg-slate-700/20 flex justify-between items-center text-2xl py-0.5 px-4">
        <img
          src={`https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/${address}/logo.png`}
          className="h-8 rounded-full"
        />
        <a className="text-lime-500 font-semibold">$</a>
        <text className="cursor-text">{price}</text>
      </div>
    </main>
  );
}

function Button({ address, setAddress }: { address: string; setAddress: any }) {
  return (
    <div
      className="w-12 hover:scale-125 duration-200"
      onClick={() => setAddress(address)}
    >
      <img
        src={`https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/${address}/logo.png`}
        className="w-12 h-12 rounded-full"
      />
    </div>
  );
}
