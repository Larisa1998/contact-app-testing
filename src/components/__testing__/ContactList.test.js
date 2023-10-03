import ContactCard from "../ContactCard";
import { render, screen } from '@testing-library/react'

it('should render contact card', () => {
    render(<ContactCard props={id=1, name={test} }/>)
// expect(getByText(/ContactCard/i).textContent).toBeInTheDocument()

const linkElement = screen.getByText(/ContactCard/i);
       
        expect(linkElement).toBeInTheDocument()
})