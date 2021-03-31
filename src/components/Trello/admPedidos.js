import React, {useState} from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header.jsx";
import Menu from '../Menu/Menu';
import { DndProvider } from "react-dnd";
import PizzaProvider from "../../context/context"
import {HTML5Backend} from "react-dnd-html5-backend";
import './trello.css';
import {Row, Col} from 'react-bootstrap';
import Footer from "../Footer/Footer";

const AdmPedidos = () => {
    
    return (
        <>
        <Menu />
        <Row>
            <Col>
                <DndProvider backend={HTML5Backend}>
                    <PizzaProvider>
                        <Header />
                        <Homepage />
                    </PizzaProvider>
                </DndProvider>
            </Col>
        </Row>
        <Footer />
        </>
    );
};

export default AdmPedidos;