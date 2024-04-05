import React, { useState } from 'react';
const ConsultPhraseComponent = () => {
  const [phrase, setPhrase] = useState('');
  const [result, setResult] = useState('No result');

  const handleChange = (e) => {
    setPhrase(e.target.value);
  };

  const handleSubmit = () => {
      console.log(phrase)
      fetch(`http://localhost:8080/processor?phrase=${phrase}`)
          .then(response => response.json())
          // .then(data => setResult(JSON.stringify(data)))
          .then(data => setResult(`Frase: ${data.phrase}\nQuantidade de palavras unicas: ${data.uniqueWordQuantity}\nOcorrencias: ${data.occurrencesPerWord.map(e => `Palavra: ${e.word} Ocorrencias: ${e.occurences}`).join('\n')}`))
          .catch(error => console.error('Error:', error));
  };

  return (
      <div>
        <input type="text" value={phrase} onChange={handleChange} placeholder="Insert your phrase here" />
        <button onClick={handleSubmit}>Consult Phrase</button>
        <p>Result: {result}</p>
      </div>
  );
};

function App() {
  return (
    <div className="App">
      <ConsultPhraseComponent />
    </div>
  );
}

export default App;
