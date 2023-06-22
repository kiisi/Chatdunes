import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { Helmet } from 'react-helmet'


interface InputState {
  firstInput: string;
  secondInput: string;
  thirdInput: string;
  fourthInput: string;
}

type InputAction =
  { type: "FIRST_INPUT", payload: string } |
  { type: "SECOND_INPUT", payload: string } |
  { type: "THIRD_INPUT", payload: string } |
  { type: "FOURTH_INPUT", payload: string }


const reducerFunc = (state: InputState, action: InputAction) => {
  switch (action.type) {
    case "FIRST_INPUT": {
      return {
        ...state,
        firstInput: action.payload
      }
    }
    case "SECOND_INPUT": {
      return {
        ...state,
        secondInput: action.payload
      }
    }
    case "THIRD_INPUT": {
      return {
        ...state,
        thirdInput: action.payload
      }
    }
    case "FOURTH_INPUT": {
      return {
        ...state,
        fourthInput: action.payload
      }
    }
    default: {
      throw Error("Unknown Case!")
    }
  }
}

const Verify = () => {

  const initState = {
    firstInput: '',
    secondInput: '',
    thirdInput: '',
    fourthInput: ''
  }

  const [state, dispatch] = useReducer(reducerFunc, initState)

  const verificationInputHandler = (e: React.ChangeEvent<HTMLInputElement>, type: InputAction["type"]) => {
    dispatch({ type, payload: e.target.value });
    (e.target?.nextElementSibling as HTMLInputElement)?.focus()
  }


  return (
    <main className="min-h-[100vh] w-full py-5 px-6 grid place-items-center overflow-hidden">
      <Helmet>
        <title>Chatdunes - Email Verification</title>
      </Helmet>
      <section className="max-w-[450px] w-full rounded-xl p-4 box-shadow-1 verify-email-animation">
        <header className="text-center text-[#171D2A]">
          <h1 className="font-extrabold text-[28px] mb-1">Verify your email!</h1>
          <p>Please enter the 4 digit code sent to <span className="text-primary italic">email@email.com</span>, <Link to='/login' className="text-primary underline">(not you?)</Link></p>
        </header>
        <div className="py-10 flex">
          <div className="mx-auto max-w-max flex gap-x-3">
            <input className="verification-input" maxLength={1} type="text" value={state.firstInput} onChange={(e) => verificationInputHandler(e, "FIRST_INPUT")} />
            <input className="verification-input" maxLength={1} type="text" value={state.secondInput} onChange={(e) => verificationInputHandler(e, "SECOND_INPUT")} />
            <input className="verification-input" maxLength={1} type="text" value={state.thirdInput} onChange={(e) => verificationInputHandler(e, "THIRD_INPUT")} />
            <input className="verification-input" maxLength={1} type="text" value={state.fourthInput} onChange={(e) => verificationInputHandler(e, "FOURTH_INPUT")} />
          </div>
        </div>
        <div className="flex flex-col pb-2">
          <button className="mx-auto hover:underline text-primary" >Resend Otp</button>
        </div>
        <div>
          <Button>Verify Account</Button>
        </div>
      </section>
    </main>
  )
}

export default Verify