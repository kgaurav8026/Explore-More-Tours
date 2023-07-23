import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give the opportunity to see a lot,within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano,Batangas
      "
        text="Discover the captivating beauty of Taal Volcano in Batangas, a mesmerizing natural wonder that will leave you in awe. Nestled amidst the picturesque landscape, Taal Volcano is renowned for its unique geographical features. Towering over the serene Taal Lake, this active volcano is known for its distinctive ,volcano within a lake within a volcano phenomenon. The panoramic views from the summit are simply breathtaking, offering a glimpse into the raw power of nature. Adventurous souls can embark on a thrilling hike to the crater, where they will be rewarded with stunning vistas of the turquoise lake surrounded by lush greenery. Whether you're an avid nature lover, a photography enthusiast, or simply seeking an unforgettable experience, Taal Volcano in Batangas promises an unforgettable journey into the heart of natural marvels."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas
      "
        text="Welcome to the majestic beauty of Mt. Daguldul in Batangas! Situated amidst the breathtaking landscapes of the province, Mt. Daguldul offers a remarkable adventure for nature enthusiasts and avid hikers alike.

        Rising proudly at an elevation of [insert elevation], this magnificent mountain showcases the natural wonders of Batangas. Its verdant slopes are adorned with lush greenery, creating a picturesque backdrop that beckons explorers to discover its hidden treasures.
        
        Embarking on a journey to Mt. Daguldul allows you to immerse yourself in the awe-inspiring beauty of the region."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
