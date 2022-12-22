import { Navigate, useNavigate } from "react-router-dom";
import { storage, db, auth } from "../../Server";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  Nav,
} from "react-router-dom";
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
export default function Login() {
  const [formData, setformData] = useState({
    id: "",
    userName: "Muse Alemu",
    Image:
      "https://th.bing.com/th/id/R.ba0436ba68ef916cbfdad659a1805deb?rik=hLNXQMBe8oyCzA&pid=ImgRaw&r=0",
    Email: "",
    Type: "Admin",
    States: "Active",
    phoneNumber: "0916554522",
    progress: 0,
    createdAt: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();
  
  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      const  user = userCredential.user;
        {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              navigate("/");
            } else {
            }
          });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
return(
  <>
   <div className="flex flex-cols-2  justify-center mt-20 items-center mx-auto ">
        <div className="bg-indigo-700 rounded-3xl hidden lg:block text-light mx-8 p-4 ">
          <p className="font-bold text-sm mt-14">BETOCH</p>
          <p className="text-lg mt-14 font-bold text-light">
            Start finding <br /> Your Home With us.
          </p>
          <p>
            Discover the world's best comunity <br />
            of rental huse and residences ownering.
          </p>
          <div className="mt-20 mx-4 text-sm  pb-0 w-60  py-2 mb-0  bg-indigo-500 rounded-3xl">
            <p className="mx-3 mt-1">
              Simple unblive able I am relly satisfied with those houses and
              residences. this is bsolutlely wonderful!
              <div className="flex mt-1 gap-x-2 ">
                <img src="" className="rounded-full w-8 h-8 bg-gray-500" />
                <p>Misael dessalegn</p>
              </div>
            </p>
          </div>
          <div className="flex justify-center  item-center  gap-x-1 ">
            <div className="p-1 w-3  h-1 bg-indigo-100 rounded-md"></div>
            <div className="p-1 w-3  h-1 bg-gray-400 rounded-md"></div>
            <div className="p-1 w-3  h-1 bg-gray-500 rounded-md"></div>
          </div>
        </div>
      
        <div className="w-96 p-4  lg:block p-0">
          <p className="mb-0 font-bold">Login</p>
          <p>Search your wish with us!</p>
          <div className="bg-gray-100 text-center outline px-5  btn-outline-primary  rounded-l-md rounded-r-md">
            <p className="font-bold p-1">Sign in with Google</p>
          </div>
          <p className="mb-0">Email</p>
          <input
            type="email"
            name="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="rounded-2xl px-5 w-full bg-gray-200 p-1"
            placeholder="example@gmail.com"
          />
          <p className="mb-0 mt-3">Password</p>
          <input
            type="password"
            name="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="rounded-2xl px-5 bg-gray-200 p-1 w-full"
            placeholder="*******"
          />
          <p className="mb-0 align-right " >
            Forget Password?
          </p>
          <div className="bg-indigo-600  px-5  text-light text-center  rounded-l-md rounded-r-md">
            <button className="font-bold p-1" onClick={handleLogin}>
              Login
            </button>
          </div>
          <span className="text-gray-400 mt-5">2022 GC BETOCH </span>
        </div>
      </div>
  </>
)
}
