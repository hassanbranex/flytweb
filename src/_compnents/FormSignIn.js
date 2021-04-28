import React,{useState}from 'react'
import {Button, Row, Col,Form, FormGroup, Label, Input} from 'reactstrap';
import axios from '../axios';
import '../style/signIn_sigUp.css';
import { useForm } from "react-hook-form";

const FormSignIn = () => { 
    const { register, handleSubmit,reset,
    formState: { errors }} = useForm();
    
    const emailRegix=/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    const signInFor=(data,e)=>{
        e.preventDefault();
        axios.post('auth/token',{
            email: data.userEmail,
                password:data.userPassword,
        }).then(res=>{
            console.log(res.data);
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
                        <Input type="email"  {...register("userEmail", {required: true,pattern:emailRegix}) }  placeholder="Email"  className={ `${errors?.userEmail ? "errors" : ""}`} />
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
