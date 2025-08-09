import { useState } from "react";

import styles from "./CategoryForm.module.css";
import { useCategory } from "../../../core/services/mutations";
import toast from "react-hot-toast";

function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const { mutate, isLoading } = useCategory();
  const changeHandler = (e) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!form.name || !form.slug || !form.icon)
      return toast.error("لطفا همه فیلد ها را پر کنید");
    mutate(form, {
      onSuccess: (data) => {
        toast.success("دسته بندی با موفقیت ایجاد شد");
        console.log(data);
      },
      onError: (error) => {
        toast.error("خطا در ایجاد دسته بندی لطفا دوباره امتحان کنید");
        console.log(error);
      },
    });
    console.log(form);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={styles.form}
    >
      <h3>دسته بندی جدید</h3>
      <label htmlFor="name">اسم دسته بندی</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="slug">اسلاگ</label>
      <input type="text" name="slug" id="slug" />

      <label htmlFor="icon">آیکون</label>
      <input type="text" name="icon" id="icon" />
      <button type="submit" disabled={isLoading}>
        ایجاد
      </button>
    </form>
  );
}

export default CategoryForm;
