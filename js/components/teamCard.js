export const createTeamCard = ({ name, role, description, image, linkedin, github }) => {
  return `
  <article class="card formatoTarjetas">
    <div class="card-content">
      <img
        src="${image}"
        alt="${name}"
        class="rounded-circle p-3 animacionImg team-photo mx-auto"
      >
  
      <div class="card-body text-center">
        <h6 class="card-title">
          ${name}
        </h6>
  
        <h5 class="card-role">
          ${role}
        </h5>
  
        <div class="social-icons">
          <a href="${linkedin}" target="_blank">
            <i class="bi bi-linkedin formatoLogotipos"></i>
          </a>
  
          <a href="${github}" target="_blank">
            <i class="bi bi-github formatoLogotipos"></i>
          </a>
        </div>
  
        <p class="card-description">
          ${description}
        </p>
      </div>
    </div>
  </article>
  `;
};