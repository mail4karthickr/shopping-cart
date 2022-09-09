import Accordion from "../../../common/components/accordion/accordion.component"
import React, { useEffect } from "react"
import { Container } from "./addresses.styles"
import Address from "./address/address.component"
import { useDispatch, useSelector } from "react-redux"
import { getAddresses } from './addresses.slice';

const Addresses = () => {
    const { isLoading, addresses } = useSelector((store) => store.addresses);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAddresses());
    }, [])

    return (
        <Accordion title="Addresses">
            <Container>
            {
                addresses.map((address) => {
                    return <Address key={address.id} address={address} />
                })
            }
            </Container>
        </Accordion>
    );
}

export default Addresses;