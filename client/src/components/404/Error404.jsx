import styles from './Error404.module.css';
export default function Error404 (){
    return (
        <>
        {/* <header className="site-header section-padding-img site-header-image"> */}
        <header className={`${styles['site-header']} ${styles['section-padding-img']} ${styles['site-header-image']}`}>
                <div className={`${styles["container"]}`}>
                    <div className={`${styles["row"]}`}>

                        
                        <div className={`${styles['col-lg-6']} ${styles['col-12']} ${styles['header-info']}`}>
                            <h1>                               
                                <span className={`${styles['d-block']} ${styles['text-primary']}`}>Resource NOT found!</span>
                                <br />
                                <span className={`${styles['d-block']} ${styles['text-dark']}`}>Error 404</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}