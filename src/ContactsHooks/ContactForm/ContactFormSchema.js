import * as Yup from 'yup';

export const initialValues = {
  name: '',
  number: '',
};

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// const phoneRegExp = /^\d{3}-\d{3}-\d{2}-\d{2}$|^\d{10}$/;

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'must be at least 3 characters long')
    .max(10, 'must be at least 3 characters long')
    .required(),

  number: Yup.string()
    .matches(
      phoneRegExp,
      'Phone number is not valid'
      // 'Phone number is not valid 050-555-55-55 or 0505554411'
    )
    .min(5, 'must be at least 3 characters long')
    .max(13, 'must be at least 3 characters short')
    .required(),
});
