import React from "react";
import { useForm } from "react-hook-form";

export default function ABasic() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm( {mode: "onTouched"} );

  const onSubmit = data => alert(JSON.stringify(data));
    console.log(watch("email")); // watch input value by passing the name of it

  return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} >

        {/* register your input into the hook by invoking the "register" function */}
        <input type="text" placeholder="Email"
               {...register("email",
                   {required: true, minLength: 5, maxLength: 120}
               )} />
        {errors.email && <span>Email is required.</span>}
    < br />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          type="password"
          placeholder="Password"
          {...register("password",
              {
                  required: "PASSWORD REQUIRED!",
                  minLength: {value: 8, message:"Must be at least 8 chars"}
              }
          )}
        />
        {errors.password && <span>{errors.password.message}</span>}
        < br />

        <input type="submit" />
    </form>
  );
}


