import $ from 'jquery';

export const home = () => {
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2>Home</h2>');
    const p = $(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`);

    fragment.append(h2);
    fragment.append(p);
    return fragment;
}
