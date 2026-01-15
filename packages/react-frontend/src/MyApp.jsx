// src/MyApp.jsx
import React, { useState } from "react";
import Table from "./Table";
//our array of object
function MyApp() {
    const [characters, setCharacters] = useState([
    {
      name: "Charlie",
      job: "Janitor"
    },
    {
      name: "Mac",
      job: "Bouncer"
    },
    {
      name: "Dee",
      job: "Aspring actress"
    },
    {
      name: "Dennis",
      job: "Bartender" 
    }
  ]);
    function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => {
      return i !== index;
    });
    setCharacters(updated);
    }   

    return (
        <div className="container">
          <Table
            characterData={characters}
            removeCharacter={removeOneCharacter}
          />
        </div>
      );
}
//we are passing data through to our child component (Table) with properites (characterData)
export default MyApp; //maybe take out
//Makes the component available to be imported into other components or files 