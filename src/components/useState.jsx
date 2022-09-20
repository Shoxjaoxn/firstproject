import "./home.css" 
import React, { useState } from 'react'


function UseState() {
    const [name, setName] = useState("Jasurbek");
    const [title, setTitle] = useState("Jasurbek");
    const [number, setNumber] = useState("Jasurbek");
    const [age, setAge] = useState("Jasurbek")
    console.log(name);
    const onHendle = () => {
        setNumber(number + 1)
        setAge(age + 2)
        setName("Hamid")
        setTitle("Developer")
    };
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>Ism</th>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Age</th>
                </tr>

            </thead>
            <tbody>
<tr>
<td>
                    {name}
                </td>
                <td>
                    {title}
                </td>
                <td>
                    {number}
                </td>
                <td>
                    {age}
                </td>
</tr>

            </tbody>

        </table>
    </div>
  )
}

export default UseState