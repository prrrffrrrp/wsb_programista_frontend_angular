import { useState } from 'react';

const FormattedName = ({ name }) => {

    const capitalizeName = () => {
        return name
            .toLowerCase()
            .replace(/^\w/, (c) => c.toUpperCase());
    }

    return <p>{capitalizeName()}</p>
}

export default FormattedName;
