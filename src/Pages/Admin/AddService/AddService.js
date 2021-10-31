import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log();
        fetch("http://localhost:5000/addNewServices",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)

        })
        .then(res => res.json())
        .then(result => {
            if(result.acknowledged){
                alert("data added successfully!")
                reset();
            }
        })
    }
    return (
        <div>
            <h2>Add new service</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input {...register("img")} placeholder="Image link" /> <br /> <br />
                    <input {...register("name")} placeholder="Destination name" /> <br /> <br />
                    <textarea {...register("description")} placeholder="Short description" /> <br /> <br />
                    <input type="number" {...register("cost")} placeholder="Cost"/> <br /> <br />
                    <input type="number" {...register("days")} placeholder="Days"/>    <br />            
                    
             <br />
                    <input type="submit" className="btn btn-primary" />
               </form>
            </div>
        </div>
    );
};

export default AddService;