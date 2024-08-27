import styles from "./page.module.css";
import MostReadArticle from "./components/mostReadArticle/MostReadArticle";
import NewArticle from "./components/newArticle/NewArticle";
import Image from "next/image";
import Header from "./components/header/Header";

const mostReadArticles = [
  {
    id: "article-1",
    photo: "image-retro-pcs.jpg",
    order: 1,
    title: "Reviving Retro PCs",
    summary: "What happens when old PCs are given modern upgrades?",
  },
  {
    id: "article-2",
    photo: "image-top-laptops.jpg",
    order: 2,
    title: "Top 10 Laptops of 2022",
    summary: "Our best picks for various needs and budgets.",
  },
  {
    id: "article-3",
    photo: "image-gaming-growth.jpg",
    order: 3,
    title: "The Growth of Gaming",
    summary: "How the pandemic has sparked fresh opportunities.",
  },
];

const newArticles = [
  {
    id: "article-1",
    title: "Hydrogen VS Electric Cars",
    intro: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: "article-2",
    title: "The Downsides of AI Artistry",
    intro:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: "article-3",
    title: "Is VC Funding Drying Up?",
    intro:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];
export default function Home() {
  return (
    <div className="container">
      <Header />
      <main className="main" aria-labelledby="mainHeading">
        <div className={styles.mainPhoto}></div>
        <div className={styles.content} aria-labelledby="mainHeading">
          <h1 className="heading-xl" id="mainHeading">
            The Bright Future of Web 3.0?
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <p className="body" style={{ color: "var(--gun-metal)" }}>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className={styles.btn}>read more</button>
          </div>
        </div>
      </main>
      <aside aria-labelledby="newArticles" className="aside">
        <h2 id="newArticles" className={`${styles.title} heading-lg`}>
          New
        </h2>
        {newArticles.map((newArticle) => (
          <NewArticle
            id={newArticle.id}
            title={newArticle.title}
            intro={newArticle.intro}
          />
        ))}
      </aside>
      <section aria-label="Most read articles" className="most-read-articles">
        {mostReadArticles.map((mostReadArticle) => (
          <MostReadArticle
            key={mostReadArticle.id}
            id={mostReadArticle.id}
            photo={mostReadArticle.photo}
            order={mostReadArticle.order}
            title={mostReadArticle.title}
            intro={mostReadArticle.summary}
          />
        ))}
      </section>
    </div>
  );
}
