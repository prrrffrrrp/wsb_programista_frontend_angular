import FormattedName from './FormattedName';
import { useState } from 'react';


const NameComponent = () => {
    const [name, setName] = useState('Jan');

    return <div>
        <input onChange={ e => setName(e.target.value)}/>
        <FormattedName name={ name }/>
    </div>
}

export default NameComponent;
