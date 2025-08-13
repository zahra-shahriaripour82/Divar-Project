import { useGetAllPost, useGetCategories, } from "../core/services/queri"
import MainPage from "../components/templates/homePage/MainPage"
import Sidebar from "../components/templates/homePage/Sidebar"
import Loader from "../components/partials/Loader";

const style = {
  display:"flex"
}

function HomePage() {
  const {data :Posts,isLoading :postLoading}=useGetAllPost();
  const { data :categories, isLoading :categoryLoading} = useGetCategories();
  console.log({Posts,categories});
  
  return (
    <>
   {postLoading || categoryLoading ? <Loader/>  : (<div style={style}>
<Sidebar categories={categories}/>
<MainPage posts={Posts}/>
   </div>)}
    </>
    
  )
}

export default HomePage