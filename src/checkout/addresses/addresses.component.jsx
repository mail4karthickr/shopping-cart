import Accordion from "../../common/components/accordion/accordion.component"
import React from "react"
import { Container } from "./addresses.styles"
import Address from "../address/address.component"

const Addresses = () => {
    const addresses = [
        {
            fullname: 'Karthick',
            mobnumber: '9840839368',
            pincode: '560100',
            flat:'L212, Godrej e city',
            area:'Doddathogur',
            landmark:'Doddathogur road',
            town:'Electronic city',
            state:'Karnataka',
            isDefault: false
        },
        {
            fullname: 'Karthick',
            mobnumber: '9840839368',
            pincode: '560100',
            flat:'L212, Godrej e city',
            area:'Doddathogur',
            landmark:'Doddathogur road',
            town:'Electronic city',
            state:'Karnataka',
            isDefault: false
        }
    ]

    return (
        <Accordion title="Addresses">
            <Container>
            {
                addresses.map((address) => {
                    return <Address key={address.mobnumber} address={address} />
                })
            }
            </Container>
        </Accordion>
    );
}

export default Addresses;