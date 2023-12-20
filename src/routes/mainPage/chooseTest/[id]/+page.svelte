<script>
  export let data;
  const test = data.test;
  console.log(data)
  let pregunta = test.preguntas[0].Pregunta;
</script>

<div>
  <p>{pregunta}</p>
</div>