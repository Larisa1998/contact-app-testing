import {render, screen} from '@testing-library/react'
import App from '../App';

describe('App component',()=>{
// describe.only('App component',()=>{
// describe.skip('App component',()=>{

    test("renders the app", () => {
        render(<App />);
        const title = screen.getByText(/Contact Manager/i);
        expect(title).toBeInTheDocument();
    })
    test('should render Add Contact text',()=>{
        render(<App/>);
        const addContactText= screen.getByText(/Add Contact/i);
        expect(addContactText).toBeInTheDocument;
    })
})


// it('should add two numbers',()=>{
//     const a =2;
//     const b =3;
//     expect(a+b).toBe(5);
// })
