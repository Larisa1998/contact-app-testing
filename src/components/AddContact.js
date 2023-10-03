import React from 'react'

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    }
    add = (e) => {
         e.preventDefault()
         if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are empty")
            return
         }  
         this.props.addContactHandler(this.state);
         this.setState({ name: "", email: "" });
    }
    render() {
        return (
            <div className='div ui main '>
                <form className='ui form' id='form' onSubmit={this.add} name='form'>
                    <h2>Add Contact</h2>
                    <div className='field'>
                        <label htmlFor='name'>Name</label>
                        <input id='name' type='text' 
                        name='name' 
                        placeholder='Name'
                        value={this.state.name} 
                        onChange={(e) => this.setState({ name: e.target.value })} 
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor='email'>Email</label>
                        <input id='email'
                        type='text' 
                        name='email' 
                        placeholder='Email'
                        value={this.state.email} 
                        onChange={(e) => this.setState({ email: e.target.value })} 
                        />
                    </div>

                    <button className='ui button blue'>Add</button>





                </form>
            </div>
        )
    }
}


export default AddContact;