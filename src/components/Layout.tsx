import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import { useForm } from '../context/formContext';
import { AiOutlinePlus } from "react-icons/ai";
interface Props {
    children: JSX.Element;
}
const Layout = ({children}: Props) => {
    const {form} = useForm();
    const router = useRouter();
  return (
    <>
    <div className="h-screen bg-gray-900 text-white">
      <header className="flex items-center bg-gray-800 px-28 py-5">
        <Link href="/">
          
            <h1 className="font-black text-lg">Form App</h1>
          
        </Link>

        <div className="flex-grow text-right">
          <button
            className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray font-bold rounded-sm inline-flex items-center"
            onClick={() => router.push("/Formpage")}
          >
            <AiOutlinePlus className="mr-2" />
            Agregar Usuario
          </button>
        </div>
      </header>

      <main className="h-5/6 px-28 py-10">{children}</main>
    </div>
    </>
  )
}

export default Layout;