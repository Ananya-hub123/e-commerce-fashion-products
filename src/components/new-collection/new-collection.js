import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
const NewCollection = () => {
  const cards_info = [
    {
      id: 1,
      image:
        "shirt.jpg",
      title: "Loro Piana",
      subTitle: "Slim-Fit Striped Silk and linen blend Polo Shirt",
      price: 45,
    },
    {
      id: 2,
      image:
        "pants.jpg",
      title: "White pants",
      subTitle: "Slim Fit man pants",
      price: 90,
    },
    {
      id: 3,
      image:
        "glasses.webp",
      title: "Bidha Glasses",
      subTitle: "Black glasses with luxury finishing",
      price: 50,
    },
    {
      id: 4,
      image:
        "jacket.webp",
      title: "Brown Bomber",
      subTitle: "Luxury unisex bomber jacket",
      price: 52,
    },
    {
      id: 5,
      image:
        "shoe.jpg",
      title: "Leather Shoe Jack",
      subTitle: "Man leather shoes",
      price: 89,
    },

    {
      id: 6,
      image:
        "grey shirt.jpg",
      title: "GreyTshirt",
      subTitle: "Grey tshirt",
      price: 21,
    },
  ];
  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <Cards
              id={item.id}
              key={index}
              image={item.image}
              title={item.title}
              sub_title={item.subTitle}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
