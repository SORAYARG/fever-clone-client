import "./authpage.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useRegister } from "../../hooks";
import { useGetter } from "../../store";



function AuthPage() {
    const { setUser } = useGetter();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const signUp = useRegister({ onSuccess: () => navigate("/login") });

    const onSubmit = (data) => signUp(data);

    useEffect(() => {
        setUser();
    }, [setUser]);



    return (
        <div className="authpage-container">
            <form className="authpage-container_form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="tittle">UCHOOSE</h1>
                <label htmlFor="">Email</label>
                <input placeholder="e-mail"  {...register("email")} />

                <label htmlFor="">Password</label>
                <input placeholder="Password"  {...register("password")} />

                <label htmlFor="">Name</label>
                <input placeholder="Name"  {...register("first_name")} />


                <select {...register("role")}>
                    <option value="client">Client</option>
                    <option value="company">Company</option>
                </select>

                <input type="submit" className="form_button" />
            </form>
        </div>
    )
}

export default AuthPage