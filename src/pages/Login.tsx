import Input from "../components/Input"
import Button from "../components/Button"
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom"

const Login = () => {


  return (
    <main className="py-[5rem] px-6">
        <Helmet>
            <title>Log into Chatdunes</title>
        </Helmet>
        <section className="mx-auto max-w-[360px]">
            <header className="text-center mb-14">
                <h1 className="text-[36px] font-[500] mb-1 text-primary">Log into Chatdunes</h1>
                <p className="text-[17px] text-[#707579] leading-[1.3]">Log into your account to continue your social connect with friends and families</p>
            </header>

            <form>
                <div className="mb-5">
                    <Input label="Email" type="email" placeholder="example@email.com" autoComplete="off" />
                </div>
                <div className="mb-5">
                    <Input label="Password" type="password" placeholder="*********" autoComplete="off" />
                </div>
                <div className="mb-5">
                    <Button>Login</Button>
                </div>
                <div className="mb-5 flex justify-center">
                    <Link to="/signup" className="text-primary">Don't have an account?</Link>
                </div>
            </form>
        </section>
    </main>
  )
}

export default Login