import { InputHTMLAttributes } from 'react';
import { Input, ErrorText, InputMask } from './styles';
import { Path, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../App';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<FormValues>;
  type: string;
  register: UseFormRegister<FormValues>;
  errorMessage?: string;
  value?: string;
  placeholder: string;
}

export function InputComponent({
  name,
  type,
  register,
  errorMessage,
  value,
  placeholder,
}: InputProps) {
  return (
    <>
      {name === 'phone' ? (
        <InputMask
          mask={'(99) 99999-9999'}
          placeholder={placeholder}
          value={value}
          type={type}
          {...register(name, { required: true })}
        />
      ) : (
        <Input
          placeholder={placeholder}
          value={value}
          type={type}
          {...register(name, { required: true })}
        />
      )}
      <ErrorText>{errorMessage}</ErrorText>
    </>
  );
}
