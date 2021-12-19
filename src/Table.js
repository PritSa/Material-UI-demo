import React, { useState } from "react";
import ReactDOM from "react-dom";
import Materialtable from "material-table";

const data = [
  {
    id: 1,
    country: "India",
    subnational: "Maharashtra",
    district: "pune"
  },
  {
    id: 2,
    country: "",
    subnational: "Karnataka",
    district: "Banglore",
    parentId: 1
  },
  {
    id: 3,
    country: "US",
    subnational: "Baran",
    district: ""
  },
  {
    id: 4,
    country: "",
    subnational: "Newyork",
    district: "",
    parentId: 3
  }
];

function Table() {
  const [tableData, setTableData] = useState(data);

  const columns = [
    { title: "Country", field: "country", ediyable: false },
    { title: "Subnational", field: "subnational" },
    { title: "District", field: "district" }
  ];
  return (
    <div className="App">
      <Materialtable
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              const updateRow = [...tableData, newRow]
              setTimeout(() => {
                setTableData(updateRow);
                resolve();
              }, 2000);
            }),

            onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...tableData]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setTableData(updatedRows)
              resolve();
            }, 2000);
            }),
             
             onRowUpdate:(updatedRow,oldRow)=>
             new Promise((resolve,reject)=>{
                 const index=oldRow.tableData.id;
                 const updatedRows=[...data]
                 updatedRow[index]=updatedRow
                 setTimeout(() => {
              setTableData(updatedRows)
              resolve();
            }, 2000)  
             })
        }}

        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first"
        }}

        
      />
    </div>
  );
}

export default Table

