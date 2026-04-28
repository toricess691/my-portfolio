import myImage from "../assets/my-bed.jpg"
function Blog() 
{
    return(
        <main className = "section">
            <h2> My Blog </h2>
            <p> 
                Welcome to my blog!
                This is what I did during spring break!
            </p>

            <article className = "blog-post">
                <h3> Spring Break 2026 </h3>
                <p>
                    Since I am a full time college student I did not go out much during the spring break as I had no money :\ .
                    What I did do however was work on homework and catch up on sleep that I don't get often.
                    I slept most break days 8+ hours. I normally get 4-6 hours of sleep since I do have to work on my more challenging classes like CS 485 and MATH 480.
                    However, I will be having a family vacation next year as I will have graduated by then!
                </p>
                <img src = {myImage} alt = "A picture of my bed" />
                </article>
        </main>
    );
}

export default Blog;