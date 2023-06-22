import Input from "../components/Input"
import Button from "../components/Button"
import { Helmet } from 'react-helmet'
import { Link } from "react-router-dom"

const Signup = () => {


  return (
    <main className="py-[5rem] px-6">
        <Helmet>
            <title>Join Chatdunes</title>
        </Helmet>
        <section className="mx-auto max-w-[360px]">
            <header className="text-center mb-14">
                <h1 className="text-[36px] font-[500] mb-1 text-primary">Join Chatdunes</h1>
                <p className="text-[17px] text-[#707579] leading-[1.3]">Get started by creating an account with us to use our web chat app</p>
            </header>

            <form>
                <div className="mb-5">
                    <Input label="Email" type="email" placeholder="example@email.com" autoComplete="off" />
                </div>
                <div className="mb-5">
                    <Input label="Password" type="password" placeholder="*********" autoComplete="off" />
                </div>
                <div className="mb-5">
                    <Input label="Confirm Password" type="password" placeholder="*********" autoComplete="off" />
                </div>
                <div className="mb-5">
                    <Button>Create Account</Button>
                </div>
                <div className="mb-5 flex justify-center">
                    <Link to="/login" className="text-primary">Already have an account?</Link>
                </div>
            </form>
        </section>
    </main>
  )
}

export default Signup