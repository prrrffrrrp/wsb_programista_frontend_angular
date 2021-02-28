import $ from 'jquery';

export const createFooter = () => {
    const footer = $(`
        <footer>
            <p>copyright 2021 it-spa app</p>
        </footer>
    `);

    return footer;
};
