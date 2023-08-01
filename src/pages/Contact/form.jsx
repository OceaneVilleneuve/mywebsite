import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import emailjs from 'emailjs-com';

const Label = styled.label`
  font-family: 'Roboto Mono',monospace;
  font-size: 12px;
`

const SendButton = styled.button`
  background-color: ${colors.button};
  border: none;
  border-radius: 25px;
  padding: 16px 43px;
  font-family: 'Space Mono',monospace;
  font-size: 12px;
`
const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4em;
`

function Form() {
  const [formStatus, setFormStatus] = React.useState('ENVOYER');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;

    // Send the form data to EmailJS
    emailjs
      .send(
        'service_ez46afr', // Replace with your EmailJS service ID
        'template_m82rppg', // Replace with your EmailJS template ID
        {
          from_name: name.value,
          reply_to: email.value,
          message: message.value,
        },
        'l0FUOUOrma9W3qPJ8' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Email envoyé avec succès:', response);
          setFormStatus('Message Envoyé!');
        },
        (error) => {
          console.error("Echec de l'envoi de l'email:", error);
          setFormStatus("Echec de l'envoi");
        }
      );
  };

  return (
    <div className="container mt-5">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <Label>Nom</Label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <Label>Email</Label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <Label>Message</Label>
          <textarea className="form-control" id="message" required />
        </div>
        <Flex>
          <SendButton type="submit">{formStatus}</SendButton>
        </Flex>
      </form>
    </div>
  );
}

export default Form;
