import styles from "./scss/Insta_layout.module.scss";
import InstaHead from "./Insta_header";
import InstaPresentation from "./presentation/Insta_presentation";
import InstaFeed from "./feed/Insta_feed"
import { useDispatch } from "react-redux";
import { searchReady } from "../../module/insta/header/search";
import { menuClose } from "../../module/common/toggleIcon";
import { closeSearch } from "../../module/insta/header/search";
const InstaLayout = ({}) => {
  const dispatch = useDispatch();
  const handleSearchActive = (input, e) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.target !== e.currentTarget) return;
    dispatch(searchReady(input));
  };

  const closeMenu = (e) => {
    e.stopPropagation();
    if (e.target !== e.currentTarget) return;
    dispatch(menuClose());
    dispatch(closeSearch());
  };

  return (
    <div className={styles["instagram-wrapper"]} onClick={(e) => closeMenu(e)}>
      <InstaHead handleSearchActive={handleSearchActive}></InstaHead>
      <div className={styles["instagram-body"]}>
        <div className={styles["instagram-content"]}>
          <InstaPresentation></InstaPresentation>
          <InstaFeed></InstaFeed>
        </div>
        <div className={styles["instagram-profileList"]}></div>
      </div>
    </div>
  );
};

export default InstaLayout;
