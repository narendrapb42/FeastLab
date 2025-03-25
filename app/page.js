import Link from "next/link";
import classes from './page.module.css'
import ImageSlideshow from "./components/images/image-slideshow";

export default function Home() {
  return (
    <>
    <header className={classes.header}>
      <div className={classes.slideshow}>
        <ImageSlideshow/>
      </div>
      <div>
        <div className={classes.hero}>
          <h1>FeastLab</h1>
          <p>Taste and share food from all over the world</p>
        </div>
        <div className={classes.cta}>
          <Link href='/community'>Join the community</Link>
          <Link href='/meals'>Explore Meals</Link>
        </div>
      </div>
    </header>
    <main>
    <section className={classes.section}>
          <h2>How it works</h2>
          <p>
          FeastLab is your go-to platform for discovering and sharing amazing recipes. Whether you're a home cook or a passionate foodie, you can explore new dishes, share your favorite creations, and connect with a community that loves food as much as you do.
          </p>
          <p>
          FeastLab is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why FeastLab?</h2>
          <p>
          FeastLab is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
          FeastLab is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
    </main>
    </>
  );
}
