import PropTypes from "prop-types"
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Avatar } from "antd";
import LevelButton from "../buttons/level-button";

const CreateArmeModal = ({listArmes}) =>{
    const [armeChoisi,setArmeChoisi] = useState();
    const [armeChoosed,setArmeChoosed] = useState(false);
    const [levelArme,setLevelArme] = useState(0);
    const [raffinement,setRaffinement] = useState(0);

    function onArmeClick(armeChoisi) {
        setArmeChoisi(armeChoisi);
        setArmeChoosed(true);
    }

    return(
        <>
        {!armeChoosed &&
            <Row xs={6}>
                { listArmes.map((arme) => {
                    //console.log("personnage",personnage);
                    return (
                    <Col key={arme.entryPageId}>
                        <Button className="bg-transparent border-0 p-2" onClick={() => onArmeClick(arme)}>
                            <Avatar src={arme.iconUrl} className={"bg-rarity-"+arme.rarity} style={{border: "none", width:"auto", height:"auto"}}></Avatar>
                        </Button>
                    </Col>
                    );
                })}
            </Row>
        }
        {armeChoosed &&
            <Container>
                <Row>
                    <Col xs="auto"><Avatar size={56} src={armeChoisi.iconUrl} className={"bg-rarity-"+armeChoisi.rarity} style={{border: "none"}}></Avatar></Col>
                    <Col className="text-size-20px align-self-center margin-left-14px">{armeChoisi.name}</Col>
                </Row>
                <Row className="mt-3">
                    <Form.Group as={Col} className="me-3">
                        <div className="title text-center">Niveau</div>
                        <LevelButton className="margin-top-19px" setLevel={setLevelArme} min={0} max={90}></LevelButton>
                    </Form.Group>
                    <Form.Group as={Col} className="ms-3">
                        <div className="title text-center">Raffinement</div>
                        <LevelButton className="margin-top-19px" setLevel={setRaffinement} min={0} max={5}></LevelButton>
                    </Form.Group>
                </Row>
            </Container>
        }
        </>
    )
}

CreateArmeModal.propTypes = {
  listArmes: PropTypes.array
}

export default CreateArmeModal;