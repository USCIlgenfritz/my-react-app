// script.js

const scheduleData = [
    {
        "race": "Bahrain Grand Prix",
        "track": "Bahrain International Circuit",
        "date": "March 2, 2024",
        "location": "Sakhir, Bahrain",
        "winner": "Max Verstappen"
    },
    {
        "race": "Saudi Arabian Grand Prix",
        "track": "Jeddah Corniche Circuit",
        "date": "March 9, 2024",
        "location": "Jeddah, Saudi Arabia",
        "winner": "Max Verstappen"
    },
    {
        "race": "Australian Grand Prix",
        "track": "Albert Park Grand Prix Circuit",
        "date": "March 24, 2024",
        "location": "Melbourne, Australia",
        "winner": "Carlos Sainz"
    },
    {
        "race": "Japanese Grand Prix",
        "track": "Suzuka International Racing Course",
        "date": "April 7, 2024",
        "location": "Suzuka, Japan",
        "winner": "Max Verstappen"
    },
    {
        "race": "Chinese Grand Prix",
        "track": "Shanghai International Circuit",
        "date": "April 21, 2024",
        "location": "Shanghai, China",
        "winner": "Max Verstappen"
    },
    {
        "race": "Miami Grand Prix",
        "track": "Miami International Autodrome",
        "date": "May 5, 2024",
        "location": "Miami, USA",
        "winner": "Lando Norris"
    },
    {
        "race": "Emilia-Romagna Grand Prix",
        "track": "Autodromo Enzo e Dino Ferrari",
        "date": "May 19, 2024",
        "location": "Imola, Italy",
        "winner": "Max Verstappen"
    },
    {
        "race": "Monaco Grand Prix",
        "track": "Monaco Street Circuit",
        "date": "May 26, 2024",
        "location": "Monte Carlo, Monaco",
        "winner": "Charles Leclerc"
    },
    {
        "race": "Canadian Grand Prix",
        "track": "Circuit Gilles Villeneuve",
        "date": "June 9, 2024",
        "location": "Montreal, Canada",
        "winner": "Max Verstappen"
    },
    {
        "race": "Spanish Grand Prix",
        "track": "Circuit de Barcelona-Catalunya",
        "date": "June 23, 2024",
        "location": "Barcelona, Spain",
        "winner": "Max Verstappen"
    },
    {
        "race": "Austrian Grand Prix",
        "track": "Red Bull Ring",
        "date": "June 30, 2024",
        "location": "Spielberg, Austria",
        "winner": "George Russell"
    },
    {
        "race": "British Grand Prix",
        "track": "Silverstone Circuit",
        "date": "July 7, 2024",
        "location": "Silverstone, UK",
        "winner": "Lewis Hamilton"
    },
    {
        "race": "Hungarian Grand Prix",
        "track": "Hungaroring",
        "date": "July 21, 2024",
        "location": "Budapest, Hungary",
        "winner": "Oscar Piastri"
    },
    {
        "race": "Belgian Grand Prix",
        "track": "Circuit de Spa-Francorchamps",
        "date": "July 28, 2024",
        "location": "Stavelot, Belgium",
        "winner": "Lewis Hamilton"
    },
    {
        "race": "Netherlands Grand Prix",
        "track": "Zandvoort Circuit",
        "date": "August 25, 2024",
        "location": "Zandvoort, Netherlands",
        "winner": "Lando Norris"
    },
    {
        "race": "Italian Grand Prix",
        "track": "Monza Circuit",
        "date": "September 1, 2024",
        "location": "Monza, Italy",
        "winner": "Charles Leclerc"
    },
    {
        "race": "Azerbaijan Grand Prix",
        "track": "Baku City Circuit",
        "date": "September 15, 2024",
        "location": "Baku, Azerbaijan",
        "winner": "Oscar Piastri"
    },
    {
        "race": "Singapore Grand Prix",
        "track": "Marina Bay Street Circuit",
        "date": "September 22, 2024",
        "location": "Singapore",
        "winner": "Lando Norris"
    },
    {
        "race": "United States Grand Prix",
        "track": "Circuit of the Americas",
        "date": "October 20, 2024",
        "location": "Austin, USA",
        "winner": "Charles Leclerc"
    },
    {
        "race": "Mexican Grand Prix",
        "track": "Autódromo Hermanos Rodríguez",
        "date": "October 27, 2024",
        "location": "Mexico City, Mexico",
        "winner": "Carlos Sainz"
    },
    {
        "race": "Brazilian Grand Prix",
        "track": "Interlagos",
        "date": "November 3, 2024",
        "location": "Sao Paulo, Brazil",
        "winner": ""
    },
    {
        "race": "Las Vegas Grand Prix",
        "track": "Las Vegas Strip Circuit",
        "date": "November 23, 2024",
        "location": "Las Vegas, USA",
        "winner": ""
    },
    {
        "race": "Qatar Grand Prix",
        "track": "Losail International Circuit",
        "date": "December 1, 2024",
        "location": "Losail, Qatar",
        "winner": ""
    },
    {
        "race": "Abu Dhabi Grand Prix",
        "track": "Yas Marina Circuit",
        "date": "December 8, 2024",
        "location": "Abu Dhabi, UAE",
        "winner": ""
    }
];

const tbody = document.querySelector("#schedule-table tbody");

scheduleData.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.race}</td>
        <td>${item.track}</td>
        <td>${item.date}</td>
        <td>${item.location}</td>
        <td>${item.winner || 'N/A'}</td>
    `;
    tbody.appendChild(row);
});

