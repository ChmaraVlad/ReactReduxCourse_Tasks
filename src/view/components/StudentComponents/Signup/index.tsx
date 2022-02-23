import React from 'react';
import { LinksJsx } from '../../../routes/LinksJsx';
import { StudentRegistrationComponent } from './StudentRegistrationComponent';

// Components


export const Signup = ()=>{
    return (
        <section>
            <nav>
                {LinksJsx}
            </nav>
            <h1>Subscribe</h1>
            <StudentRegistrationComponent />
        </section>
    );
};
