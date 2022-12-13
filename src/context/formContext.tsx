import React, { createContext, useContext, useState } from "react";
import {v4 as uuid } from "uuid";
export const FormContext: any = createContext({});

export const useForm = () => useContext(FormContext);
 
export const FormProvider = ({children}: any) =>
{
    const [form, setForm] = useState<any>([
        {id: uuid(), title: "First Task", description: "the testing task", done: true}
    ]);

    const createForm = (title: any, description: any) => setForm([...form, {title, description, id: uuid()}])

    const updateForm = (title: any, description: any ) =>
    {
        return;
    }

    const deleteForm = (id: any) =>
    {
        return setForm( delete form[id]);
    }

    return(
            <FormContext.Provider value={{ form, createForm, updateForm, deleteForm}}>
                {children}
            </FormContext.Provider>
    );
}
