import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import carta from '../assets/carta-bienvenida.png';

export default function Home() {
  const auth = getAuth();
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div style={{
      backgroundColor: '#fef6f9',
      backgroundImage: 'url(../assets/bg-spring-pastel.png)',
      backgroundSize: 'cover',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'sans-serif',
      color: '#333'
    }}>
      <h1>🌸 Bienvenida, Kurisu</h1>
      <p>Has recibido una nueva carta:</p>
      <img src={carta} alt="Carta de bienvenida" style={{ width: '300px', margin: '1rem 0' }} />
      <br />
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}
