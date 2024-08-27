import styles from "./newArticle.module.css";
type NewArticleProps = {
  id: string;
  title: string;
  intro: string;
};
const NewArticle = (
  { id, title, intro }: NewArticleProps = {
    id: "",
    title: "",
    intro: "",
  }
) => {
  return (
    <article className={styles.article} aria-labelledby={id}>
      <h3 className={`${styles.title} heading-xs`} id="">
        {title}
      </h3>
      <p className={`${styles.intro} body`}>{intro}</p>
    </article>
  );
};

export default NewArticle;
