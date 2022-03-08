// Core
import React from 'react';
import {  useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Bus
// import {} from '../../../bus/'

// Hooks
import { useStudent } from '../../../../bus/student/index';

// Styles
import * as S from './styles';
import { validationSchema } from './validationSchema';
import { initialValues } from './initialValues';

export const StudentRegistrationComponent = () => {
    const { register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode:          'onChange',
        defaultValues: initialValues,
        resolver:      yupResolver(validationSchema) });


    const {
        applyStudent,
    } = useStudent();

    const onSubmit = (data: any) => {
        applyStudent(data);
        reset();
        //  как сборосить форму
    };


    return (
        <S.Container>
            <S.Form onSubmit = { handleSubmit(onSubmit) }>
                <div>
                    <label htmlFor = 'firstName'>First Name
                        <input
                            placeholder = 'firstName'
                            type = 'text'
                            { ...register('firstName') }
                        />
                        <S.ErrorMsg>{errors.firstName?.message}</S.ErrorMsg>
                    </label>
                </div>
                <div>
                    <label htmlFor = 'lastName'>Last Name
                        <input
                            placeholder = 'lastName'
                            type = 'text'
                            { ...register('lastName') }
                        />
                        <S.ErrorMsg>{errors.lastName?.message}</S.ErrorMsg>
                    </label>
                </div>
                <div>
                    <label htmlFor = 'age'>Age
                        <input
                            placeholder = 'age'
                            type = 'number'
                            { ...register('age') }
                        />
                        <S.ErrorMsg>{errors.age?.message}</S.ErrorMsg>
                    </label>
                </div>
                <div>
                    <label htmlFor = 'speciality'>Speciality</label> <br />
                    <select
                        { ...register('speciality') }>
                        <option value = 'designer'>designer</option>
                        <option value = 'developer'>developer</option>
                        <option value = 'writer'>writer</option>
                    </select>
                </div>

                <div>
                    <label htmlFor = 'email'>Email</label> <br />
                    <input
                        placeholder = 'test@hotmail.com'
                        type = 'email'
                        { ...register('email') }
                    />
                    <S.ErrorMsg>{errors.email?.message}</S.ErrorMsg>
                </div>
                <div>
                    <label>
                        Male
                        <input
                            { ...register('sex') }
                            type = 'radio'
                            value = 'Male'
                        />
                    </label>
                    <label>
                        Female
                        <input
                            { ...register('sex') }
                            type = 'radio'
                            value = 'Female'
                        />
                    </label>
                </div>
                <input type = 'submit' />
            </S.Form>
        </S.Container>
    );
};
