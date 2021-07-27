import React from 'react'
import FormArray from './data/form.json'
import ClassData from './data/class.json'

const FieldElements = (data) => {
    const fields = data.data.fields
    const fieldElementsArray = fields?.map((field, index) => {
        return  (
            <div className={ClassData.input.container} key={index}>
                <label className={ClassData.input.label} htmlFor={field.for_id_name}>{field.label}</label>
                <data.data.div className={ClassData.input.field} type={field.type} id={field.for_id_name} name={field.for_id_name} tabIndex="-1"></data.data.div>
            </div>
            );
        });

    return  (
        <div>{fieldElementsArray}</div>
    );
}

const Form = () => {

    const handleSumbit = (e) => {
        e.preventDefault();
        const arrayDetails = [
            {
                "fname":e.target["fname"].value
            },
            {
                "lname":e.target["lname"].value
            },
            {
                "email":e.target["email"].value
            },
            {
                "phone":e.target["number"].value
            },
            {
                "personal_summary":e.target["personal_summary"].value
            }
        ] 
        console.log(arrayDetails)
    }

    const formElementsArray = FormArray?.map((data, index) => {
        return  (
            <div className={ClassData.form.container} key={index}>
                <div className={ClassData.form.title}>{data.title}</div>
                <div><FieldElements data={data}/></div>
            </div>
            );
        });

    return  (
        <form className={ClassData.temporary_class} onSubmit={(e) => handleSumbit(e)}>
        <div>{formElementsArray}</div>
        <button className={ClassData.button}>
            <div className=''>Preview</div>
            <div className='w-3 h-2.5'><img alt='' src={require('./data/arrow_button.svg').default}/></div>
        </button>
        </form>
    );
}

export default Form
