import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home2 = () => {
  return (
    <div>
      <Navigation />
      <article class="article">
        <h2>
          <a href="React-commentaire.html">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum
            laboriosam consequuntur fuga dolores eius tempora velit iste quos
            voluptas, cupiditate, laborum ipsum, impedit officiis quo saepe.
          </a>
        </h2>
        <p>
          by{" "}
          <u>
            <strong>Franck Alomin</strong>
          </u>
          , on 06/03/2021
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, hic
          tempore. Minus possimus nemo consectetur nam id explicabo veritatis
          eum esse iure a laborum placeat sunt, voluptates corporis sed non.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          blanditiis odio alias vel soluta laboriosam nobis porro totam omnis,
          nam, dolor eum facilis repudiandae? Quidem molestiae consequatur autem
          maiores! Atque?
        </p>

        <p>...</p>
      </article>

      <article class="article">
        <h2>Dolores voluptas nesciunt dicta.</h2>
        <p>
          by{" "}
          <u>
            <strong>Toto Julien</strong>
          </u>
          , on 23/01/2022
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, hic
          tempore. Minus possimus nemo consectetur nam id explicabo veritatis
          eum esse iure a laborum placeat sunt, voluptates corporis sed non.
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          saepe accusantium dignissimos nemo vel? Sapiente, totam vel
          reprehenderit nisi ad asperiores minima quam sed quidem blanditiis,
          cum maxime quia fugit.
        </p>
      </article>

      <Footer />
    </div>
  );
};

export default Home2;
