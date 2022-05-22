import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const useLogOut = () => {
    const logOut = () => {
        localStorage.removeItem("jotToken");
        signOut(auth);
    }
    return [logOut];
};

export default useLogOut;