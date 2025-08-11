import { useState } from "react";
import { getCookie } from "../../../core/utils/cookie";
import { useGetCategories } from "../../../core/services/queri";

import styles from "./AddPost.module.css";
import axios from "axios";

import toast from "react-hot-toast";
function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    images: null,
  });
  const { data } = useGetCategories();

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  const addHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }
    const token = getCookie("accessToken");
    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res?.data?.message);
        //  setForm({
        //    title:"",
        //   content :"",

        //   city:"",
        //   amount:null,
        //   images:null,
        //  })
        console.log(res);
      })
      .catch((error) => {
        toast.error("خطا درایجاد آگهی ، دوباره تلاش کنید");
        console.log(error);
      });
    console.log(form);
  };
  return (
    <form onChange={changeHandler} className={styles.form}>
      <h3>افزودن آگهی</h3>
      <label htmlFor="text">عنوان</label>
      <input type="text" name="title" id="title" value={form.title} />
      <label htmlFor="text">توضیحات</label>
      <textarea name="content" id="content" value={form.content} />
      <label htmlFor="amount">قیمت</label>
      <input type="number" name="amount" id="amount" value={form.amount} />
      <label htmlFor="city">شهر</label>
      <input type="text" name="city" id="city" value={form.city} />
      <label htmlFor="city">دسته بندی</label>
      <select name="category" id="category" value={form.category}>
        {data?.data.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <label htmlFor="images">عکس</label>
      <input type="file" name="images" id="images" />
      <button onClick={addHandler}>ایجاد</button>
    </form>
  );
}

export default AddPost;
