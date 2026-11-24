import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {create} from '../contact/api-contact.js'
import contact4 from '../src/assets/contact4.jfif';
export default function Contact() {
const [values, setValues] = useState({
    firstname: "",
lastname: "",
email: "",
//error: "",
//redirectToReferrer: false,
});
// Destructuring methods from react-hook-form
const { register, handleSubmit, formState: { errors } } = useForm();
// Submission function for the form
const submitForm = () => {
// Logging form values on submit
const contact = {
firstname: values.firstname || undefined,
lastname: values.lastname || undefined,
email: values.email || undefined,
//error: values.error || undefined,
//redirectToReferrer: values.redirectToReferrer || undefined,
};
console.log(contact);
create(contact);
// Optionally, set the values state here if you need to update it
};
const handleChange = name => event => {
setValues({ ...values, [name]: event.target.value })
}
return (
<>
<h2 className="worksTitle">Contact</h2>
<div>
<img src={contact4} alt="Contact" className="worksImg" width={1500} height={80} />
<br /><br />
</div>
<form onSubmit={handleSubmit(submitForm)}>
{/* First Name */}
<label htmlFor="firstname">First Name:</label>
<input
{...register("firstname", { required: "First name is required" })}
value={values.firstname} onChange={handleChange('firstname')}
/>
{errors.firstname && <p>{errors.firstname.message}</p>}
<br /><br />
{/* Last Name */}
<label htmlFor="lastname">Last Name:</label>
<input
{...register("lastname", { required: "Last name is required" })}
value={values.lastname} onChange={handleChange('lastname')}
/>
{errors.lastname && <p>{errors.lastname.message}</p>}
<br /><br />
{/* Email */}
<label htmlFor="email">Email:</label>
<input
type="email"
{...register("email", { required: "Email is required" } )}
value={values.email} onChange={handleChange('email')}
/>
{errors.email && <p>{errors.email.message}</p>}
<br /><br />
{/* Submit Button */}
<button type="submit">Submit</button>
</form>
</>
);
}