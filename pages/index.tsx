
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm, } from '../src/context/formContext';
import { VscTrash, VscTasklist } from "react-icons/vsc";
import Layout from '../src/components/Layout';
export default function Home() {
  const { form, deleteForm} = useForm();
  const router = useRouter();
  useEffect(() => {
    console.log(form)
  }, [form])
  return (
      <Layout>
        <>
          {form.map((element: any, index: any) => {
            return(
              <>
              <div key={index}
              className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-between"
                onClick={() => router.push("/edit/" + element.id)}>
              <span className="text-5xl mr-5">{index}:</span>
                <div>
                  <div className="flex justify-between">
                    
                    <hr/>
                    <button
                      className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteForm(element.id);
                      }}
                    >
                      <VscTrash className="mr-2" /> Borrar
                    </button>
                  </div>
                  <p className="text-gray-300">{form.description}</p>
                  <span className="text-gray-400">{form.id}</span>
                </div>


              </div>
              </>
            )
          })}
        </>
      </Layout>    
  );
}
