import * as Yup from 'yup';

export const initialValues = {
  name: '',
};

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'must be at least 3 characters long')
    .max(20, 'must be at least 3 characters long')
    .required(),
});
