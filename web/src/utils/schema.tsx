import * as yup from 'yup';

const phoneRegExp =
  /^(?:(?:(?:\+|00)?(55)\s?)?(?:\(?(\d{2})\)?[-.\s]?)?)?(9\d{4})[-.\s]?(\d{4})$/;

export const schema = yup.object().shape({
  name: yup.string().required('O campo nome é obrigatório.'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Informe um número válido.')
    .required('O campo número é obrigatório'),
  email: yup
    .string()
    .email('Informe um e-mail válido.')
    .required('O campo e-mail é obrigatório.'),
  message: yup.string().required('O campo mensagem é obrigatório.'),
});
