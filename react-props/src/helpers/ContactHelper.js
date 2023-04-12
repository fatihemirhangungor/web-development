import contacts from "../contacts";
import Card from "../components/CardComponent/Card";

function ListContacts() {
  var cards = [];
  contacts.forEach((element) => {
    cards.push(
      <Card
        name={element.name}
        src={element.imgURL}
        tel={element.phone}
        email={element.email}
      />
    );
  });
  return cards;
}

export {
    ListContacts
}