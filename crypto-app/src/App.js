import { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./components/Coin";
import "./App.css";

const App = () => {
  const [coinList, setCoinList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((response) => {
      setCoinList(response.data.coins);
    });
  }, []);

  const filteredCoins = coinList.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Bitcoin..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} rank={coin.rank} volume={coin.volume} />;
        })}
      </div>
    </div>
  );
};

export default App;
