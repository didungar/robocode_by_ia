import React, { useState } from 'react';
import './App.css';

function App() {
  const [files, setFiles] = useState([]);
  const [importedFiles, setImportedFiles] = useState([]);
  const [exportedFiles, setExportedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setFiles(files);

    // Vérification des imports et exports dans chaque fichier
    for (const file of files) {
      if (!file.name.endsWith('.js')) continue;

      let importRegex = /^import\s+(?:(?:\w+)\s*,\s*)?\w+\s+from\s+'([^']+)'\s*$/mg;
      let exportRegex = /^export\s+(?:class|function|const)\s+(\w+)/mg;

      const imports = [];
      for (let match of file.content.matchAll(importRegex)) {
        imports.push({ name: match[1] });
      }

      const exports = [];
      for (let match of file.content.matchAll(exportRegex)) {
        exports.push({ name: match[1] });
      }

      setImportedFiles((prevState) => [...prevState, ...imports]);
      setExportedFiles((prevState) => [...prevState, ...exports]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Vérification des imports et exports</p>
        <input type="file" onChange={handleFileChange} />
      </header>
      <ul>
        {importedFiles.map((importedFile) => (
          <li key={importedFile.name}>{importedFile.name}</li>
        ))}
        {exportedFiles.map((exportedFile) => (
          <li key={exportedFile.name}>{exportedFile.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;