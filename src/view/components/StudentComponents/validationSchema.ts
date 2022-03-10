import * as Yup from 'yup';

export const validationSchema = Yup.object({
    firstName: Yup.string().max(15, 'Must be 15 chars or less')
        .min(2, 'Must be more than 2 chars')
        .required('Should be provided'),
    lastName: Yup.string().max(20, 'Must be 20 chars or less')
        .min(2, 'Must be more than 2 chars')
        .required('Should be provided'),
    email: Yup.string().email('Should be a valid email')
        .required('Should be provided'),
    sex:        Yup.string(),
    speciality: Yup.string(),
    age:        Yup.number().positive()
        .integer()
        .max(99)
        .min(16),
}).required();
