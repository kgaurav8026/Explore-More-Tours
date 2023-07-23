import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Embark on an unforgettable adventure to Indonesia, a tropical paradise that offers a blend of stunning landscapes, rich cultural heritage, and warm hospitality.

        Start your journey in Bali, known as the Island of the Gods. Immerse yourself in the island's vibrant arts scene. "
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Embark on a captivating adventure to Malaysia, a vibrant and diverse country that will leave you enchanted.

        Start your journey in Kuala Lumpur, the bustling capital city known for its iconic Petronas Twin Towers. "
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="Embark on an enchanting journey to France, a country that embodies elegance, history, and unparalleled beauty.

        Begin your adventure in the City of Love, Paris. Explore iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. "
        />
      </div>
    </div>
  );
}

export default Trip;
