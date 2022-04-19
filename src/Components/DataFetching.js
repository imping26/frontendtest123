import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
function DataFetching() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  const apiGet = () => {
    fetch("https://assets.g2g.com/offer/keyword.json")
      .then((res) => res.json())
      .then((respo) => {
        // console.log(data);
        // setData(data);
        const displayName = [];
        Object.entries(respo).forEach((key, value) => {
          //  console.log(key[1].default_name);
          var gameName = key[1].default_name;
          // console.log(gameName);
          // displayName.push(gameName);

          setData((prevState) => {
            return [gameName, ...prevState];
          });
        });

      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  const filterGame = [];

  for (var i = 0; i < data.length; i++) {
    var currentWord = data[i];
    if (currentWord.indexOf(filter) == 0) {
      filterGame.push(data[i]);
    }
    if (currentWord.indexOf(filter) > 0) {
      if (
        currentWord.indexOf(" ") != -1 && currentWord.indexOf(" ") < currentWord.indexOf(filter)
      ) {
        filterGame.push(data[i]);
      } else {
        console.log("Incorrect");
      }
    }
  }

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="container">
      <input type="text" value={filter} onChange={filterHandler} />
      <ul>
        {filterGame.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
        {/* {data.filter(e => e.includes(filter) || filter === '').map((name,index)=> ( <li key={index}>{name}</li>))} */}
      </ul>
    </div>
  );
}

export default DataFetching;
