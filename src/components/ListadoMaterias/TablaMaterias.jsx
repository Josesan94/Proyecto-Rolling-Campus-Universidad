import React, { useEffect, useMemo, useState } from "react";
import tw,{styled} from 'twin.macro';
import axios from "axios";
import {useGlobalFilter,useFilters, useSortBy, useTable} from 'react-table';
import GlobalFilter from './filtros'
import FilterColumns from "./columnFilter";

const Table = styled.table`
margin:2rem;






 
`;

const TableHead = tw.thead`
  p-2
`;

const TableRow = tw.tr`
border
border-green-500
`;

const TableHeader = tw.th`
border
border-green-500
p-2
`;

const TableBody = tw.tbody`
border
`;

const TableData = tw.td`
border
border-green-500
p-5
`;

const Button = tw.button`
  pl-4
  pr-4
  pt-2
  pb-2
  text-black
  rounded-md
  bg-green-300
  hover:bg-green-200
  transition-colors
`;


const MateriasTable = (props) => {


  const [products, setProducts] = useState([]);
  
  const [materia, setMateria] = useState(null);
  const [addMateria, setAddMateria] = useState(initialState);

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    .catch(err => console.log("error",err))

    if(response ) {
      const products = response.data;

      console.log("products",products);
      setProducts(products);
    }
  };

  const handleAddMateria = async () => {
      e.preventDefault();
    const response = await axios.post(URL,materia)
    console.log(response.data)
    

    const fieldName = e.target.getAttribute('name'); //obtenemos el nombre del input
    const fieldValue = e.target.value ;//obtenemos el valor del input


    const newFormData = {...addMateria} // hacemos una copia del form existente de modo que podamos cambiarlo sin mutar el estado

    newFormData[fieldName] = fieldValue; //actualizamos el objeto con el nuevo valor que el usuario escribio

    setAddMateria(newFormData);



    fetchProducts()
    setMateria()

  }


 



  useEffect(() => {
    fetchProducts()
  },[])

const isEven = (idx) => idx%2 === 0;


  

  
  const productsData = useMemo (()  => [...products], [products])

  const productsColumns = useMemo(() => products[0] ? Object.keys(products[0]).filter((key) => key !== "rating")
  .map((key) =>{
    if(key === "image") return {
      Header:key,
      accessor:key,
      Cell: ({ value }) => <img  src={value} width={70} />,
      
 
    }

    return {Header:key, accessor:key};
  }) : [ ], [products]);

  const tableHooks = ( hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id:"Edit",
        Header:'Edit',
        Cell: ({row} ) => (
          <Button onClick={() => alert("Editing:"+ row.values.category)}>
            Edit
          </Button>
        )
      }
    ])
  }

  const tableInstance = useTable({columns:productsColumns, data:productsData },useFilters, useGlobalFilter, tableHooks, useSortBy)

   const { getTableProps, getTableBodyProps,headerGroups,rows,prepareRow, preGlobalFilteredRows, setGlobalFilter , state } = tableInstance ;


  return (
    <>
     <h2>Añadir Materia</h2>
            <form className="data-form" onSubmit={handleAddForm}>
                <input style={{border:"1px solid black"}} type="text" name="Materia" required="required" placeholder="coloque la materia" onChange={handleAddData}/>
                <input style={{border:"1px solid black"}} type="text" name="año" required="required" placeholder="Año de cursado"  onChange={handleAddData}/>
                <input  style={{border:"1px solid black"}} type="text" name="nota" required="required" placeholder="Nota"  onChange={handleAddData}/>
                <button type="submit">Añadir</button>
            </form>
    <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} setGlobalFilter ={setGlobalFilter} globalFilter ={state.globalFilter} />
    <Table {...getTableProps()}>
     <TableHead>
       {headerGroups.map((headerGroup) => (
         <TableRow {...headerGroup.getHeaderGroupProps()} >
           {headerGroup.headers.map((column) => (
             <TableHeader {...column.getHeaderProps(column.getSortByToggleProps())}>
               {column.render("Header")}
               {column.isSorted ? (column.isSortedDesc ? "▼" :"▲") : ""}
             </TableHeader>
           ))}

         </TableRow>
       ))}
     </TableHead>
     <TableBody   {...getTableBodyProps()}>
       {rows.map((row,idx) => {
         prepareRow(row)
           
         return (
         <TableRow {...row.getRowProps()} className={isEven(idx) ? "bg-dark bg-opacity-10" : ""}
         >

           { row.cells.map((cell, idx) => (
            <TableData  {...cell.getCellProps()}>
              {cell.render("Cell")}
            </TableData>
          ))}
          </TableRow> )
        })}

     </TableBody>
    </Table>
    </>
  )


}


export default  MateriasTable;