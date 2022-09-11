import React from 'react';
import { PageSpinnerContainer } from './page-spinner.styles';
import Spinner from '../spinner/spinner.component';

const PageSpinner = ({message}) => {
    return (
        <PageSpinnerContainer>
            <Spinner />
            <div>{message}</div>
        </PageSpinnerContainer>
    );
}

export default PageSpinner;