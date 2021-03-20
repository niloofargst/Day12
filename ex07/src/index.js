var collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
}

// Keep a copy of the collection for tests
var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {
    // Only change code below this line
    if (prop !== "tracks" && value !== "") {
        object[id][prop] = value;
    } else if (prop == "tracks" && !object[id].hasOwnProperty("tracks")) {
        object[id][prop] = [value];
    } else if (prop == "tracks" && value != "") {
        object[id][prop].push(value);
    } else if (value === "") {
        delete object[id][prop];
    }

    return object;

    // Only change code above this line
}

console.log(updateRecords(collection, 5439, "artist", "ABBA"));
console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(collection, 2548, "artist", ""));

module.exports = updateRecords;