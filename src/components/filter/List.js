import { messages } from "../../data/messages";
// import { prodata } from "../../data/prodata";
// import Card from "./Card";
import SlickList from "../../components/slick/SlickList"

const List = ({ filters }) => {
  const categories = Object.keys(filters);
  console.log("bu nedir " + categories);
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
        cards.map(pro =>
          // <Card data={card} key={card.id} />
          <SlickList key={pro.id}
            title={pro.title.substring(0, 40)}
            price={pro.price}
            catname={pro.categoryname}
            subcatname={pro.subcategoryname}
            stars={pro.stars}
            stock={pro.stock}
            discount={pro.discount}
            badge={pro.price}
            id={pro.catId}
            slug={pro.slug}
            data={pro}
          />
        )
      )}
    </div>
  );
};

export default List;
