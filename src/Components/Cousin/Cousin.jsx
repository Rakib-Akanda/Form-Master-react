import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      { asset && <Special asset={asset}></Special>}
      {name === 'Riazul' && <Friend></Friend> }
    </div>
  );
};

export default Cousin;
