import React, { useRef } from 'react';
import './contact.css';
import styled from 'styled-components';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import emailjs from 'emailjs-com';

emailjs.init("service_re2lixm");

const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    margin-left: 40%;

    input, textarea {
      width: 100%;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-height: 100px;
      min-height: 100px;
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      //blue
      color: white;
      border: none;
    }
  }
`;

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_re2lixm", "template_m9zgrk3", form.current, "njzEQLK5Hhv2uKM1W")
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent!");
                },
                (error) => {
                    console.error(error.text);
                    alert("Failed to send message.");
                }
            );
    };

    return (
        <section id='contact'>
            <h2 className='contacttitle'> N'hésitez pas à me contacter</h2>
            <br></br>
            <pw className='contactinfo'>Vous pouvez me contacter par Linkedin ou en remplissant le mail</pw>
            <br></br>
            <br></br>
            <div className='barcontact'>
                <div className='block'>
                <a href='https://github.com/seilaaillet' target='blank'>
                    <FaGithubSquare className="git" size={200} color='pink'></FaGithubSquare>
                </a>
                <a href='https://www.linkedin.com/in/seila-aillet/' target='blank'>
                    <FaLinkedin size={200} color='royalblue'></FaLinkedin>
                </a>
                </div>
                <StyledContactForm>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </StyledContactForm>

            </div>
        </section>

    );
};

export default Contact;
