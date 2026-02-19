import styles from './FoodCategory.module.css';

function FoodCategory({ title, icon, items }) {
    return (
        <div className={styles.category}>
            <div className={styles.header}>
                <span className={styles.icon}>{icon}</span>
                <div className={styles.titleGroup}>
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.divider} />
                </div>
            </div>

            <div className={styles.grid}>
                {items}
            </div>
        </div>
    );
}

export default FoodCategory;
