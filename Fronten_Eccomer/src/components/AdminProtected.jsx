import { Navigate } from "react-router-dom";

export default function AdminProtected({ children }) {
    const token = localStorage.getItem("adminToken");

    if (!token) {
        return <Navigate to="/admin" />; // ← Yaha admin login page redirect karega
    }

    return children;
}
