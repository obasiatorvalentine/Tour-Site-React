import React from "react";
import Review from "./components/Review";
import ReviewData from "./components/ReviewData";
function App() {
  const [data, setData] = React.useState(ReviewData);
  const [index, setIndex] = React.useState(
    Math.floor(Math.random() * data.length)
  );
  function next() {
    index < data.length - 1 ? setIndex(index + 1) : setIndex(0);
  }
  function previous() {
    index > 0 ? setIndex(index - 1) : setIndex(data.length - 1);
  }
  return (
    <main>
      <Review
        data={data}
        handleNext={next}
        handlePrevious={previous}
        index={index}
        setIndex={setIndex}
      />
    </main>
  );
}
export default App;
