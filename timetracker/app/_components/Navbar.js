import Link from "next/link";
import styles from "../_styles/navbar.module.css";

export default function Navbar() {
    let logged = false; //for testing
    let authButton = null;
    if(logged) {
        authButton = "Logged In";
    } else {
        authButton = "Sign In";
    }
    return(
    <div className={styles.bar}>
        <Link href = "/">Home</Link>
        <Link href = "/times">Times</Link>
        <Link href="../auth" style={{marginLeft:"auto"}}>{authButton}</Link>
    </div>
    );
}