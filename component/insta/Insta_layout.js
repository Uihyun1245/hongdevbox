import styles from "./scss/Insta.module.scss";
import InstaHead from "./Insta_header";
import { useDispatch } from "react-redux";
import { searchReady } from "../../module/insta/header/search";
import { menuClose } from "../../module/common/toggleIcon";
const InstaLayout = ({}) => {
  const dispatch = useDispatch();
  const handleSearchActive = (input, e) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.target !== e.currentTarget) return;
    dispatch(searchReady(input));
    closeMenu();
  };

  const closeMenu = () => {
    dispatch(menuClose());
  };

  return (
    <div
      className={styles["instagram-wrapper"]}
      onClick={(e) => handleSearchActive(false, e)}
    >
      <InstaHead handleSearchActive={handleSearchActive}></InstaHead>
    </div>
  );
};

export default InstaLayout;
