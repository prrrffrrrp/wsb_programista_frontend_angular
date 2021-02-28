import $ from 'jquery';

export const createHeader = () => {
    const header = $(`
        <header>
            <h1>IT SPA</h1>
        </header>
    `);

    return header;
};
