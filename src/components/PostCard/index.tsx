import { Avatar } from '../Avatar';
import { Divider } from '../Divider';
import styles from './styles.module.css';

export const PostCard = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.profile}>
        <Avatar avatar="https://conteudo.imguol.com.br/c/noticias/58/2022/05/24/o-deputado-federal-tiririca-pl-sp-e-o-recem-filiado-eduardo-bolsonaro-1653435754990_v2_3x4.jpg" />

        <div className={styles.profileInfo}>
          <h1>Tiririca</h1>
          <span>Comediante</span>
        </div>
      </div>

      <span className={styles.publishedAt}>Públicado há 1h</span>
    </div>

    <div className={styles.content}>
      <p>
        Fala galeraa 👋
        <br />
        <br />
        Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        <br />
        <br />
        👉
        {' '}
        <a href="jane.design/doctorcare" title="Link">jane.design/doctorcare</a>
        <br />
        <br />
        <span>#novoprojeto</span>
        {' '}
        <span>#nlw</span>
        {' '}
        <span>#rocketseat</span>
      </p>
    </div>

    <Divider />
  </div>
);
