import { useState } from 'react';

function useForm(valoresIniciais) {

  const [values, setValues] = useState(valoresIniciais);
 /*  const [sabores, setSabores] = useState([]); */

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
      );
      //console.log(infosDoEvento.target.value);
  }

  /* function handleSabores(infosDoEvento) {

      setSabores(
      infosDoEvento.target.getAttribute('sabor'),
      infosDoEvento.target.value);
     
      console.log(sabores);
  } */

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
   /*  handleSabores */
  };
}

export default useForm;