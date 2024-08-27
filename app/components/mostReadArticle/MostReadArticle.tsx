import Image from "next/image";
import styles from "./mostReadArticle.module.css";
type MostReadArticleProps = {
  id: string;
  photo: string;
  order: number;
  title: string;
  intro: string;
};

const MostReadArticle = (
  { id, photo, order, title, intro }: MostReadArticleProps = {
    id: "",
    photo: "",
    order: 0,
    title: "",
    intro: "",
  }
) => {
  return (
    <article className={styles.article} aria-labelledby={id}>
      <Image
        src={`/assets/images/${photo}`}
        alt={title}
        width={100}
        height={127}
      />
      <div className="content">
        <span className={`${styles.order} heading-md`}>0{order}</span>
        <h2 className={`${styles.title} heading-xs`} id={id}>
          {title}
        </h2>
        <p className={`${styles.content} body`}>{intro}</p>
      </div>
    </article>
  );
};

export default MostReadArticle;
