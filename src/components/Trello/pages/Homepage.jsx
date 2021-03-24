import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import { data, statuses } from "../data";
import * as api from '../../../api/apiService';


const Homepage = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [items, setItems] = useState(data);
    
        useEffect(() => {
                
            const getOrders = async () => {
              const orders = await api.getAllOrders();
              setAllOrders(orders);
            };
        
            getOrders();
          }, []);

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);
        
        setItems(prevState => {
            const newItems = prevState
            .filter(i => i.id !== item.id)
            .concat({ ...item, status, icon: mapping.icon });        
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
            {statuses.map(s => {
            /*     console.log(statuses) */
                return (
                    <div key={s.status} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col xs={12} sm={12} md={6} >
                                {allOrders
                                .filter(i => i.status === s.status)
                                .map((i, idx) => <Item key={i.id} moveItem={moveItem} item={i} index={idx} status={s} statuses={statuses}/>
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