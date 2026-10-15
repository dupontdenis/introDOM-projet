import { students } from "./../data.mjs";

const app = document.querySelector("#app");
const search = document.querySelector("#search");

// Regrouper les étudiants selon leur groupe
const groups = Object.groupBy(students, (student) => student.group);

const groupEntries = Object.entries(groups);

// Remplir le menu avec les groupes présents uniquement
// const uniqueGroups = [...new Set(students.map((student) => student.group))];

const uniqueGroups = Object.keys(groups);

uniqueGroups.forEach((group) => {
  const option = document.createElement("option");
  option.value = group;
  option.textContent = group;
  search.append(option);
});

// Modèle HTML d'une carte
const studentTemplate = `
    <div class="col-md-4">
        <section class="card h-100 shadow-sm">
            <div class="card-header fw-bold">
              {{group}}
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    {{students}}
                </ul>
            </div>
        </section>
    </div>
`;

// Afficher les groupes
function renderGroups(query) {
  console.log("Recherche :", query);
  console.log("groupEntries :", groupEntries); // tableau de paires [groupe, membres]

  // const filteredGroups = groupEntries.filter(
  //   ([group,membres]) => {
  //     console.log("group :", group, "membres :", membres  ); // Afficher le groupe et ses membres
  //     return query === "" || group === query; // Filtrer les groupes selon la recherche
  //   }
  // );

    const filteredGroups = groupEntries.filter(([group]) => 
      query === "" || group === query // Filtrer les groupes selon la recherche
    );
  console.log("filteredGroups :", filteredGroups); // tableau de paires [groupe, membres]

  let html = "";

  for (const [group, members] of filteredGroups) {
    const studentItems = members
      .map((student) => `<li class="list-group-item">${student.name}</li>`)
      .join("");

    let groupHtml = studentTemplate;
    groupHtml = groupHtml.replace("{{group}}", group);
    groupHtml = groupHtml.replace("{{students}}", studentItems);

    html += groupHtml;
  }

  app.innerHTML =
    html || '<p class="text-muted">Aucun groupe correspondant.</p>';
}

// Réagir au choix dans le menu
search.addEventListener("change", () => {
  renderGroups(search.value);
});

// Afficher tous les groupes au démarrage
renderGroups("");
