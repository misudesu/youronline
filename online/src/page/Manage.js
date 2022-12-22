import React from 'react'
import { storage, db, auth } from "../Server";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Manage() {
  const [user] = useAuthState(auth);
  return (
    <div>Manage</div>
  )
}
