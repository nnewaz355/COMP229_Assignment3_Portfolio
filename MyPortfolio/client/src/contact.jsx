import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { create } from '../contact/api-contact.js';
import contact4 from '../src/assets/contact4.jfif';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, TextField, Button, Grid } from '@mui/material';
import '@fontsource/roboto/400.css';
export default function Contact() {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
    });
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitForm = async () => {
    const contact = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
    };

    try {
      const data = await create(contact);
      if (data?.error) {
        setValues((current) => ({ ...current, error: data.error }));
        return;
      }

      setValues({
        firstname: "",
        lastname: "",
        email: ""
      });
    } catch (error) {
      setValues((current) => ({ ...current, error: error.message }));
    }
  };
    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h4" align="center" gutterBottom>Contact</Typography>
                    <div>
                        <img src={contact4} alt="Contact" style={{ width: '100%', height: 'auto' }} />
                        <br /><br />
                    </div>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <Grid container spacing={2}>
                            {/* First Name */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    variant="outlined"
                                    {...register("firstname", { required: "First name is required" })}
                                    value={values.firstname}
                                    onChange={handleChange('firstname')}
                                    error={!!errors.firstname}
                                    helperText={errors.firstname ? errors.firstname.message : ""}
                                />
                            </Grid>
                            {/* Last Name */}
                            <Grid item xs={12} sm={6}><TextField
                                fullWidth
                                label="Last Name"
                                variant="outlined"
                                {...register("lastname", { required: "Last name is required" })}
                                value={values.lastname}
                                onChange={handleChange('lastname')}
                                error={!!errors.lastname}
                                helperText={errors.lastname ? errors.lastname.message : ""}
                            />
                            </Grid>
                            {/* Email */}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    {...register("email", { required: "Email is required" })}
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    error={!!errors.email}
                                    helperText={errors.email ? errors.email.message : ""}
                                />
                            </Grid>
                            {/* Submit Button */}
                            <Grid item xs={12}><Button type="submit" variant="contained" color="primary" fullWidth>
                                Submit
                            </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}