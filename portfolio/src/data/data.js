//============== KLASH Images ============================//
import KLASH from '../images/klash_Images/KLASH_Website.png';
import Home from '../images/klash_Images/Home.png'
import About from '../images/klash_Images/About.png'
import Event_One from '../images/klash_Images/Events_One.png'
import Event_Details from '../images/klash_Images/Events_Details.png'
import Gallery from '../images/klash_Images/Gallery.png'
import Contact from '../images/klash_Images/Contact_Us.png'

//============== COVID Images ============================//
import COVID from '../images/covid_images/COVID_19 _Dashboard.png';
import Global_Map from '../images/covid_images/Global_Main.png';
import Global_Results from '../images/covid_images/Global_Results.png';
import US_Map from '../images/covid_images/US_Main.png';
import US_Results from '../images/covid_images/US_Result.png';

//============== TOURN-APP Images ============================//
import TOURN_APP from '../images/tournApp_images/TOURN-APP.png';
import Main from  '../images/tournApp_images/Main.png';
import Login from '../images/tournApp_images/Login.png';
import Login_One from '../images/tournApp_images/Login_1.png';
import Register from '../images/tournApp_images/Register.png';
import Register_One from  '../images/tournApp_images/Register_1.png';
import Create_Tournament from '../images/tournApp_images/Create_Tournament.png';
import Tournament_One from '../images/tournApp_images/Create_Tournament_1.png';
import Home_Tourn from '../images/tournApp_images/Home.png';
import Edit from '../images/tournApp_images/Edit.png';
import Home_Edited from '../images/tournApp_images/Home_edited.png';
import Create_Another from '../images/tournApp_images/Create_another_tournament.png';
import Create_Another_One from '../images/tournApp_images/Create_another_tournament_1.png';
import Second_Deleted from '../images/tournApp_images/Home_second_tournament_deleted.png';
import Settings from '../images/tournApp_images/Settings.png';
import Updated_Profile from '../images/tournApp_images/Home_updated_profile.png';



export const projects = [{
    klash:{
    
        image: KLASH ,
        title: 'KLASH',
        description: 'HTML\nCSS\nBootstrap',
        comps: {
            home: Home, 
            about: About, 
            eventOne: Event_One,
            eventDetails: Event_Details,
            gallery: Gallery,
            contact: Contact
        }
        
    },
    covid:{
        image: COVID,
        title: 'COVID-19 Dashboard',
        description: 'React\nApi\nReact-Bootstrap',
        comps:{
            globalMap: Global_Map,
            globalMap_Results: Global_Results,
            usMap: US_Map,
            usMap_Results: US_Results
        }
    },
    tournApp:{
        image: TOURN_APP,
        title: 'TOURN-APP',
        description: 'Node\nExpress\nReact\nRedux\nMySQL',
        comps:{
            main: Main,
            login: Login,
            loginOne: Login_One,
            register: Register,
            registerOne: Register_One,
            createTournament: Create_Tournament,
            tournamentOne: Tournament_One,
            home: Home_Tourn,
            edit: Edit,
            homeEdited: Home_Edited,
            createAnother: Create_Another,
            createAnotherOne: Create_Another_One,
            secondDeleted: Second_Deleted,
            settings: Settings,
            updateProfile: Updated_Profile
        }
    }
}]
