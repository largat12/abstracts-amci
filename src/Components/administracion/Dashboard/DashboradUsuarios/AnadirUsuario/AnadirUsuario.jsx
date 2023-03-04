import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ContextAppAdministracion } from "../../../../../context/ContextAppAdministracion";
import { FormularioAnadirUsuario } from "./FormularioAnadirUsuario/FormularioAnadirUsuario";

export const AnadirUsuario = () => {

  const {cambioDashboard, buscarAnadirUsuario} = useContext(ContextAppAdministracion)

  return (
    <Container fluid className="h-100 p-4 detalles-investigacion">
      <Row>
        <Col xs={12}>
          <Container fluid className="m-0 p-0">
            <Row className="m-0 p-0">
              <Col
                xs={12}
                className="p-0 d-flex align-items-center align-content-center"
              >
                <Button onClick={(e)=>{e.preventDefault();cambioDashboard('usuarios')}} className="btn-custom" style={{ marginRight: "10px" }}>
                  <p>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    Atras
                  </p>
                </Button>
                <h1>Agregar usuario</h1>
              </Col>
            </Row>
          </Container>
          <FormularioAnadirUsuario buscarAnadirUsuario={buscarAnadirUsuario}/>

        </Col>
      </Row>
    </Container>
  );
};
