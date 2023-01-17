import React from 'react'
import { Container } from "./About.styled";
import { AppWrap, MotionWrap } from '../Wrapper';
const About = () => {

    //Skriva en ordentligt text! 

    return (
        <Container>
            <h2>About me</h2>
            <div>
                <p>
                    Here you have a soon-to-be frontend developer who is eager to learn more about web development and coding.
                    I am an organized, hardworking and service minded person with a warm heart. I have always had an interest for all the
                    things you can do on the web. Already from a young age I could spend hours on the computer, playing games,
                    make and style blogs, chat with friends etc.
                    This lays the ground for my motivation to become a frontend developer today.
                </p>
            </div>
            <div>
                <p>
                    If I don't sit by the computer I'm probably petting my dog, working out at the gym or playing padel.
                </p>
            </div>
        </Container>
    )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');