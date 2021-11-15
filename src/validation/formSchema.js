import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),
    email: yup
        .string()
        .required("You must select a size for your pizza")
        .oneOf(['small', 'medium', 'large'], "Pizza size is required"),
    password: yup
        .string()
});

export default formSchema;