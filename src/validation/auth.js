import * as Yup from 'yup';
import { PASSWORD_LENGTH } from '../constants/validation';

export const signInValidationRules = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid mail'),
  password: Yup.string()
    .required('Password is requested')
    .min(
      PASSWORD_LENGTH,
      `Password must be  ${PASSWORD_LENGTH} characters long`
    )
});

export const signUpValidationRules = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email must be a valid mail'),
  password: Yup.string()
    .required('Password is requested')
    .min(
      PASSWORD_LENGTH,
      `Password must be  ${PASSWORD_LENGTH} characters long`
    ),
  fullName: Yup.string().required('Full name is required')
});
