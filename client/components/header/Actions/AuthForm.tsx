import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { Field, Formik } from 'formik'
import React, { FC } from 'react'

type AuthFormProps = {
  callback: any,
  onClose: () => void
  title: string
}

const AuthForm: FC<AuthFormProps> = ({ callback, onClose, title }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values) => {
        try {
          await callback({ email: values.email, password: values.password })
          onClose()
        } catch(error: any) {
          alert(error.message)
        }
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit} className='pb-2'>
          <FormControl marginBottom={'10px'}>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Field
              as={Input}
              id="email"
              name="email"
              type="email"
            />
          </FormControl>
          <FormControl isInvalid={!!errors.password && touched.password} marginBottom={'15px'}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Field
              as={Input}
              id="password"
              name="password"
              type="password"
              validate={(value: string) => {
                let error;
                if (value.length < 5) {
                  error = "Password must contain at least 5 characters";
                }
                return error;
              }}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
          <div className='text-right'>
            <button className='px-2 py-1 | rounded | transition-all font-semibold bg-gray-200 hover:bg-gray-300' type='submit'>{title}</button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default AuthForm