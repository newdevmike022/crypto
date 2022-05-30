const Coin = ({ name, icon, price, symbol, rank, volume, id }) => {
  return (
    <div className="coin">
      <h1>Name: {name} </h1>
      <img src={icon} alt="crypto symbol" />
      <h3>Price: {price} </h3>
      <h3>Symbol: {symbol} </h3>
      <h3>Rank: {rank} </h3>
      <h3>Volume: {volume} </h3>
      <h3>{id}</h3>
    </div>
  );
};

export default Coin;
