import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>COmments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a COmment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image
                src='/p1.jpeg'
                alt='usr-img'
                width={50}
                height={50}
                classNames={styles.image}
                />
                <div className={styles.userInfo}>
                    <span className={styles.username}>Raghav</span>
                    <span className={styles.date}>01.01.01</span>
                </div>
            </div>
            <p className={styles.desc}>
                some description
            </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
