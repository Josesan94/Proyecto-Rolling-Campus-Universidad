import React , {useState}from "react";
import { useAsyncDebounce } from "react-table";
import tw from "twin.macro";

const SearchContainer = tw.div `
  mb-6
  mt-6
  flex
  items-center
`;

const SearchText = tw.h2`
  text-xl
  text-gray-600
  mr-6


`;

const Input = tw.input `

  h-8
  border-2
  border-solid
  border-green-500
  outline-none
  p-4
  rounded-lg

`;


const ColumnFilter = ({column,
    setFilterColumn}) => {

  
   const [filterValue,setFilterValue] = useState(setFilterColumn);
   
   const onChange = useAsyncDebounce ((column) => (
    setFilterColumn(column || undefined )
   ),300);




    return (

        <SearchContainer>
            <SearchText>Search:</SearchText>
            <Input value={filterValue || ""} onChange={(e) => {
                setFilterValue(e.target.value)
                onChange(e.target.value);

            }} 
            placeholder= "records"
            />
        </SearchContainer>

    )

}

export default ColumnFilter;