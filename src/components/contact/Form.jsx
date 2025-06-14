"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";


const container = {
  hidden: {opacity:0},
  show: {
    opacity : 1,
    transition: {
      staggerChildren: 0.3,
    }
  }
}

const item = {
  hidden: {scale: 0},
  show : {scale: 1}
}


export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait...")
      emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 10000, // means can't send more then 1 mail per 10 seconds
          },
        }
      )
      .then(
        () => {
          toast.success("I have received your message, I will get back to you soon!", {
            id: toastId
          })
        },
        (error) => {
          // console.log("FAILED...", error.text);
          toast.error("There was an error sending your message, please try again later!",{
            id: toastId
          })
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Ye Myat Hein",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(templateParams);
  };
  console.log(errors);

  return (
    <>
      <Toaster richColors={true}/>
      <motion.form
      variants={container}
      initial="hidden"
      animate='show'
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
        variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focu:ring-accent/50 custom-bg"
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters",
            },
          })}
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <motion.input
        variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focu:ring-accent/50 custom-bg"
          type="email"
          placeholder="email"
          {...register("email", { required: "This field is required!" })}
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}
        <motion.textarea
          variants={item}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focu:ring-accent/50 custom-bg"
          placeholder="message"
          {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 500,
              message: "Message should be less than 500 characters!",
            },
            minLength: {
              value: 50,
              message: "Message should be more than 50 characters!",
            },
          })}
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}
        <motion.input
          variants={item}
          className="px-10 py-4 rounded-md shadow:lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          value="Cast your message"
          type="submit"
        />
      </motion.form>
    </>
  );
}