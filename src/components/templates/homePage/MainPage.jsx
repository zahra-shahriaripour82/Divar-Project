import{ sp} from "../../../core/utils/replaceNumber"

import styles from "./MainPage.module.css"
function MainPage({posts}) {
    const baseURL = import.meta.env.VITE_BASE_URL;
  console.log(posts);
  
  return (
    <div className={styles.container}>
     
      {posts?.data?.posts.map((post)=>(
<div key={post._id} className={styles.card}>
<div className={styles.info}>
  <p>{post?.options?.title}</p>
  <div >
    <p>{sp(post?.amount)}تومان</p>
    <span>{post?.options?.city}</span>
  </div>

</div>
<img src={post?.images[0] ? `${baseURL}${post.images[0]}` : "NoContent.jpg"} />
</div>
      ))}
    </div>
  )
}

export default MainPage