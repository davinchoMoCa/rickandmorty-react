import Card from "./Card";

const Character = (props) => {
  const { filtered, moreCards } = props;
  return (
    <div>
      <section className="card-section">
        <div className="card-container">
          {filtered}
          {moreCards}
        </div>
      </section>
    </div>
  );
};
export default Character;
