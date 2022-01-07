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
                width="160"
                style={{ float: "right", borderRadius: "10%", marginLeft: "20px", marginBottom: "20px", filter: "grayscale(0%)" }}
            />

            <p>Traveler. Problem solver. Developer.</p>

            <p>A longtime puzzle game enthusiast with a love for numbers, Philip has always been fascinated by the problem-solving capabilities of modern computers. While studying at Stony Brook University, he expanded on this knowledge and earned a Bachelor of Science in computer science. Philip became passionate about big data, statistics, and algorithm development, and is looking to apply his skills in web development, software development, and data analysis.</p>

            <p>When not working with computers, Philip enjoys staying active. His hobbies include playing tennis and going bowling, as well as rock climbing and strength training. His other interests include computer security, finance, and sports.</p>

        </>

    const footer =
        <div>
            email: <a href="mailto:philipbuzzanca.cs@gmail.com">philipbuzzanca.cs@gmail.com</a> GitHub: <a href="https://www.github.com/philbuzzanca">github.com/philbuzzanca</a>{'     '}LinkedIn: <a href="https://www.linkedin.com/in/philipbuzzanca">linkedin.com/in/philipbuzzanca</a>
        </div>

    return <Jumbotron header="Philip Buzzanca" body={body} hr={true} footer={footer} />
}

export default Home
