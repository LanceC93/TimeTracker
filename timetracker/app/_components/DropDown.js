import styles from "../_styles/dropdown.module.css";

export default function DropDown() {
    return (
        <div id="menu" className={styles.drop}>
            <select>
                <option>+ Add Game</option>
            </select>
        </div>
    );
}