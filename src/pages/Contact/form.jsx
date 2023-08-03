import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import emailjs from 'emailjs-com';
import { useMediaQuery } from 'react-responsive';

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
  margin-top: 2em;
  margin-bottom: 3em;
`
const InputForm = styled.input`
  width: 21em;
  margin-bottom: 10px;
`
const MessageFrom = styled.textarea`
  height: 10em;
`
const MessageFromMobile = styled.textarea`
  height: 10em;
  width: 21em;
`
const FlexInputs = styled.div`
display: flex;
align-content: center;
flex-direction: column;
flex-wrap: wrap;
`

function Form() {
  const [formStatus, setFormStatus] = React.useState('ENVOYER');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('ENVOI EN COURS...');
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
          setFormStatus('MESSAGE ENVOYÉ!');
        },
        (error) => {
          console.error("ECHEC DE L'ENVOI DE L'EMAIL:", error);
          setFormStatus("ECHEC DE L'ENVOI");
        }
      );
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
    {isMobile? (
      <div className="container mt-5">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <FlexInputs>
              <Label>Nom et Prénom :</Label>
              <InputForm className="form-control" type="text" id="name" required />
            </FlexInputs>
          </div>
          <div className="mb-3">
            <FlexInputs>
              <Label>Email :</Label>
              <InputForm className="form-control" type="email" id="email" required />
            </FlexInputs>
          </div>
          <div className="mb-3">
            <FlexInputs>
              <Label>Message :</Label>
              <MessageFromMobile className="form-control" id="message" required />
            </FlexInputs>
          </div>
          <Flex>
            <SendButton type="submit">{formStatus}</SendButton>
          </Flex>
        </form>
      </div>
    ) : (
      <div className="container mt-5">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <FlexInputs>
              <Label>Nom et Prénom :</Label>
              <InputForm className="form-control" type="text" id="name" required />
            </FlexInputs>
          </div>
          <div className="mb-3">
            <FlexInputs>
              <Label>Email :</Label>
              <InputForm className="form-control" type="email" id="email" required />
            </FlexInputs>
          </div>
          <div className="mb-3">
            <FlexInputs>
              <Label>Message :</Label>
              <MessageFrom className="form-control" id="message" required />
            </FlexInputs>
          </div>
          <Flex>
            <SendButton type="submit">{formStatus}</SendButton>
          </Flex>
        </form>
      </div>
      )}
    </>
  );
}

export default Form;
