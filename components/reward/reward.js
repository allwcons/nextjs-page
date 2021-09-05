import styles from './style.module.css';
import Link from 'next/link';

function Reward() {
  return (
    <>
      <div className={styles.reward__brand}>
        <div className={styles.reward__logo}>
          <img src="https://cdn.glitch.com/95f7c16f-2ead-449a-b1a5-ccc13ce52630%2Ffreefire.jpg?v=1628512794818" />
        </div>
        <div className={styles.reward__tilte}>FREE FIRE</div>
      </div>
      <p className={styles.paragraph}>Claim rewards</p>
      <Link href="/claim">
        <a className={styles.reward_button}>Claim</a>
      </Link>
    </>
  );
}

export default Reward;
