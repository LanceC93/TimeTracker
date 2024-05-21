import Link from "next/link";
import styles from "../_styles/navbar.module.css";

export default function Navbar() {
    return(
    <div className={styles.bar}>
        <Link href = "/">Home</Link>
        <Link href = "/times">Times</Link>
    </div>
    );
}