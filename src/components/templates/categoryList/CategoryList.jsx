import toast from "react-hot-toast";
import { useDeleteCategory } from "../../../core/services/mutations";
import { useGetCategories } from "../../../core/services/queri";
import Loader from "../../partials/Loader";
import styles from "./CategoryList.module.css";

function CategoryList() {
    const {data,isLoading,error}=useGetCategories();
    const {mutate}=useDeleteCategory();
    console.log({data,isLoading});
    const deleteButtonHandler = (categoryId)=>{
mutate(categoryId,{
    onSuccess:(data)=>{
        toast.success("دسته بندی با موفقیت حذف شد")
        console.log("delete",data);
        
    },onError:(error)=>{
toast.error("خطایی رخ داد لطفا دوباره تلاش کنید")
console.log(error);

    }
})

    }
    
  return (
    <div className={styles.list}>
        {isLoading ? <Loader/> :data.data.map((category)=>
        <div key={category._id}>
            <img src={`${category.icon}.svg`}/>
            <h5>{category.name}</h5>
            <p>اسلاگ :{category.slug}</p>
            <button onClick={()=>deleteButtonHandler(category._id)}>حذف</button>
        </div>
            
      

        )}
    </div>
  )
}

export default CategoryList