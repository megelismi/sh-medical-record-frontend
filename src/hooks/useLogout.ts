const useLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("userRole");
}

export default useLogout; 