import React from 'react'
import { Container, DivForm, DivSocials } from './Contact.styled';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { BsGithub, BsLinkedin, BsDownload } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';
import CV from "../../assets/LinaJepsenCV.pdf";

const Contact = () => {

    const SERVICE_ID = "service_ze3pyxa";
    const TEMPLATE_ID = "template_thelfdq";
    const USER_ID = "pp3FxAfm7_Fl21qtd";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };

    return (
        <Container id="contact">
            <h2>Get in touch</h2>
            <p>Wanna know more or have any questions? Send me a message!</p>
            <DivForm>
                <Form className="form" onSubmit={handleOnSubmit}>
                    <Form.Field
                        id='form-input-control-email'
                        control={Input}
                        label='Email'
                        name='from_email'
                        required
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Name'
                        name='from_name'
                        required
                    />
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Message'
                        name='message'
                        required
                    />
                    <Button type='submit' color='green'>Send</Button>
                </Form>
            </DivForm>
            <DivSocials>
                <motion.div className="social-icon"
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}>
                    <a title="Github" href="https://github.com/LinaJepsen">
                        <BsGithub />
                    </a>
                </motion.div>
                <motion.div className="social-icon"
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}>
                    <a title="LinkedIn" href="https://www.linkedin.com/in/lina-jepsen-433457132/">
                        <BsLinkedin />
                    </a>
                </motion.div>
                <motion.div className="social-icon"
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}>
                    <a title="Download resume" className="resume" href={CV} download="LinaJepsenCV" target="_blank">
                        <BsDownload />
                    </a>
                </motion.div>
                <motion.div className="social-icon"
                    whileHover={{ scale: [null, 1.5, 1.4] }}
                    transition={{ duration: 0.3 }}>
                    <a title="linajepsen@live.se" className='mail' href="mailto:linajepsen@live.se">
                        <HiOutlineMail />
                    </a>
                </motion.div>
            </DivSocials>
        </Container>
    )
}

export default Contact;

