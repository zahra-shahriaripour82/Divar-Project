import CategoryForm from "../components/templates/categoryForm/CategoryForm"
import CategoryList from "../components/templates/categoryList/CategoryList"


function AdminPage() {
  return (
    <div>
      <CategoryList/>
      <CategoryForm/>
    </div>
  )
}

export default AdminPage