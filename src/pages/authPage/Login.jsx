import "./authpage.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks";
import { useGetter } from "../../store";


function AuthPage() {
    const { setUser } = useGetter();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const login = useLogin({onSuccess: () => navigate("/")});

    const onSubmit = (data) => login(data);

    useEffect(() =>{
      setUser();
    }, [setUser]);
    


  return (
    <div className="authpage-container">
        <form className="authpage-container_form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="tittle">UCHOOSE</h1>
            <label htmlFor="">E-mail</label>
            <input label="E-mail"  {...register("email")} />

            <label htmlFor="">Password</label>
            <input label="Password"  {...register("password")} />

            <input type="submit" className="form_button" />
        </form>
    </div>
  )
}

export default AuthPage