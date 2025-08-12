import { useGetCategories } from "../../../core/services/queri";
import Loader from "../../../components/partials/Loader"

import styles from "./Sidebar.module.css"

function Sidebar() {
  const { data, isLoading } = useGetCategories();
  if (isLoading) return <Loader/>
  return (
    <div className={styles.sidebar}>
      <h4>دسته بندی ها</h4>
      <ul>
        {data?.data.map((category) => (
          <li key={category._id}>
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
