import React, { useState } from "react";
import { data } from "../../StaticData/data.jsx";
import List from "../List/List.jsx";

function Home() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length}Birthday today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default Home;
