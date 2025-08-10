import { useState } from "react";
import { useGetCategories } from "../../../core/services/queri"


function AddPost() {
  const [form,setForm]=useState({
    title:"",
    content :"",
    amount:null,
    city:"",
    category:"",
    images:null,
 
  
  })
  const {data}= useGetCategories();

  const changeHandler=(event)=>{
const name=event.target.value;
if(name !== "images"){
  setForm({...form,[name]:event.target.value})
}else {
  console.log("zahra",event.target.files);
  
//  setForm({...form,[name]:event.target.files[0]})
  
}

  

  }

  const addHandler=(e)=>{
e.preventDefault();
console.log(form);


  }
  return (
   <form onChange={changeHandler}>
    <h3>افزودن آگهی</h3>
    <label htmlFor="text">عنوان</label>
    <input type="text" name="title" id="title" />
    <label htmlFor="text">عنوان</label>
   <textarea name="content" id="content"/>
    <label htmlFor="amount">قیمت</label>
    <input type="text" name="amount" id="amount" />
     <label htmlFor="city">شهر</label>
    <input type="text" name="city" id="city" /> 
     <label htmlFor="city">دسته بندی</label>
<select name="category" id="category">
  {data?.data.map((category)=>(
    <option key={category._id} value={category._id}>{category.name}</option>
  ))}
</select>
     <label htmlFor="images">عکس</label>
    <input type="file" name="images" id="images" /> 
    <button onClick={addHandler}>ایجاد</button>
   </form>
  )
}

export default AddPost