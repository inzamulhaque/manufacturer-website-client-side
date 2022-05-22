import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const useLogOut = () => {
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem("jotToken");
    }
    return [logOut];
};

export default useLogOut;