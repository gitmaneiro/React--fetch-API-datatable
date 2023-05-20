import React, {useState, useEffect} from 'react';
import './App.css';
import 'styled-components'
import DataTable, {createTheme} from 'react-data-table-component';

const App= ()=> {

  //1- Configurar los hooks
    const [users, setUsers]= useState([])

  //2- funcion para mostrar los datos con fetch
    const showData= async ()=>{
        const resp= await fetch('https://gorest.co.in/public/v2/users')
        const data = await resp.json()
        console.log(data);
        setUsers(data)
    }

    useEffect(()=>{
      showData();
    }, [])

  //3- configurar los columns para datatable

  const columns=[
    {
      name:'ID',
      selector:row=> row.id
    },
    {
      name:'NAME',
      selector:row=> row.name
    },
    {
      name:'E_MAIL',
      selector:row=> row.email
    }
  ]


  //4- mostramo la data en datatable

  return (
    <div className="App">
      <h1>Api Fetch React</h1>
      <DataTable 
        columns={columns}
        data={users}
        pagination
      />
    </div>
  );
}

export default App;
