import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <h1>Accueil</h1>
      <article class="article">
        <h2>Dolores ut omnis inventores voluptatem.</h2>
        <p>
          by{" "}
          <u>
            <strong>Emmanuelle Harris</strong>
          </u>
          , on 23/12/2020
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, hic
          tempore. Minus possimus nemo consectetur nam id explicabo veritatis
          eum esse iure a laborum placeat sunt, voluptates corporis sed non.
        </p>

        <p>...</p>
      </article>

      <article class="article">
        <h2>
          <a href="React-commentaire.html">
            Quis nihil qui eos nostrum sequi eaque.
          </a>
        </h2>
        <p>
          by{" "}
          <u>
            <strong>Polly Emmerich</strong>
          </u>
          , on 13/02/2021
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

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          dolorum quisquam omnis libero incidunt repellat delectus blanditiis
          velit possimus eius hic reprehenderit cumque neque reiciendis,
          ratione, nam perspiciatis facere nesciunt.
        </p>

        <p>...</p>
      </article>

      <article class="article">
        <h2>Dolores voluptas nesciunt dicta.</h2>
        <p>
          by{" "}
          <u>
            <strong>kiley Reilly</strong>
          </u>
          , on 12/11/2021
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

        <p>...</p>
      </article>

      <article class="article">
        <h2>Quos quidem ipsam et.</h2>
        <p>
          by{" "}
          <u>
            <strong>Tre Collins</strong>
          </u>
          , on 30/01/2021
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, hic
          tempore. Minus possimus nemo consectetur nam id explicabo veritatis
          eum esse iure a laborum placeat sunt, voluptates corporis sed non.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus
          ducimus earum, eaque itaque illo sapiente a voluptate similique dicta
          assumenda repudiandae est cumque amet! Quis eligendi sequi suscipit
          neque!
        </p>
      </article>

      <Footer />
    </div>
  );
};

export default Home;
