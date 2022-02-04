import React from 'react';

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    render() {
        return (
            <form className='fish-edit' onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>

                <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>

                <select name="status" ref={this.statusRef}>
                    <option value='available'>Fresh!</option>
                    <option value='unavailable'>Sold Out!</option>
                </select>

                <textarea name="desc" ref={this.descRef} placeholder="Desc"></textarea>

                <input name="image" ref={this.imageRef} type="text" placeholder="Image"/>

                <button type='submit'>+ Add Fish</button>
            </form>
        );
    }

    createFish = (event) => {
        // Stop the form from reloading the page on submit.
        event.preventDefault();

        // Create a fish object.
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        };

        // Add this fish to the state.
        this.props.addFish(fish);

        // Reset the form.
        event.currentTarget.reset();
    };
}

export default AddFishForm;
