import React from 'react';
import Header from '../common/Header';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  return (
    <>
      <Header />
      <div className="flex flex-col mx-5 justify-center items-center">
        <h1 className="text-[#181F26] text-[26px] font-sans font-extrabold">
          Sign in or create
        </h1>

        <div className="mt-10 w-full max-w-md">
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log('values', values);
            }}
          >
            {({
              isSubmitting,
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
            }) => (
              <Form>
                <div className="mb-6">
                  <div className="flex flex-col">
                    <input
                      id="email"
                      type="email"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Enter Email or User Name"
                      className={`w-full p-2.5 text-base border-2 bg-[#FFF] rounded-lg ${
                        errors.email && touched.email
                          ? 'border-[#fc8181]'
                          : 'border-[#E9EDF2]'
                      }`}
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-[#fc8181] text-xs text-left mt-1"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex flex-col">
                    <input
                      id="password"
                      type="password"
                      onChange={handleChange}
                      value={values.password}
                      onBlur={handleBlur}
                      placeholder="Password"
                      className={`w-full p-2.5 text-base border-2 bg-[#FFF] rounded-lg ${
                        errors.password && touched.password
                          ? 'border-[#fc8181]'
                          : 'border-[#E9EDF2]'
                      }`}
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-[#fc8181] text-xs text-left mt-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1 my-5 font-sans text-[14px] text-green-800 font-extrabold">
                  <h1 className="underline">Forgot Your User Name?</h1>
                  <h1 className="underline">Forgot Your Password?</h1>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      handleSubmit();
                    }}
                    type="button"
                    className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Sign in
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
