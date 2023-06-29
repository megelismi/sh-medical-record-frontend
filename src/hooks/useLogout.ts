const useLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userRole");
    sessionStorage.removeItem("userId");
}

export default useLogout; 