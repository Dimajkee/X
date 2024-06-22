import { useState } from "react";

import Navbar from "./components/Navbar";
import Article from "./components/Article";

function App() {
  const [content, setContent] = useState({
    Movies: "none",
    Games: "none",
    Cartoons: "none",
  });
  function toggleContent(content) {
    setContent((prevContent) => {
      return {
        Movies: content === "Movies" ? "block" : "none",
        Games: content === "Games" ? "block" : "none",
        Cartoons: content === "Cartoons" ? "block" : "none",
      };
    });
  }
  return (
    <>
      <Navbar />
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          width: "80%",
          placeItems: "center",
          margin: "100px auto",
        }}
      >
        <Article
          title={"Movies"}
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          onClick={() => toggleContent("Movies")}
          contentStyle={{
            display: content.Movies,
          }}
        />
        <Article
          title={"Games"}
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          onClick={() => toggleContent("Games")}
          contentStyle={{
            display: content.Games,
          }}
        />
        <Article
          title={"Cartoons"}
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          onClick={() => toggleContent("Cartoons")}
          contentStyle={{
            display: content.Cartoons,
          }}
        />
      </section>
    </>
  );
}

export default App;
