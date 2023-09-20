import "./styles.css";
import React, { useState } from "react";
const booksGenres = {
  fiction: [
    {
      Name: "Last Night I sang to the monster",
      Author: "Benjamin Alire Saenz",
      Rating: "4.5/5"
    },
    {
      Name: "Sadness is a White Bird",
      Author: "Moriel Rothman-Zecher",
      Rating: "4.5/5"
    },
    { Name: "Open Water", Author: "Caleb Azumah Nelson", Rating: "4.5/5" },
    {
      Name: "On Earth we are briefly gorgeous",
      Author: "Ocean Vuong",
      Rating: "4/5"
    }
  ],
  Nonfiction: [
    {
      Name: "Annihilation of caste",
      Author: "Dr Babasaheb Ambedkar",
      Rating: "5/5"
    },
    {
      Name: "Writing beyond race",
      Author: "bell hooks",
      Rating: "5/5"
    },
    { Name: "Humankind", Author: "Rutger Bregman", Rating: "4.5/5" }
  ],
  Poetries: [
    {
      Name: "Milk & Honey",
      Author: "Rupi Kaur",
      Rating: "4/5"
    },
    {
      Name: "Love & Misadventure",
      Author: "Lang Leav",
      Rating: "4/5"
    },
    {
      Name: "Night Sky With Exit Wounds",
      Author: "Ocean Vuong",
      Rating: "4/5"
    }
  ]
};

const genresWeKnow = Object.keys(booksGenres);
console.log(genresWeKnow);
export default function App() {
  const [recs, setRecs] = useState([]);

  function onClickHandler(genre) {
    const recommendation = booksGenres[genre];
    console.log(recommendation);
    setRecs(recommendation);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#d97706" }}>Yash's books recommendation!</h1>

      {/* <button>Fiction</button>
      <button>Nonfiction</button>
      <button>Poetries</button> */}

      <h2>Click on the genres below:</h2>

      {genresWeKnow.map((genre) => {
        return <button onClick={() => onClickHandler(genre)}> {genre} </button>;
      })}

      <div>
        {recs.map((rec) => {
          return (
            <div
              style={{
                padding: "1rem",
                margin: "1rem",
                backgroundColor: "#fef3c7",
                display: "flex",
                justifyContent: "space-around"
              }}
            >
              <span>{rec.Name}</span>
              <span>{rec.Author}</span>
              <span>{rec.Rating}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
