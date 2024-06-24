import styles from "../_styles/card.module.css";

export default function Card() {
    return(
    <div className={styles.card}>
        <h2 className="title">Title</h2>
        <p>0:37:57 recorded</p>
    </div>
    );
}