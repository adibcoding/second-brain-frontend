import styles from "./card.module.css";

interface CardProp {
  title?: string;
  updatedAt?: string;
  content?: string;
  tags?: Array<string>;
  gridColumn?: string;
}

export default function Card({
  title,
  updatedAt,
  content,
  tags,
  gridColumn,
}: CardProp) {
  return (
    <>
      <div className={styles.cardContainer} style={{ gridColumn }}>
        <div className={styles.cardTitleContainer}>
          <h3 className={styles.cardTitleText}>{title}</h3>
          <p className={styles.cardUpdatedAtText}>{updatedAt}</p>
        </div>
        <div className={styles.cardContent}>
          <p className={styles.cardContentText}>{content}</p>
        </div>
        <div className={styles.cardTagContainer}>
          {tags?.map((item, index) => (
            <p className={styles.cardTag} key={index}>
              #{item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
