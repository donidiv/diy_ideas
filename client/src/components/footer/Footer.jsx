import styles from './Footer.module.css';
export default function Footer () {
    return (
        <footer className={styles['site-footer']}>
            <div className={styles['container']}>
                <div className="row">

                    <div className="col-lg-3 col-10 me-auto mb-4">
                        <h4 className="text-white mb-3"><a href="index.html">DIY</a> Ideas</h4>
                        <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">Copyright © 2023 <strong>DIY Ideas</strong></p>
                        <br/>
                        <p className="copyright-text">Designed by <a href="https://github.com/donidiv" rel="noreferrer" target="_blank">donidiv</a></p>
                    </div>

                    <div className="col-lg-3 col-4">
                        <h5 className="text-white mb-3">Social</h5>

                        <ul className="social-icon">

                            <li><a href="#" className="social-icon-link bi-youtube"></a></li>

                            <li><a href="#" className="social-icon-link bi-whatsapp"></a></li>

                            <li><a href="#" className="social-icon-link bi-instagram"></a></li>

                            <li><a href="#" className="social-icon-link bi-skype"></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}