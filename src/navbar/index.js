import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Button, FormGroup, Input } from 'reactstrap';

const Navigation = (props) => {
  return (
      <>
    <div className="d-flex justify-content-center bg-light">
      <Nav>
        <NavItem >
          <NavLink className="d-flex p-2" href="#"> Produtos </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="d-flex p-2" href="#"> Valores e Missões </NavLink>
        </NavItem >
        <NavItem>
          <NavLink className="d-flex p-2" href="#"> Perguntas Frequentes </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="d-flex p-2" href="#"> Contato </NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>

    <div className="d-flex container mt-3 w-100 justify-content-center" >
    <FormGroup className="d-flex justify-content-center w-75">
        <Input placeholder="Procurar" className=""/>
        <Button className=""> Pesquisar </Button>
      </FormGroup>
    </div>
    </>
  );
}

export default Navigation;