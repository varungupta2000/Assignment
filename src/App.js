import Cards from "./componenets/Card";
import FAQs from "./componenets/FAQs";
import Footer from "./componenets/Footer";
import Navbar from "./componenets/Header";
import NewsLetter from "./componenets/NewsLetter";
import Numbers from "./componenets/Numbers";
import UpcomingDetails from "./componenets/UpcomingDetails";
function App() {
  return (
    <div>
      <Navbar/>
      <UpcomingDetails/>
      <Cards/>
      <Numbers/>
      <FAQs/>
      <NewsLetter />
      <Footer/>
    </div>
  );
}

export default App;
