import React ,{useState} from 'react';

function Form() {

//search = state , saveSearch = this.setState({})
    const [search, saveSearch]  = useState({
        city : '',
        country : ''
    })

    const handleChange = e => {
        saveSearch({
            ...search,
            [e.target.name] :e.target.value
        });
    }
    return (
        <form >
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleChange}
                />
                <label htmlFor="city">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select onChange={handleChange}
                    name="country">
                    <option value="">Selecciona un país</option>
                    <option value="US">Estados Unidos</option>
                    <option value="CO">Colombia</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    value="Buscar Clima" />
            </div>

        </form>
    )

}

export default Form;