import React, {useState, useEffect} from 'react'
import Layout from '../src/components/Layout'
import {BirthDatePicker} from '../src/components/DatePickerOne'
import {StartDatePicker} from '../src/components/DatePickerTwo'
import { useForm } from "../src/context/formContext";
import { useRouter } from "next/router";

const TaskFormpage = () => {
    const { form, createForm, updateForm } = useForm();
    const [state, setState] = useState({});
    const router = useRouter();
    useEffect(() => {

    }, []);

    const handleChange = (event: any) =>
    {
        setState({ ...state, [event.target.name]: event.target.value})
        
    } 

    const handleSubmit = (event: any) =>
    {
        event.preventDefault();
        !router.query.id ? createForm(form.title, form.description) : updateForm(router.query.id, form);
        router.push("/");
    }

    useEffect(() => {
        if(router.query.id) {
            const formFound = form.find((userId?: number) => userId === router.query.id)
            if( formFound ){
                setState({title: formFound.title, description: formFound.description});
            }
        }
    }, [router.query.id])

    return (
    <Layout>

      <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name" >
        Nombre
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"  maxLength={4}/>
      <p className="text-red-500 text-xs italic">Requerido</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
        Apellido
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" maxLength={4}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">

    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
        Edad
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="Edad" />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
          Fecha de Nacimiento
      </label>
      <div className="mb-4">
        <BirthDatePicker />
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
        Fecha de Inscripción
      </label>
      <StartDatePicker />
    </div>
  </div>
</form>
    </Layout>
  )
}

export default TaskFormpage