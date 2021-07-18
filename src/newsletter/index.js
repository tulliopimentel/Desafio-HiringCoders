import React, {useState} from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const NewsLetter = (props) => {

  const [email, setEmail] = useState();

  const Armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor);
  }

  return (
    <div className="card p-2 container w-50">
    <div className="d-flex Card-Header w-100"> Gostaria de saber mais sobre as promoções? 
     Assine nossa NewsLetter e fique por dentro de tudo! </div>
    <Form>
      <FormGroup className="d-flex w-100 p-2">
        <Label for="exampleEmail" className="d-flex p-2"> Email </Label>
        <Input type="email" name="email" id="email" placeholder="e-mail" onChange={(e) => setEmail(e.target.value)}/>
        <button type="button" name="send" id="send" onClick={() => Armazenar('email', email)} > Enviar </button>
      </FormGroup>
    </Form>
    </div>
  )};



export default NewsLetter;