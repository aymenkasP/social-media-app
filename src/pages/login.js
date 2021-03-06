import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'


export default function Login() {

    const history = useHistory()
    const {firebase} = useContext(FirebaseContext)
    
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [error, setError] = useState("")

    const isInvalid = Password ==="" || Email === "";

    const handleLogin = async (e)=> {
       e.preventDefault()

       try {

            await firebase.auth().signInWithEmailAndPassword(Email,Password)
            
           history.push(ROUTES.DASHBOARD);
       } catch (error) {
        setEmail('');
        setPassword('');
        setError(error.message);
       }
    }


    useEffect(() => {

        document.title = 'Login'

        }, [])
    

    return (
        <div className='container flex mx-auto max-w-screen-md items-center h-screen'>
            <div className="flex w-3/5 ">
                <img src="\images\ahbhdmza.bmp" alt="iPhone with Instagram app" />
            </div>

            <div className='flex flex-col w-2/5' >

                <h1  className="flex justify-center w-full" >
                <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                </h1>

                {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                <form onSubmit={handleLogin} method="POST" >
                <input
                    aria-label="Enter your email address"
                    type="text"
                    placeholder="Email address"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                    onChange={({ target }) => setEmail(target.value)}
                    value={Email}
                />

                    <input
                    aria-label="Enter your password"
                    type="password"
                    placeholder="Password"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                    onChange={({ target }) => setPassword(target.value)}
                    value={Password}
                    />


                    <button
                    disabled={isInvalid}
                    type="submit"
                    className={`bg-blue-medium text-white w-full rounded h-8 font-bold
                    ${isInvalid && 'opacity-50'}`}
                    >
                    Login
                    </button>
                    
                </form>

                <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
                    <p className="text-sm">
                        Don't have an account?{` `}
                        <Link to={ROUTES.SIGNUP} className="font-bold text-blue-medium">
                        Sign up
                        </Link>
                    </p>
                 </div>

            </div>
         </div>
    )
    }