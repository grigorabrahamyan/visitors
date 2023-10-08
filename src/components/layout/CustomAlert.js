import { useEffect } from "react";
import { SBoxAlert, SAlert } from "./Layout.style";
import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "../../store/slices/visitorForm.slice";

const CustomAlert = () => {
  const dispatch = useDispatch();
  const { isShow, msg, type } = useSelector(
    (state) => state.visitorForm.notification
  );

  useEffect(() => {
    let handleClickDocument;
    if (isShow) {
      handleClickDocument = () => {
        dispatch(
          setNotification({
            isShow: false,
          })
        );
      };

      document.addEventListener("click", handleClickDocument, true);
    }
    return () =>
      handleClickDocument &&
      document.removeEventListener("click", handleClickDocument, true);
  }, [isShow, dispatch]);

  return (
    <SBoxAlert className={!!isShow ? "show" : "hide"}>
      <SAlert variant="filled" severity={type}>
        {msg}
      </SAlert>
    </SBoxAlert>
  );
};

export default CustomAlert;
