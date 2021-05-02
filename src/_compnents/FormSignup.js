import React from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import "../style/signIn_sigUp.css";
import { useForm } from "react-hook-form";
import axios from "../axios";
import pattern from "../regix"
const FormSignup = () => {
  // const axios = require('axios');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const signUpFor = (data, e) => {
    e.preventDefault();
    axios
      .post("user/register", {
        full_name: data.username,
        email: data.userEmail,
        password: data.userPassword,
        phone: data.userPhone,
        age: data.userDOB,
      })
      .then((res) => {
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Row>
      <Col sm="12">
        <Form className="formSignUp" onSubmit={handleSubmit(signUpFor)}>
          <Row>
            <Col sm="6">
              <FormGroup>
                <Label for="userName">User Name</Label>
                <Input
                  type="text"
                  {...register("username", {
                    required: true,
                    maxLength: 13,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  placeholder="Username"
                  className={`${errors?.username ? "errors" : ""}`}
                />
                {errors?.username?.type === "required" && (
                  <p>This field is required</p>
                )}
                {errors?.username?.type === "maxLength" && (
                  <p>First name cannot exceed 13 characters</p>
                )}
                {errors?.username?.type === "pattern" && (
                  <p>Alphabetical characters only</p>
                )}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label for="userEmail">Email Address</Label>
                <Input
                  type="email"
                  {...register("userEmail", {
                    required: true,
                    pattern: pattern.email,
                  })}
                  placeholder="Email"
                  className={`${errors?.userEmail ? "errors" : ""}`}
                />
                {errors?.userEmail?.type === "required" && (
                  <p>This field is required</p>
                )}
                {errors?.userEmail?.type === "pattern" && (
                  <p>Please enter valid email address.</p>
                )}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label for="userPassword">Password</Label>
                <Input
                  type="password"
                  {...register("userPassword", {
                    required: true,
                    minLength: 8,
                  })}
                  placeholder="Password"
                  className={`${errors?.userPassword ? "errors" : ""}`}
                />
                {errors?.userPassword?.type === "required" && (
                  <p>This field is required</p>
                )}
                {errors?.userPassword?.type === "minLength" && (
                  <p>Minimum password lenght should be 8 characters.</p>
                )}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label for="userDOB">Date of Birth</Label>
                <Input
                  type="date"
                  {...register("userDOB", { required: true })}
                  className={`${errors?.userDOB ? "errors" : ""}`}
                />
                {errors?.userDOB?.type === "required" && (
                  <p>This field is required</p>
                )}
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup>
                <Label for="userPhone">Phone</Label>
                <Input
                  type="tel"
                  {...register("userPhone", {
                    required: true,
                    pattern: pattern.phone,
                  })}
                  placeholder="Phone Number"
                  className={`${errors?.userPhone ? "errors" : ""}`}
                />
                {errors?.userPhone?.type === "required" && (
                  <p>This field is required</p>
                )}
                {errors?.userPhone?.type === "pattern" && <p>Invalid Number</p>}
              </FormGroup>
            </Col>

            <Col sm="12">
              <Button color="primary" type="submit" className="w-100">
                SignUp
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default FormSignup;
