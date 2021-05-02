import React,{useState}from 'react'
import {Button, Row, Col,Form, FormGroup, Label, Input} from 'reactstrap';
import axios from '../axios';
import '../style/signIn_sigUp.css';
import { useForm } from "react-hook-form";
import pattern from "../regix"

const FormSignIn = () => { 
    const { register, handleSubmit,reset,
    formState: { errors }} = useForm();
    const signInFor=(data,e)=>{
        e.preventDefault();
        axios.post('auth/token',{
            email: data.userEmail,
                password:data.userPassword,
        }).then(res=>{
            localStorage.setItem("current_user",JSON.stringify(res.data));
            e.target.reset(); 
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <Row>
        <Col sm="12">
            <Form className="formSignUp" onSubmit={handleSubmit(signInFor)}>
               <Row>
                   <Col sm="6">
                   <FormGroup>
                        <Label for="userEmail">Email Address</Label>
                        <Input type="email"  {...register("userEmail", {required: true,pattern:pattern.email}) }  placeholder="Email"  className={ `${errors?.userEmail ? "errors" : ""}`} />
                        {errors?.userEmail?.type === "required" && <p>This field is required</p>}
                        {errors?.userEmail?.type === "pattern" && (
                            <p>Please enter valid email address.</p>
                        )}
                    </FormGroup>
                   </Col>
                   <Col sm="6">
                   <FormGroup>
                        <Label for="userPassword">Password</Label>
                        <Input type="password"   {...register("userPassword",{ required: true}) }  placeholder="Password"  className={ `${errors?.userPassword ? "errors" : ""}`} />
                        {errors?.userPassword?.type === "required" && <p>This field is required</p>}
                        
                    </FormGroup>
                   </Col>
                   <Col sm="12">
                    <Button color="primary" type="submit" className="w-100">SignIn</Button>
                   </Col>
               </Row>
            </Form>
            </Col>
        </Row>
    )
}



export default FormSignIn
