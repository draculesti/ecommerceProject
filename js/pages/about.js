import { teamMembers } from '../../data/createTeamCard.js';
import { createTeamCard } from '../components/teamCard.js';


const teamContainer =document.getElementById("team-container");

teamContainer.innerHTML = teamMembers.map(member => createTeamCard(member)).join("");