import Countdown from "./Countdown";
import styles from "./Countdown.module.css"
import taurus from "./taurus.jpg"
function App() {
  return (
    <div className={styles.App}>
      <h1>Contagem regressiva para a baixa da Turma Taurus</h1>
      <div className={styles.containerImg}>
      <img  src={taurus} alt='Taurus' />
      </div>
      <Countdown />
      
    </div>
    
  );
}

export default App;
