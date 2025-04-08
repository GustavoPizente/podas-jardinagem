import Folha from "./Components/Folha";
import Slider from "./Components/Slider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <title>Podas e Jardinagem</title>

      <div className={styles.header}>
        <h1 className={styles.title}>
          Podas, Jardinagem e <br></br> Limpeza de Terreno
        </h1>
        <Folha/>
      </div>
      <main className={styles.main}>
        <div className={styles.cartao} ><a href="https://w.app/hdbpuy" > <img src="./cartao.png"></img></a></div>
        <Slider />
      </main>
      <footer className={styles.footer}>
        <h3>
          Florianópolis/Sul da Ilha
        </h3>
      </footer>
    </div>
  );
}
