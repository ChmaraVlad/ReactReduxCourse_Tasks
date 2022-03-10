/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import StudentRegistrationComponent from '../StudentRegistrationComponent';


// ================== firstName
test('it should validate required firstName', async () => {
    const { findByLabelText, findByText, findByRole } = render(<StudentRegistrationComponent/>);
    const firstName = await findByLabelText('firstName');

    await act(async () => {
        fireEvent.input(firstName, { target: { value: '' }});
        fireEvent.submit(await findByRole('button'));

        const error = await findByText('Should be provided');
        expect(error).toBeInTheDocument();
    });
});

test('it should validate length less than 15 chars firstName', async () => {
    const { findByLabelText, findByText, findByRole } = render(<StudentRegistrationComponent/>);
    const firstName = await findByLabelText('firstName');

    await act(async () => {
        fireEvent.input(firstName, { target: { value: 'Vldkflcidndkstahd' }});
        fireEvent.submit(await findByRole('button'));

        const error = await findByText('Must be 15 chars or less');
        expect(error).toBeInTheDocument();
    });
});

test('it should validate length more than 2 chars firstName', async () => {
    const { findByLabelText, findByText, findByRole } = render(<StudentRegistrationComponent/>);
    const firstName = await findByLabelText('firstName');

    await act(async () => {
        fireEvent.input(firstName, { target: { value: 'V' }});
        fireEvent.submit(await findByRole('button'));

        const error = await findByText('Must be more than 2 chars');
        expect(error).toBeInTheDocument();
    });
});
// ========================== lastName
test('it should validate required lastName', async () => {
    const { findByLabelText, findByText, findByRole } = render(<StudentRegistrationComponent/>);
    const firstName = await findByLabelText('lastName');

    await act(async () => {
        fireEvent.input(firstName, { target: { value: '' }});
        fireEvent.submit(await findByRole('button'));

        const error = await findByText('Should be provided');
        expect(error).toBeInTheDocument();
    });
});

test('it should validate length less than 20 chars lastName', async () => {
    const { findByLabelText, findByText, findByRole } = render(<StudentRegistrationComponent/>);
    const firstName = await findByLabelText('lastName');

    await act(async () => {
        fireEvent.input(firstName, { target: { value: 'Vldkflcidndkstahd' }});
        fireEvent.submit(await findByRole('button'));

        const error = await findByText('Must be 20 chars or less');
        expect(error).toBeInTheDocument();
    });
});

test('it should validate length more than 2 chars LastName', async () => {
    const { findByLabelText, findByText, findByRole } = render(<StudentRegistrationComponent/>);
    const firstName = await findByLabelText('lastName');

    await act(async () => {
        fireEvent.input(firstName, { target: { value: 'C' }});
        fireEvent.submit(await findByRole('button'));

        const error = await findByText('Must be more than 2 chars');
        expect(error).toBeInTheDocument();
    });
});

// =============== email
test('it should validate email', async () => {
    const { findByLabelText, findByText, findByRole } = render(<StudentRegistrationComponent />);
    const input = await findByLabelText('email');

    await act(async () => {
        fireEvent.input(input, { target: { value: 'abcdedfghdf' }});
        fireEvent.submit(await findByRole('button'));

        const error = await findByText('Should be a valid email');
        expect(error).toBeInTheDocument();
    });
});
