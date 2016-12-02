$(document).ready(function() {
    const rooms = {
        0: {
            purpose: ['meetings', 'quiettime'],
            availability: 0,
            name: "Red"
        },
        1: {
            purpose: ['meetings', 'learning'],
            availability: 0,
            name: "White"
        },
        2: {
            purpose: ['working', 'quiettime', 'learning'],
            availability: 0,
            name: "Green"
        },
        3: {
            purpose: ['games', 'meetings'],
            availability: 0,
            name: "Blue"
        },
        4: {
            purpose: ['games', 'working'],
            availability: 0,
            name: "Yellow"
        },
        5: {
            purpose: ['learning', 'quiettime'],
            availability: 0,
            name: "Orange"
        },
    };

    const roomsDiv = drawRoomsDiv(rooms);
    $('#all-rooms').append(roomsDiv);

    $('#room-name').on('input', function() {
        const value = $(this).val();
        $('#rooms-dropdown').empty();
        if (value.length > 0) {
            const dropDownDivs = drawDropDowns(containsActivity(rooms, value));
            $('#rooms-dropdown').append(dropDownDivs);
        }
    })
});

Object.filter = (obj, predicate) =>
    Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res, key) => (res[key] = obj[key], res), {});



function getRooms() {
    return rooms;
}

function containsActivity(rooms, searchTerm) {
    return Object.filter(rooms, function(room) {
        var contains = false;
        room.purpose.map(function(purpose) {
            if (purpose.indexOf(searchTerm) > -1) {
                contains = true;
                return;
            }
        });
        return contains;
    });
}

function showRoomsDiv() {
    var isVisible = $('#toggle-room-div').text().indexOf("Show") === 0;
    $('#toggle-room-div').html(isVisible ? "Hide All Rooms" : "Show All Rooms");
    $('#all-rooms').toggle();
}

function drawDropDowns(rooms) {
    var dropDowns = "";
    const roomkeys = Object.keys(rooms);
    for (var i = 0; i < roomkeys.length; i++) {
        dropDowns += `<li class="collection-item"><a class="room-name">${rooms[roomkeys[i]].name}</a></li>`;
    }
    return dropDowns;
}

function drawRoom(room) {
    return `<div class="col s4">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">
                                ${room.name}
                            </span>
                            <ul class="collection with-header">
                                ${drawPurposeDiv(room.purpose)}
                            </ul>
                            <p>Avalilabilty: ${room.availability ? 'Unavailable' : 'Available'} </p>
                        </div>
                    </div>
            </div>`;
}

function drawPurposeDiv(arrayOfPurposes) {
    var purposeDiv = "";
    for (var i = 0; i < arrayOfPurposes.length; i++) {
        purposeDiv += `<li class="collection-item">${arrayOfPurposes[i]}</li>`;
    }
    return purposeDiv;
}

function drawRoomsDiv(rooms) {
    let roomsDiv = "";
    const roomkeys = Object.keys(rooms);
    for (let i = 0; i < roomkeys.length; i++) {
        roomsDiv += drawRoom(rooms[roomkeys[i]]);
    }
    return roomsDiv;
}