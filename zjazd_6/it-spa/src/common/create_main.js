import $ from 'jquery';
import * as views from "../views";
import { roomDetails } from '../views/rooms/room_details';

export const createMain = () => {
    const main = $(`<main></main>`);

    console.log(views)
    console.log(views.home)
    console.log(views.rooms)

    document.addEventListener('navigation', event => {
        // na jaki view chcesz przejść?
        const viewName = event.detail.name;

        switch (viewName) {
            case 'room-details':
                main.empty().append(roomDetails(event.detail.roomId));
                break;
            default:
                // return function
                const viewFn = views[viewName];
                // wstaw nowy view do main
                main.empty().append(viewFn());
        }
    });

    return main;
};
