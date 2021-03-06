import React from "react";
import Navigation from "../components/Navigation";

const ReactCommentaire = () => {
  return (
    <div>
      <Navigation />
      <h1>Vous pouvez ajoutez un ou des commentaire(s) ici</h1>
      <section class="article">
        <article>
          <h2>Ut quo quas odit dolores architecto molestiae</h2>
          <p>
            by{" "}
            <u>
              <strong>Theresa Jacobson</strong>
            </u>
            , on 14/02/2021
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            labore obcaecati iste similique accusamus, esse dolor aut, quasi ex
            nam non nemo expedita incidunt unde dicta velit neque rerum. Hic!
          </p>

          <h2>Comments</h2>
          <p>
            Signed as <strong>Dana Hansen.</strong>
            <a href={URL}>Logout ?</a>
          </p>
          <textarea
            id=""
            cols="30"
            rows="5"
            placeholder="Be nice :)"
          ></textarea>

          <div>
            <input class="button" type="button" value="Comment" />
          </div>
        </article>

        <article class="article1">
          <p>
            <strong>Lucius Terry commented on 29/08/2021</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            earum labore tempora perspiciatis asperiores quo nisi placeat
            dolores facilis recusandae quod voluptate excepturi fuga unde, est
            alias aspernatur voluptas facere?
          </p>
        </article>

        <article>
          <p>
            <strong>Macie Rowe commented on 24/11/2021</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            dolore consequuntur, nobis eveniet in aspernatur, porro recusandae
            totam, nemo doloribus culpa labore expedita fugiat quam
            reprehenderit dolor facere molestias at.
          </p>
        </article>

        <article class="article1">
          <p>
            <strong>Camilla Klehn commented on 21/05/2021</strong>
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            culpa officiis optio quibusdam quidem facilis perferendis
            consequatur ut, omnis dolore consequuntur harum nisi? Illo vero qui,
            at non quidem quia.
          </p>
        </article>

        <article>
          <p>
            <strong>Tyler Sporer commented on 29/03/2021</strong>
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            corrupti obcaecati soluta saepe quasi, libero quisquam dolor omnis
            optio repellendus fuga tempore aperiam praesentium neque iusto ex
            similique natus aliquid.
          </p>
        </article>

        <article class="article1">
          <p>
            <strong>Verber pollich commented on 06/01/2021</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            expedita molestiae qui, magnam hic dolor? Eligendi laboriosam
            doloribus eaque nihil sit placeat, quibusdam natus impedit
            voluptatum perspiciatis ullam rem deserunt!
          </p>
        </article>
      </section>
    </div>
  );
};

export default ReactCommentaire;
