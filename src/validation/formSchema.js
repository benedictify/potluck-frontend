import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("You must enter a name for your account")
        .min(2, "Your name must include at least 2 characters"),
    email: yup
        .string()
        .email()
        .required("You must an email for your account"),
    password: yup
        .string()
        .min(5, "Your password must be at least 5 characters"),
});

export default formSchema;