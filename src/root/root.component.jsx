import React from 'react';
import Navigation from '../navigation/navigation.route';
import { useSelector } from 'react-redux';
import PageSpinner from '../common/components/page-spinner.component';
import { RootContainer, SpinnerContainer } from './root.styles';

const Root = () => {
    const { showLoader } = useSelector((store) => store.root);
    return (
        <RootContainer>
            {showLoader && 
                <SpinnerContainer>
                    <PageSpinner message="Please wait..." />
                </SpinnerContainer>
            }
            <Navigation />
        </RootContainer>
    );
}

export default Root;