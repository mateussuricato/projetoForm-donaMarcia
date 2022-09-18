import { useState } from "react";



const [checkedHablidades, setCheckedHabilidades] = useState<any>([]);


const checkedItems = checkedHablidades.length
? checkedHablidades.reduce((total: string, item: string) => {
   return total + ", " + item;
 })
: "";

const handleCheckHabilidades = (event: { target: { checked: any; value: any; }; }) => {
 var updatedList = [...checkedHablidades];
 if (event.target.checked) {
   updatedList = [...checkedHablidades, event.target.value];
 } else {
   updatedList.splice(checkedHablidades.indexOf(event.target.value), 1);
 }
 setCheckedHabilidades(updatedList);
};