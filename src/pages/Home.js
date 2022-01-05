import Image from 'react-bootstrap/Image';

import Jumbotron from '../components/Jumbotron';
import headshot from '../assets/face.PNG'

const Home = () => {
    const body =
        <>
            <Image
                className="float-right"
                alt="..."
                src={headshot}
                width="133"
                style={{ float: "right", borderRadius: "10%", marginLeft: "20px", marginBottom: "20px", filter: "grayscale(0%)" }}
            />

            <p>Traveler. Problem solver. Learner.</p>

            <p>A longtime puzzle game enthusiast with a love for numbers, Philip has always been fascinated by the problem-solving capabilities of modern computers. While studying at Stony Brook University, he expanded on this knowledge and earned a Bachelor of Science in computer science. Philip became passionate about big data, statistics, and algorithm development, and is looking to apply his skills in web development, software development, and data analysis.</p>

            <p>When not working with computers, Philip enjoys staying active. His hobbies include playing tennis and going bowling, as well as rock climbing and strength training. His other interests include computer security, finance, and sports.</p>

        </>

    return <Jumbotron header="Philip Buzzanca" body={body} />
}

export default Home
