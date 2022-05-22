
const useNewUser = () => {
    function setUser(name, email, role) {
        if (name && email && role) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ email, name, role })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    return [setUser];
};

export default useNewUser;