import { useDispatch, useSelector } from "react-redux";
import { handleNav } from "../redux/menuSlice";

export const useNav = () => {
  const dispatch = useDispatch();
  const { navOpen } = useSelector((state) => state.menuSlice);
  const onMEnuClick = () => {
    dispatch(handleNav());
  };

  return { onMEnuClick, navOpen };
};
