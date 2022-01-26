import { messages } from "../../data/messages";
import Card from "./Card";

const List = ({ filters }) => {
  const categories = Object.keys(filters);
  const cards = messages.filter((card, i) => {
    const includeCard = !categories.some(category => {
      if (filters[category].selected.length === 0) {
        return false;
      } else if (typeof card[category] === "string") {
        return filters[category].selected.includes(card[category])
          ? false
          : true;
      }
      return !filters[category].selected.some(item =>
        card[category].includes(item)
      );
    });

    return includeCard;
  });

  return (
    <div>
      {cards.length === 0 ? (
        <p>Sorry, no messages match your filter parameters</p>
      ) : (
        cards.map(card => <Card data={card} key={card.id} />)
      )}
    </div>
  );
};

export default List;
