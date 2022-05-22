import { useState } from "react";

const useNewUser = () => {
    const [token, setToken] = useState(localStorage.getItem("jotToken") || "");
    function setUser(email, name, role = "user") {
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ email, name, role })
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("jotToken", data.token);
                    setToken(data.token);
                })
        }
    }

    return [setUser, token];
};

export default useNewUser;