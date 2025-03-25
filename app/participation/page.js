import classes from './participation.module.css'

export default function Participation(){
    return(
        <>
        <header className={classes.header}>
            <div className={classes.hero}>
                <h1>Get Involved & Share Your Passion for Food!</h1>
            </div>
        </header>
          <section className={classes.section}>
            <p>Love cooking? Have a recipe that deserves the spotlight? Join our community and be part of a growing network of food lovers who share, learn, and inspire each other.</p>
            <p>


            How to Participate?<br/>
            <br/>
🔹 Share Your Recipes –  Upload your favorite dishes with step-by-step instructions and mouthwatering photos.<br/>
🔹 Discover & Try – Explore a variety of recipes from fellow food lovers and recreate them in your kitchen.<br/>
🔹 Engage with the Community – Comment, like, and share your thoughts on recipes you love.<br/>
🔹 Earn Recognition – Gain appreciation for your creativity and even get featured on our homepage!<br/>
            </p>
            <p>
            Why Join Us?<br/><br/>
🍽️ Showcase Your Culinary Skills – Whether you’re a home cook or a professional, your recipes deserve an audience.<br/>
📖 Learn & Grow – Get new ideas, cooking tips, and inspiration from a vibrant food community.<br/>
🤝 Make Connections – Meet like-minded foodies and exchange experiences.<br/>
            </p>
          </section>
        </>
    )
}