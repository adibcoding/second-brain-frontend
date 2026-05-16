import styles from './profile.module.css';
import Image from 'next/image';

interface ProfileProps {
  profileUrl?: string;
}


export default function Profile({ profileUrl }: ProfileProps) {
  return (
    <>
      <div className={styles.profileContainer}>
        <img className={styles.imgProfile} src={profileUrl || "/image.png"} alt="Profile Picture"></img>
        <div className={styles.profileTextContainer}>
          <h2 className={styles.profileTitleText}>Digital Garden</h2>
          <p className={styles.profileDescText}>Slow Growth Ideas</p>
        </div>
      </div>
    </>
  );
}
