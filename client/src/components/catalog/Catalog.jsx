import { useEffect, useState } from "react";
import * as ideaService from '../../services/ideaService';
import * as userService from '../../services/userService';

import CatalogItem from "./CatalogItem";
import styles from './Catalog.module.css';

export default function Catalog() {
  const [ideas, setIdeas] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    ideaService.getAll()
      .then(result => setIdeas(result))
      .catch(err => {
        console.log(err);
      });

    userService.getAll()
      .then(result => setUsers(result))
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(ideas);

  return (
    <>
      <header className={`${styles['site-header']} ${styles['section-padding']} ${styles['d-flex']} ${styles['justify-content-center']} ${styles['align-items-center']}`}>
        <div className={styles['container']}>
          <div className={styles['row']}>
            <div className={`${styles['col-lg-10']} ${styles['col-12']}`}>
              <h1>
                <span className={`${styles['d-block']} ${styles['text-primary']}`}>ALL</span>
                <br />
                <span className={`${styles['d-block']} ${styles['text-dark']}`}>DIY projects</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section className={`${styles['products']} ${styles['section-padding']}`}>
        <div className={styles['container']}>
          {ideas.length === 0 && (
            <div>
              <h2>There are no ideas yet...</h2>
            </div>
          )}
          <div className={styles['row']} style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '0.5em'}}>
            {ideas.map(idea => (
              <CatalogItem key={idea._id} {...idea} owner={[Object.values(users).filter(user => user.userId === idea._ownerId)]} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
