import { ComponentPropsWithoutRef, memo, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

type UserForm = {
  name: string;
  age: number;
};

export const useUserForm = (user: {
  id: number;
  name: string;
  age: number;
}) => {
  const { register, handleSubmit, reset } = useForm<UserForm>();

  useEffect(() => {
    reset(user);
  }, [user, reset]);

  const NameInput = memo((props: ComponentPropsWithoutRef<"input">) => (
    <input {...props} {...register("name")} />
  ));

  const AgeInput = memo((props: ComponentPropsWithoutRef<"input">) => (
    <input {...props} {...register("age")} />
  ));

  const submit = useMemo(
    () => handleSubmit((data) => console.log(data)),
    [handleSubmit]
  );

  return {
    NameInput,
    AgeInput,
    submit,
  };
};
