import React, {useState} from "react";
import {Form, FormControl, Button} from 'react-bootstrap';
import {searchBar} from '../../../api/apiService';

const Header = () => {
const [enableCPF, setEnable] = useState(false);

const switchState = () => {
    if(enableCPF === false){
        setEnable(true);
    } else {
        setEnable(false)
    }
}

//console.log(enableCPF)

    let textInput = React.createRef();

const getParams = (e) => {
    let typeDataInput= '';
   e.preventDefault();
   if(enableCPF === false){
    typeDataInput = 'id';
   } else {
       typeDataInput = "cpf";
   }
   const values = {
       type: typeDataInput,
       value: textInput.current.value
   }
   searchBar(values);   
   //console.log(typeDataInput) 
}

    return (
        <div className={"row"}>
            <p className={"page-header"}>Digite o CPF do cliente ou nº do pedido 🗂</p>
            <Form inline >
            <Form.Check 
                type="switch"
                id="custom-switch"
                label="Habilitar/desabilitar a busca por CPF" 
                //checked={enableCPF}
                onClick={switchState}               
            />
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" ref={textInput} />
                <Button type="submit" onClick={getParams}>Submit</Button>
            </Form>
        </div>
    );
};

export default Header;