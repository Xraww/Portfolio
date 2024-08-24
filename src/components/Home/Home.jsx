import "./Home.scss"
import pp from "/images/profile.jpg"

function Home() {
    return (
        <div id="home">
            <div className="introducing">
                <div className="left">
                    <p id="job">Développeur Web</p>
                    <h1>Xraww</h1>
                    <p>Alexis</p>
                </div>

                <div className="right">
                    <img src={pp} alt="Profile picture"/>
                </div>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique fugiat rerum, aspernatur voluptatem quas animi nisi dolores, officia excepturi tenetur quisquam praesentium ipsam soluta necessitatibus rem delectus esse iste alias vitae placeat nostrum laborum voluptate pariatur. Nihil aliquid dolore esse.</p>
        </div>
    )
}

export default Home;