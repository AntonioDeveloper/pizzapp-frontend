import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import {useData} from "../../../context/context";

const Homepage = () => {    
    const {order, statuses} = useData();
    const statusArr = Array.from(statuses)
    const [items, setItems] = useState([]);     
    let newId = 0;
    let counter = 0;

    //Store values in the local storage     
    useEffect(() => {
        const data = localStorage.getItem('data');
        if(data){
            setItems(JSON.parse(data));
        }
    }, []);

   useEffect(() => {
        localStorage.setItem('data', JSON.stringify(order));
    }, [order]);

 /*     useEffect(() => {
        const parsedItems = JSON.parse(localStorage.getItem('data') || []);
        setItems(parsedItems);
    }, []); */

    //console.log(order)
    //console.log(items)

    const onDrop = (item, monitor, status) => {
        const mapping = statusArr.find(si => si.status === status);
        //console.log(mapping);    
        
        setItems(prevState => {
            const newItems = prevState            
            .filter(i => i._id !== item._id)
            .concat({ ...item, status, icon: mapping.icon }); 
            //console.log(...newItems)
            return [ ...newItems ];
        });       
    };
    
    
    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };

    return (
        
        <div className={"row"}>
            {statusArr.map(s => {
                //console.log(statusArr);
                return (
                    <div key={s.status} className={"col-wrapper"}>            
                        <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col xs={12} sm={12} md={6} >
                                {items
                                .filter(i => i.status === s.status)
                                .map((i, idx) => {
                                    newId = counter;
                                    counter++;
                                return <Item key={i._id} moveItem={moveItem} item={i} index={idx} status={s} statuses={statuses} newId={newId}/>
                            }
                                )}
                            </Col>
                        </DropWrapper>
                    </div>
                );
            })}
        </div>
    );
};

export default Homepage;