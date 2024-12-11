import React  from "react";

function Table({ allInfo, setAllInfo,setOneRow,openmodal,oneRow ,setToedit }) {

  function rowcolor(gender) {
    if (gender === "male") {
      return { backgroundColor: "lightgreen" };
    } else if (gender === "female") {
      return { backgroundColor: "lightblue" };
    } else if (gender === "others") {
      return { backgroundColor: "lightgray" };
    }
  }


  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }



  function deleteInfo(index){
    const updatedInfo =[...allInfo];
    updatedInfo.splice(index,1);
    setAllInfo(updatedInfo)
  }

  
  function editInfo(index) {
    setOneRow(allInfo[index]); 
    setToedit(index);        
    openmodal();  
              
  }
  

 


  return (
    <div className="flex justify-center mt-4">
      <>
        <table>
          <tr>
            <th className="border w-1/12 border-gray-300 py-4 ">S.No</th>
            <th className="border w-1/3 border-gray-300 py-4 ">Name</th>
            <th className="border w-1/4 border-gray-300 py-4 ">Phone Number</th>
            <th className="border w-1/6 border-gray-300 py-4 ">Gender</th>
            <th className="border w-1/6 border-gray-300 py-4 ">Date of Birth</th>
            <th className="border w-1/12 border-gray-300 py-4 ">Age</th>
            <th className="border w-1/12 border-gray-300 py-4 ">Edit</th>
            <th className="border w-1/12 border-gray-300 py-4 ">Delete</th>
       
          </tr>

          {allInfo.map((student,index) => (
            <tr style={rowcolor(student.gender)}>
              <td className="border w-1/12 border-gray-300">{index + 1}</td>
              <td className="border w-1/3 border-gray-300">{student.name}</td>
              <td className="border w-1/4 border-gray-300">{student.phno}</td>
              <td className="border w-1/6 border-gray-300">{student.gender}</td>
              <td className="border w-1/6 border-gray-300">{student.dob}</td>
              <td className="border w-1/12 border-gray-300">{calculateAge(student.dob)}</td>
              <td className="border w-1/12 border-gray-300"> <button onClick={()=>editInfo(index)} className="bg-green-500 text-white py-1 px-2">Edit</button></td>
              <td className="border w-1/12 border-gray-300"> <button onClick={deleteInfo} className="bg-red-500 text-white py-1 px-2">Delete</button></td>
            </tr>
          ))}


        </table>
      </>
    </div>
  );
}

export default Table;