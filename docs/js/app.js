window.addEventListener("load", () => {
    let projects =  [
            {
                id: 7,
                image: 0,
                name: "PokéDraw",
                keywords: ["AI", "ml5","HTML","CSS","JS"],
                startdate: "28-03-2021",
                enddate: "19-04-2021",
                contributors: ["Quincy van der Sluis"],
                description: "",
                links: 
                    {
                        demo: "https://qwinsie.github.io/PokeDraw/",
                        github: "https://github.com/Qwinsie/PokeDraw",
                    }
                
            },
            {
                id: 8,
                image: 1,
                name: "ReviewAPI",
                keywords: ["RESTAPI","MERN","MongoDB","Express","React","npm"],
                startdate: "16-11-2020",
                enddate: "29-01-2021",
                contributors: ["Quincy van der Sluis"],
                description: "",
                links: 
                    {
                        video: "https://youtu.be/fdwTC-YwfvY",
                    }
                
            },
            {
                id: 9,
                image: 2,
                name: "Message of Peace",
                keywords: ["PHP","Laravel","HTML","CSS","JS","Bootstrap","Uganda","Interactive Web Application"],
                startdate: "31-08-2020",
                enddate: "13-01-2021",
                contributors: ["Eva van der Kroft","Jasper ten Haken","Lisa Keers","Rik Vermeulen","Quincy van der Sluis"],
                description: "",
                links: 
                    {
                        demo: "http://devenvironment.nl/",
                        github: "https://github.com/rikvermeulen/A-message-of-peace",
                        video: "https://youtu.be/9pbDAUNFC78",
                    },
                
            },
            {
                id: 10,
                image: 3,
                name: "Gamehub",
                keywords: ["PHP","Laravel","MYSQL"],
                startdate: "31-08-2020",
                enddate: "1-11-2020",
                contributors: ["Quincy van der Sluis"],
                description: "",
                links: 
                    {
                        github: "https://github.com/Qwinsie/Gamehub",
                    }
                
            },
            {
                id: 11,
                image: 4,
                name: "B.O.B Game",
                keywords: ["Typescript","DOM","HTML","CSS","Game"],
                startdate: "15-04-2020",
                enddate: "10-06-2021",
                contributors: ["Dennis van Britsum","Furkan Özdemir","Lucas van der Vegt","Quincy van der Sluis"],
                description: "",
                links: 
                    {
                        demo: "https://qwinsie.github.io/cle4-game/",
                        github: "https://github.com/Qwinsie/cle4-game",
                    },
                
            },
            {
                id: 12,
                image: 5,
                name: "PONG",
                keywords: ["Typescript","DOM","HTML","CSS","Game"],
                startdate: "15-04-2020",
                enddate: "10-06-2021",
                contributors: ["Quincy van der Sluis"],
                description: "",
                links: 
                    {
                        demo: "https://qwinsie.github.io/PONG/",
                        github: "https://github.com/Qwinsie/PONG",
                    },
                
            },
            {
                id: 5,
                image: 6,
                name: "WaterMappie",
                keywords: ["Mapbox API","ReactJS","HTML","SCSS","JS", "MongoDB"],
                startdate: "02-2022",
                enddate: "04-2022",
                contributors: ["Quincy van der Sluis", "Tom Faust", "Rik Vermeulen", "Manuja Jaggan", "Niek Rottier"],
                description: "",
                links: 
                    {
                        video: "https://www.youtube.com/watch?v=i_jYAxYEGq8",
                        github: "https://github.com/TomFaust/Medialab-Interactive_map",
                    },
                
            },
            {
                id: 1,
                image: 7,
                name: "SeaBeat",
                keywords: ["C#","Unity","Game"],
                startdate: "08-2022",
                enddate: "10-2022",
                contributors: ["Quincy van der Sluis", "Amber Ustun", "Jimmy Balgobiend", "Kylian Schuilenburg", "Kayleigh Huijsman"],
                description: "Mobile Rhythm Game on the Playstore",
                links: 
                    {
                        game: "https://play.google.com/store/apps/details?id=com.NeoNovaStudios.SeaBeat",
                        itch_io: "https://neonova-studios.itch.io/seabeat"
                    },
                
            },
            {
                id: 3,
                image: 8,
                name: "Treasure Hunt",
                keywords: ["Game","DOM","HTML","CSS","JS"],
                startdate: "02-2022",
                enddate: "06-2022",
                contributors: ["Quincy van der Sluis"],
                description: "",
                links: 
                    {
                        demo: "https://qwinsie.github.io/treasure_hunt/",
                        video: "https://www.youtube.com/watch?v=G6vA3WLlfP0",
                        github: "https://github.com/Qwinsie/treasure_hunt",
                    },
                
            },
            {
                id: 4,
                image: 9,
                name: "A Poets Dilemma",
                keywords: ["Game","Unity","C#"],
                startdate: "02-2022",
                enddate: "02-2022",
                contributors: ["Quincy van der Sluis", "Bogdan Golea", "Hannes"],
                description: "Platformer",
                links: 
                    {
                        game: "https://qwinsie.itch.io/poets-dillema",
                    },
                
            },
            {
                id: 2,
                image: 10,
                name: "Gloomwalker",
                keywords: ["Game","Unity","C#"],
                startdate: "08-2022",
                enddate: "08-2022",
                contributors: ["Quincy van der Sluis", "Tijs de Graaff", "Scott Reingoud"],
                description: "Turnbased Fantasy Fighting Simulator",
                links: 
                    {
                        game: "https://qwinsie.itch.io/poets-dillema",
                    },
                
            },
            {
                id: 6,
                image: 11,
                name: "Screen Green Machine",
                keywords: ["ReactJS","Mapbox API",""],
                startdate: "02-2021",
                enddate: "06-2021",
                contributors: ["Quincy van der Sluis", "Daphne Bruggeman", "Luuk's Gravendijk", "Marc van der Made", "Gertjan Egas"],
                description: "",
                links: 
                    {
                        github: "https://github.com/gert1999/ScreenGreenMachine",
                        video: "https://www.youtube.com/watch?v=KgFBbAZ0B_Y"
                    },
                
            },
        ]
    
        const list = document.getElementById("list")
        let sortedProjects = projects.sort((p1, p2) => (p1.id > p2.id) ? 1 : (p1.id < p2.id) ? -1 : 0);
        console.log(sortedProjects)

    for (let i = 0; i < sortedProjects.length; i++){
        const project = sortedProjects[i]
        const li = document.createElement('li');
        li.className = "project"
        list.append(li);
        const img = document.createElement('img');
        li.append(img)
        img.setAttribute("src", `./img/${sortedProjects[i].image}.png`)
        const details = document.createElement('ul');
        details.className = "details"
        li.append(details)

        const name = document.createElement('li');
        name.className = "name"
        name.innerHTML = project.name
        details.append(name)

        const keywords = document.createElement('li');
        keywords.innerHTML = project.keywords
        details.append(keywords)
        
        const duration = document.createElement('li');
        duration.innerHTML = `${project.startdate} - ${project.enddate}`
        details.append(duration)

        const contributors = document.createElement('li');
        contributors.innerHTML = project.contributors
        details.append(contributors)

        const links = document.createElement('ul');
        for (const link in project.links) {
            const linkLi = document.createElement('li');
            const linkA = document.createElement('a');        
            linkA.setAttribute("href", project.links[link], target="_blank")
            linkA.innerHTML = `${link}`
            linkLi.append(linkA)
            links.append(linkLi)
        }
        details.append(links)
    }
})