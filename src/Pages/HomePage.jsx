import Loader from "../components/partials/Loader";
import MainPage from "../components/templates/homePage/MainPage"
import Sidebar from "../components/templates/homePage/Sidebar"
import { useGetAllPost, } from "../core/services/queri"

const style = {
  display:"flex"
}

function HomePage() {
  const {data,isLoading}=useGetAllPost();
  console.log(data);
  if(isLoading) return 
  return (
    <>
   {isLoading ? <Loader/>  : (<div style={style}>
<Sidebar/>
<MainPage posts={data}/>
   </div>)}
    </>
    
  )
}

export default HomePage