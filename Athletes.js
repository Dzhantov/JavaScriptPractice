function solve(athletes){

    function getAthletesBySport(sport){
        const filteredAthletes = athletes.filter(athlete => athlete.sport === sport);

        return filteredAthletes;
    }

    function addAthlete(id, name, sport, medals, country) {
        const athletetOAdd = {id, name, sport, medals, country };

        athletes.push(athletetOAdd);

        return athletes;
    }

    function getAthleteById(id) {
        const foundAthlete = athletes.find(athlete => athlete.id === id);

        if(foundAthlete){
            return foundAthlete;
        }else{
            return `Athlete with ID ${id} not found`
        }
    }

    function removeAthleteById(id) {
        const initialLength = athletes.length;

        athletes = athletes.filter(athlete => athlete.id !== id);

        if(initialLength !== athletes.length){
            return athletes;
        }else{
            return `Athlete with ID ${id} not found`
        }
    }

    function updateAthleteMedals(id, newMedals) {
        const foundAthlete = athletes.find(athlete => athlete.id === id);

        if(foundAthlete){
            foundAthlete.medals = newMedals;
            return athletes;
        }else{
            return `Athlete with ID ${id} not found`
        }
    }

    function updateAthleteCountry(id, newCountry) {
        const foundAthlete = athletes.find(athlete => athlete.id === id);

        if(foundAthlete){
            foundAthlete.country = newCountry;
            return athletes;
        }else{
            return `Athlete with ID ${id} not found`
        }
    }

    return {
        getAthletesBySport,
        addAthlete,
        getAthleteById,
        removeAthleteById,
        updateAthleteMedals,
        updateAthleteCountry
    }
}

let athletes = [
    { id: 1, name: "Usain Bolt", sport: "Sprinting", medals: 8, country: "Jamaica" },
    { id: 2, name: "Michael Phelps", sport: "Swimming", medals: 23, country: "USA" },
    { id: 3, name: "Simone Biles", sport: "Gymnastics", medals: 7, country: "USA" }
  ];

const solveFunctionResult = solve(athletes);
let results = solveFunctionResult.updateAthleteCountry(10, 'Bulgaria');
console.log(JSON.stringify(results));
