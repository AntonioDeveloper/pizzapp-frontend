import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../data/types";

const Item = ({ item, index, moveItem, status}) => {  
    //console.log(item)
    //console.log(moveItem)
    //console.log(status)
    const ref = useRef(null);
    
    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            
            if (dragIndex === hoverIndex) {
                return
            }
            
            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;
            
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },        
    });
    
    const [{ isDragging }, drag] = useDrag({
        type: ITEM_TYPE, 
        item: {...item, index },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }); 
    
    const [show, setShow] = useState(false);
    
    const onOpen = () => setShow(true);
    
    const onClose = () => setShow(false);
    
    drag(drop(ref));
    //console.log(item)
    
    return (
        <Fragment>
            <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={"item"}
                onClick={onOpen}
            >
                <div className={"color-bar"} style={{ backgroundColor: status.color }}/>
                <p className={"item-title"}>Pedido nº {item._id}</p>
                <p>Cliente: {item.clientId}</p>
                <p>Status: {item.status}</p>
                <p>Inteira?: {item.split}</p>
                <p>Molho extra?: {item.extraSauce}</p>
                <p>Sabor: {item.pizza}</p>
                <p>Massa: {item.dough}</p>
                <p>Observações: {item.message}</p>
                <p>Endereço de entrega: {item.delivery_address}</p>
                <p className={"item-status"}>{item.icon}</p>
            </div>
            <Window
                item={item}
                onClose={onClose}
                show={show}
            />
        </Fragment>
    );
};

export default Item;