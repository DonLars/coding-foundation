/*    function bmi
========================================================================== */
/*
Neuer BMI: (dein Körpergewicht x 1,3) geteilt durch (deine Körpergröße in cm, hoch 2,5)
Alt: BMI-Formel = Körpergewicht (in kg) geteilt durch Körpergröße (in m) zum Quadrat.
*/

function bmi(height, weight) {
  result = 0;
  result = Math.round((weight / Math.pow(height, 2)) * 100) / 100;

  if (result < 16) {
    console.log(
      result +
        " Kritisches Untergewicht: Achtung: Ein BMI-Wert unter 16 ist bedenklich und gilt bei Männern wie Frauen als anorektisch. Um mit einem viel zu niedrigen Körpergewicht nicht die Gesundheit zu gefährden, sollten Sie bei einem solchen Ergebnis dringend einen Arzt aufsuchen."
    );
  } else if (result >= 16 && result < 18.5) {
    console.log(
      result +
        " Untergewicht: Ihr BMI ist sehr niedrig. Nur mit der richtigen Ernährung und dem passenden Maß an Bewegung bleiben Sie langfristig gesund. Die Techniker oder Ihr Arzt unterstützen Sie gern."
    );
  } else if (result >= 18.5 && result < 25) {
    console.log(
      result +
        " Normalgewicht: Super! Ihr Gewicht ist gesund. Mit einer ausgewogenen Ernährung und regelmäßiger Bewegung wird das auch langfristig so bleiben."
    );
  } else if (result >= 25 && result < 30) {
    console.log(
      result +
        " Leichtes Übergewicht: Ihr BMI ist leicht erhöht. Achten Sie auf Ihre Ernährung und bewegen Sie sich regelmäßig. So können Sie das Risiko für mögliche Begleiterkrankungen minimieren."
    );
  } else if (result > 30) {
    console.log(
      result +
        " Übergewicht: Ihr BMI weist auf Übergewicht hin. Das birgt die Gefahr von Krankheiten wie etwa Diabetes. Ihr Hausarzt und die Techniker unterstützen Sie gern bei einem gesunden Lebensstil."
    );
  } else {
    console.log("Fehlerhafte Eingabe!");
  }
}

console.log(bmi(1.78, 78));
