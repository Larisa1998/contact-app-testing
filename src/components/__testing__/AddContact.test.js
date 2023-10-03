import { render, screen } from '@testing-library/react'
import AddContact from '../AddContact'

describe.only('add contact component', () => {
    it('should render name label in the document', () => {
        const { getByLabelText } = render(<AddContact />)
        const childElement = getByLabelText('Name');
        expect(childElement).toBeInTheDocument();
    })
    it('should render email label in the document', () => {
        const { getByLabelText } = render(<AddContact />)
        const childElement = getByLabelText('Email')
        expect(childElement).toBeTruthy();
    })

    it('should render the form with one button', () => {
        render(<AddContact />)
        const button = screen.findByRole('button');
        expect(button).toBeTruthy();
    })

    it('should render input if it is', () => {
        render(<AddContact />)
        const input = screen.findByRole('input', { name: /name/i });
        expect(input).toBeTruthy();
    })

    it('should render input email if it is', () => {
        render(<AddContact />);
        const inputEmail = screen.findByRole('input', { name: /email/i, placeholder: /Email/ });
        expect(inputEmail).toBeTruthy();
    })

    it('should has a className', async ()=>{
        const {element} = render(<AddContact />)
        const button = await screen.findByRole('button')
        expect(button.className.match('ui button blue')).toBeTruthy();
    })
    it('should have a className', async () => {
        render(<AddContact/>);
        const form = await screen.findByRole('form');

        expect(form.className).toMatch('ui form')
    });
})