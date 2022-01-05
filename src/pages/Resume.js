import Jumbotron from '../components/Jumbotron';

const Resume = () => {
    const body =
        <div>
            <h1 class="text-center">Philip Buzzanca</h1>
            <p class="text-center">Rocky Point, NY 11778 | <a href="mailto:philipbuzzanca.cs@gmail.com">philipbuzzanca.cs@gmail.com</a> | <a href="https://github.com/philbuzzanca">github.com/philbuzzanca</a></p>

            <section name="Education">
                <h2>Education</h2>
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Stony Brook University</strong></td>
                            <td>Stony Brook, New York</td>
                        </tr>
                        <tr>
                            <td><i>Bachelor of Science, Computer Science</i></td>
                            <td>August 2014 - May 2018</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section name="Projects">
                <h2>Projects</h2>
                <ul>
                    <li><h5><strong>Social Media App</strong></h5>
                        <ul>
                            <li>Full stack web app which allows registered users to write posts, like posts, and leave comments.</li>
                            <li>Responsive user interface developed with React and styled with Semantic UI.</li>
                            <li>Stores, updates, and manages all user data, posts, and comments on a MongoDB database.</li>
                            <li>Implemented an Apollo GraphQL server that uses Node.js and Express to communicate with the database.</li>
                            <li>Hosted online using Netlify and Heroku cloud services at <a href="https://romantic-hawking-d9a38a.netlify.app">netlify.app</a>.</li>
                        </ul>
                    </li>
                    <li><h5><strong>Hockey Elo</strong></h5>
                        <ul>
                            <li>Using Python, analyzed the results of over 20,000 hockey games from the previous 10 NHL seasons to calculate a running skill rating (elo) for each team.</li>
                            <li>Stored skill ratings in PostgreSQL database and used data to construct an easy to comprehend graph comparing team ratings over time.</li>
                            <li>Hosted online using Amazon Web Services at <a href="https://hockeyelo.com">hockeyelo.com</a>.</li>
                        </ul>
                    </li>
                    <li><h5><strong>Un-gerrymander</strong></h5>
                        <ul>
                            <li>Robust web application allowing users to automatically generate new political maps using data from 7,000 precincts in three states.</li>
                            <li>Built using Spring Boot with Java backend. Designed and implemented frontend using Bootstrap 4.0.</li>
                            <li>Developed algorithm to move low-level polling districts from their original electoral district to a more “politically fair” one while preserving district contiguity.</li>
                            <li>Used MySQL transactional database to store original precinct data and update it with any user changes that result from running the algorithm.</li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section name="Skills">
                <h2>Skills</h2>
                <ul>
                    <li>Strong knowledge of object-oriented programming using Java, C, and Python.</li>
                    <li>Well-versed in popular web app frameworks including React, Angular, and Express for Node.js.</li>
                    <li>Strong scripting knowledge in Python, JavaScript, and Bash.</li>
                    <li>Extensive knowledge of database design and RDBMS systems, including MySQL, PostgreSQL, SQLite and NoSQL.</li>
                    <li>Comfortable working with, analyzing, and manipulating large sets of data.</li>
                    <li>Familiar with common web security vulnerabilities and best practices to avoid them.</li>
                    <li>Proficient in Linux, Windows, and macOS environments.</li>
                </ul>
            </section>
            <section name="Accolades">
                <h2>University Accolades and Coursework</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    <li><strong>Honors and Awards:</strong></li>
                                    <ul>
                                        <li>Recipient of Stony Brook Presidential Scholarship for exceptional academic performance.</li>
                                        <li>Dean's List: Fall 2014, Spring 2015; awarded to top 20% of undergraduate students each semester.</li>
                                        <li>Member of Stony Brook University Scholars, a leadership and scholarship focused community available to the top 7% of incoming students.</li>
                                        <li>Invited to Golden Key International Honour Society, an invite-only academic society open to the top performing college students nationwide.</li>
                                    </ul>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section name="Work History">
                <h2>Work History</h2>
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Stop and Shop</strong></td>
                            <td>Miller Place, NY and Southampton, NY</td>
                        </tr>
                        <tr>
                            <td>Produce Clerk</td>
                            <td>May 2015 - Present</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>

    return <Jumbotron body={body} />
}

export default Resume
