import styles from "../_styles/card.module.css";

export default function Card(props) {
    return(
    <div className={styles.card}>
        <h2 className="title">{props.title}</h2>
        <p>{props.time} recorded</p>
    </div>
    );
}