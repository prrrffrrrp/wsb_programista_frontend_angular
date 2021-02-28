import $ from 'jquery';
import axios from 'axios';

export const rooms = () => {
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2>Rooms</h2>');
    const roomList = $('<section></section>');

    fragment.append(h2)
    fragment.append(roomList)

    // Object { id: 1, name: "Pokój unarny", beds: 1, guests: 1, price: 170}
    axios
        .get('http://localhost:3000/rooms')
        .then(response => response.data)
        .then(rooms => rooms.map(room => {
            const article = $(`
                <article style="background: #f5f5dc">
                    <p><strong>Beds:</strong> ${room.beds}</p>
                    <p><strong>Guests:</strong> ${room.guests}</p>
                    <p><strong>Price:</strong> ${room.price.toFixed(2)}</p>
                </article>
            `);

            const h4 = $(`<h4>${room.name}</h4>`);

            h4.on('click', () => {
                const customEvent = new CustomEvent('navigation', {
                    detail: {
                        name: 'room-details',
                        roomId: room.id
                    }
                });
                
                document.dispatchEvent(customEvent);
            });

            article.prepend(h4);
            return article;
        }
        ))

        .then(articles => roomList.empty().append(articles));


    // add elements to 'fragment'
    

    return fragment;
};
