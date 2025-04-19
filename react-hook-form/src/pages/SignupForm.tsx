import { useForm } from "react-hook-form"
import { SignupFormData, signupSchema } from '../schemas';
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer, InputCheckboxGroup, InputEmail, InputFile, InputPassword, InputRadioGroup, InputSelect, InputText, SubmitButton, ToggleSwitch } from "../components";
import InputTextarea from "../components/InputTextArea";

export default function SignupForm() {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<SignupFormData>({ resolver: zodResolver(signupSchema) });
    const onSubmit = (data: SignupFormData) => {
        console.log("Form Data:", data);
    };

    return (
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <InputText label="Name" register={register("name")} error={errors.name} />
            <InputEmail register={register("email")} error={errors.email} />
            <InputPassword register={register("password")} error={errors.password} />
            <InputTextarea label="Bio" register={register("bio")} />
            <InputSelect
              label="Country"
              register={register("country")}
              error={errors.country}
              options={[
                { value: "us", label: "United States" },
                { value: "ca", label: "Canada" },
                { value: "uk", label: "United Kingdom" },
              ]}
            />
            <InputRadioGroup
              label="Gender"
              name="gender"
              options={["Male", "Female", "Other"]}
              register={register}
              error={errors.gender}
            />
            <InputCheckboxGroup
              label="Skills"
              name="skills"
              options={["HTML", "CSS", "JavaScript", "React"]}
              register={register}
            />
            {errors.skills && <p className="text-sm text-red-500">{errors.skills.message}</p>}
    
            <InputFile label="Upload Resume" register={register("file")} />
            {errors.file && <p className="text-sm text-red-500">{errors.file.message as string}</p>}
    
            <ToggleSwitch
              label="Agree to terms"
              value={watch("agreed") || false}
              onChange={(val) => setValue("agreed", val)}
            />
            {errors.agreed && <p className="text-sm text-red-500">{errors.agreed.message}</p>}
    
            <SubmitButton label="Create Account" />
          </form>
        </FormContainer>
      );
    }
