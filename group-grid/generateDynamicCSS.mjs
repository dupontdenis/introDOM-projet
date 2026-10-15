export const generateDynamicCSS = (cohortes) => {
  let css = `
    .amphi {
      display: grid;
      grid-template-columns: repeat(${cohortes.length}, minmax(0, 1fr));
      grid-auto-flow: row dense;
      grid-gap: 5px;
      justify-content: center;
      margin: 0 auto;
    }
  `;

  cohortes.forEach((cohorte, index) => {
    css += `
      [data-group="${cohorte}"] {
        grid-column: ${index + 1};
      }
    `;
  });

  css += `
    h1 {
      display: flex;
      place-content: center;
      border-bottom: 1px solid black;
      position: sticky;
      top: 0;
      background: white;
      z-index: 1000;
    }

    body,
    html {
      width: 100%;
      height: 100%;
    }
  `;

  return css;
};
