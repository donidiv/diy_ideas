
import { Link } from 'react-router-dom';
import styles from './CatalogItem.module.css';
export default function CatalogItem ({
    _id,
    name,
    category,
    image,
    desription,
    owner
}) {
    console.log(...(owner[0]));
    const username = owner[0][0]?.username;
    const user = owner[0][0]?._id;
    console.log(username);
    return (
        <div className={`${styles['col-lg-4']} ${styles['col-12']}`}>
          <div className={styles['product-thumb']}>
            <Link to={`/ideas/${_id}`}>
              <img src={image} className={styles['product-image']} alt={name} />
            </Link>
    
            <div className={`${styles['product-info']} ${styles['d-flex']}`}>
              <div>
                <h5 className={`${styles['product-title']} ${styles['mb-0']}`}>
                  <Link to={`/ideas/${_id}`} className={styles['product-title-link']}>
                    {name}
                  </Link>
                </h5>
    
                <p className={styles['product-p']}>
                  <Link to={`/users/${user}`}>{username}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}