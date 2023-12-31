import styles from './About.module.css';

export default function About() {
  return (
    <>
      <header className={`${styles['site-header']} ${styles['section-padding-img']} ${styles['site-header-image']}`}>
        <div className={styles['container']}>
          <div className={styles['row']}>
            <div className={`${styles['col-lg-6']} ${styles['col-12']} ${styles['header-info']}`}>
              <h1>
                <span className={`${styles['d-block']} ${styles['text-primary']}`}>DIY</span>
                <span className={`${styles['d-block']} ${styles['text-dark']}`}>Ideas</span>
              </h1>
            </div>
          </div>
        </div>
        <img
          src="images/header/volodymyr-proskurovskyi-ZlPeHjYoAdU-unsplash.jpg"
          className={`${styles['header-image']} ${styles['img-fluid']}`}
          alt=""
        />
      </header>

      <section className={`${styles['team']} ${styles['section-padding']}`}>
        <div className={styles['container']}>
          <div className={styles['row']}>
            <p>Why DIY Ideas?</p>

            <div>
              We understand the thrill of transforming ordinary materials into extraordinary creations. Whether you`re a
              seasoned DIY enthusiast or just starting your crafting journey, we`re here to fuel your imagination and
              guide you through projects that range from simple and quick to complex and rewarding.
            </div>

            <p>What Sets Us Apart:</p>

            <ul>
              <li className={styles['list-item']}>
                Diverse Ideas: Explore a wide array of DIY projects, from home decor and fashion to tech hacks and
                gardening. We curate ideas that cater to various interests and skill levels.
              </li>
              <li className={styles['list-item']}>
                Step-by-Step Guides: Our detailed tutorials make even the most intricate projects manageable. We break
                down each step, ensuring that you can confidently embark on your DIY adventure.
              </li>
              <li className={styles['list-item']}>
                Community Support: Join a thriving community of like-minded creators. Share your projects, seek advice,
                and connect with fellow DIY enthusiasts who understand the joy of making.
              </li>
            </ul>

            <p>Who Are We?</p>

            <div>
              We`re a passionate team of DIY enthusiasts with a shared love for turning imagination into reality. Our
              contributors bring a wealth of expertise, ensuring that every project on DIY Ideas is not only fun but
              also achievable.
            </div>

            <p>Get Involved:</p>

            <ul>
              <li className={styles['list-item']}>
                <strong>Explore:</strong> Browse through our extensive collection of DIY ideas and find your next
                project.
              </li>
              <li className={styles['list-item']}>
                <strong>Create:</strong> Roll up your sleeves and bring your ideas to life. Our guides are here to
                assist you every step of the way.
              </li>
              <li className={styles['list-item']}>
                <strong>Connect:</strong> Join our community on social media. Share your creations, exchange tips, and
                be a part of the DIY revolution.
              </li>
            </ul>

            <p>
              Thank you for choosing DIY Ideas as your creative companion. Let`s embark on this DIY journey together
              and turn ordinary moments into extraordinary memories.
            </p>

            <p>Happy crafting!</p>

            <p>
              <strong>The DIY Ideas Team</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
