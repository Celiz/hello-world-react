import styles from './Card.module.css';

export const Card = ({ name, surname, image }) => {
    return (
        <section className={styles.profileCard}>
            <div className={styles.profileCardContent}>
                <img src={image} alt="avatar" className={styles.profileImage} />
                <div className={styles.profileInfo}>
                    <p className={styles.profileName}>{name} {surname}</p>
                </div>
            </div>
        </section>
    );
};

export default Card;
