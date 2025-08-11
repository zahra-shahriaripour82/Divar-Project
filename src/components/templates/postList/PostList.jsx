import { useGetMyPostList } from "../../../core/services/queri";
import { sp } from "../../../core/utils/replaceNumber";
import Loader from "../../partials/Loader";

import styles from "./PostList.module.css";

function PostList() {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const { data, isLoading } = useGetMyPostList();
  console.log(data);

  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3> آگهی های شما</h3>
          {data?.data?.posts.map((post) => (
            <div key={post._id} className={styles.post}>
              <img src={`${baseURL}${post?.images[0]}`} alt="" />
              <div>
                <p>{post?.options?.title}</p>
                <span>{post?.options?.content}</span>
              </div>
              <div className={styles.price}>
                <p>{new Date(post?.createdAt).toLocaleDateString("fa-IR")}</p>
                <span>{sp(post?.amount)}تومان</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
