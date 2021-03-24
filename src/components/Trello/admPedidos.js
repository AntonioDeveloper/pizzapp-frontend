import React from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header.jsx";
import Menu from '../Menu/Menu';
import { DndProvider } from "react-dnd";
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
                    <Header />
                    <Homepage />
                </DndProvider>
            </Col>
        </Row>
        <Footer />
        </>
    );
};

export default AdmPedidos;