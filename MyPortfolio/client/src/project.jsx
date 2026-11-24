import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { create } from '../project/api-project.js';
import { Card, CardContent, Typography, TextField, Button, Grid } from '@mui/material';
import '@fontsource/roboto/400.css';
import projectn2 from '../src/assets/projectn2.jfif';

export default function Project() {
  const [values, setValues] = useState({
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    completion: "",
    description: ""
  });

  // Destructuring methods from react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Submission function for the form
  const submitForm = () => {
    const project = {
      title: values.title || undefined,
      firstname: values.firstname || undefined,
      lastname: values.lastname || undefined,
      email: values.email || undefined,
      completion: values.completion || undefined,
      description: values.description || undefined,
    };

    console.log(project);
    create(project);
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      <div style={{ textAlign: "center" }}>
        <img src={projectn2} alt="Academic Qualification" className="worksImg" width={1500} height={80} />
        <br /><br />
      </div>
      <Grid container justifyContent="center">
        <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form onSubmit={handleSubmit(submitForm)}>
              <Grid container spacing={2}>
                {/* Title */}
                <Grid item xs={12}>
                  <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    {...register("title", { required: "Title is required" })}
                    value={values.title}
                    onChange={handleChange('title')}
                    error={!!errors.title}
                    helperText={errors.title ? errors.title.message : ""}
                  />
                </Grid>

                {/* First Name */}
                <Grid item xs={12}>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    {...register("firstname", { required: "First name is required" })}
                    value={values.firstname}
                    onChange={handleChange('firstname')}
                    error={!!errors.firstname}
                    helperText={errors.firstname ? errors.firstname.message : ""}
                  />
                </Grid>

                {/* Last Name */}
                <Grid item xs={12}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
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
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    {...register("email", { required: "Email is required" })}
                    value={values.email}
                    onChange={handleChange('email')}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                  />
                </Grid>

                {/* Completion Date */}
                <Grid item xs={12}>
                  <TextField
                    label="Completion Date"
                    variant="outlined"
                    fullWidth
                    {...register("completion", { required: "Completion Date is required" })}
                    value={values.completion}
                    onChange={handleChange('completion')}
                    error={!!errors.completion}
                    helperText={errors.completion ? errors.completion.message : ""}
                  />
                </Grid>

                {/* Description */}
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    {...register("description", { required: "Description is required" })}
                    value={values.description}
                    onChange={handleChange('description')}
                    error={!!errors.description}
                    helperText={errors.description ? errors.description.message : ""}
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
