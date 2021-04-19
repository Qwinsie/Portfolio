window.addEventListener("load", () => {
    let projects =  [
            {
                id: 0,
                name: "PokéDraw",
                keywords: ["ml5","HTML","CSS","JS"],
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
                id: 1,
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
                id: 2,
                name: "Message of Peace",
                keywords: ["PHP","Laravel","HTML","CSS","JS","Bootstrap","Uganda","Interactive Web Application"],
                startdate: "31-08-2020",
                enddate: "13-01-2021",
                contributors: ["Eva van der Kroft","Jasper ten Haken","Lisa Keers","Rik Vermeulen","Quincy van der Sluis"],
                description: "",
                links: 
                    {
                        github: "https://github.com/rikvermeulen/A-message-of-peace",
                        video: "https://youtu.be/9pbDAUNFC78",
                    },
                
            },
            {
                id: 3,
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
                id: 4,
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
                id: 5,
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
        ]
    
    console.log(projects)
    const list = document.getElementById("list")

    for (let i = 0; i < projects.length; i++){
        const project = projects[i]
        const li = document.createElement('li');
        li.className = "project"
        list.append(li);
        const img = document.createElement('img');
        li.append(img)
        img.setAttribute("src", `./img/${i}.png`)
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