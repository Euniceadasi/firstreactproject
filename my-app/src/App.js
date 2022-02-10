import './App.css';
import Navbar from './components/Navbar';
import Side from './components/Side';
import Card from './components/Card';


function App() { 

  const Details = [
    {name: "Lekki Beach Hotels", price: "$750", description: "We can say that this is a self-contained establishment, providing for most of a vacationer’s needs while remaining on the premises (lodging, food, drink, sports, entertainment, shopping, etc.)."},
    {name: "Luxury Oceanview Apartment at Blue Waterfall", price: "$600", description: "We can say that this is a self-contained establishment, providing for most of a vacationer’s needs while remaining on the premises (lodging, food, drink, sports, entertainment, shopping, etc.)."},
    {name: "Homedarls Freedom Way", price: "$550", description: "We can say that this is a self-contained establishment, providing for most of a vacationer’s needs while remaining on the premises (lodging, food, drink, sports, entertainment, shopping, etc.).."},
    {name: "BlueWaters", price: "$590", description: "We can say that this is a self-contained establishment, providing for most of a vacationer’s needs while remaining on the premises (lodging, food, drink, sports, entertainment, shopping, etc.)."},
    {name: "The Habitat", price: "$350", description: "We can say that this is a self-contained establishment, providing for most of a vacationer’s needs while remaining on the premises (lodging, food, drink, sports, entertainment, shopping, etc.)."},
    {name: "Home Exquisite", price: "$470", description: "We can say that thisis a self-contained establishment, providing for most of a vacationer’s needs while remaining on the premises (lodging, food, drink, sports, entertainment, shopping, etc.).."}
  ];

  const sidebar = [
    {title: "Reservation Available", description: "Reservation in its essence is a type of quota-based affirmative action, make your reservation now"},
    {title: "Book Now", description: " Available for booking, Book now"},
  ]

  return ( 
        
    <div>

        <Navbar/>

          <div className="maincard">

            <div className="card__section">
        
              <div className="card__container">
                  <Card detail={ Details}/>
              </div>
            
            </div>

          
            <div className="cardside" ><Side sidebar={sidebar} /></div>

          </div>
          
     </div>
  );

 }
  
 
 export default App;