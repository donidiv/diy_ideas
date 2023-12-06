import styles from './CatalogItem.module.css';
export default function CatalogItem ({
    name,
    category,
    image,
    desription,
}) {
    return (
        <div className="col-lg-4 col-12">
                            <div className="product-thumb">
                                <a href="/:ideaId/details">
                                    <img src={image} className="product-image" alt={name} />
                                </a>



                                <div className="product-info d-flex">
                                    <div>
                                        <h5 className="product-title mb-0">
                                            <a href="/:ideaId/details" className="product-title-link">{name}</a>
                                        </h5>

                                        <p className="product-p"><a href="/:userId/details">owner`s name</a></p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>                       
    );
}