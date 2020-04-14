import Link from 'next/link';
import styled from 'styled-components'

const Inner = styled.div`
max-width: 1000px;
background: lightblue;
margin: 0 auto;
padding: 2rem;
`

const Sell = props =>(
    <Inner>
        <p>Sell!</p>
    </Inner>
)


export default Sell;