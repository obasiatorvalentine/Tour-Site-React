import React from "react";
import TourCard from "./components/TourCard";
import loaderAnimation from "./images/tube-spinner.png";
import ToursData from "./components/ToursData";
function App() {
  
  const [tours, setTours] = React.useState([]);
  const [start, setStart] = React.useState(false);
  
  React.useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then((res) => res.json())
      .then((data) => {
        if (data.length != 0) {
          setStart(true);
        }
        setTours(data);
      });
  }, [start]);

  function removeItem(event) {
    const newArray = [];
    const itemIndex = event.target.parentElement.parentElement.id;
    for (let i = 0; i < tours.length; i++) {
      if (itemIndex != tours.indexOf(tours[i])) {
        newArray.push(tours[i]);
      }
    }
    setTours(newArray);
  }
  return (
    <main>
      {start ? (
        <>
          <div className="header">
            <h2>{tours.length > 0 ? "Our Tours" : "No Tours Left"}</h2>
            {tours.length > 0 ? (
              <hr />
            ) : (
              <button
                className="refresh-button"
                onClick={() => setStart(false)}
              >
                Refresh
              </button>
            )}
          </div>
          <div className="tour-container">
            <TourCard
              className="tour-item"
              tourData={tours}
              handleRemove={removeItem}
            />
          </div>
        </>
      ) : (
        <div className="loader">
          <img src={loaderAnimation} />
        </div>
      )}
    </main>
  );
}
export default App;
