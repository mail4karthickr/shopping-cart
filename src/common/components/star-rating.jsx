import styled from 'styled-components';\
import { useState } from 'react';

export const StarRating = ({rating}) => {
    const [getRating, setRating] = useState(rating);
    const [hover, setHover] = useState(0);

    return (
        <Container>
            {
                [...Array(5)].map((star, index) => {
                    index += 1;
                })
            }
        </Container>
    );
}

const Container = styled.div``