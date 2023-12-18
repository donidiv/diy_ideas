
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
        <div className="col-lg-4 col-12">
                            <div className="product-thumb">
                            <Link to={`/ideas/${_id}`}>
                                    <img src={image} className="product-image" alt={name} />
                                </Link>

                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">

                                            <Link to={`/ideas/${_id}`} className="product-title-link">{name}</Link>

                                        </h5>

                                        <p className="product-p"><Link to={`/users/${user}`}>{username}</Link></p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>                       
    );
}