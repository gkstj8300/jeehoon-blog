import styles from './Profile.module.scss';

export const Profile: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.image} />
                <div className={styles.sub}>
                    <div className={styles.author}>park_jee_hoon</div>
                    <div className={styles.description}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}