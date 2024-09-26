import React, { useState, useEffect } from "react";
import WordCard from "./components/WordCard";
import AddWordForm from "./components/AddWordForm";
import Quiz from "./components/Quiz";
import "./App.css";

interface Word {
  word: string;
  translation: string;
  difficulty: number;
  learned: boolean;
}

const App: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const storedWords = localStorage.getItem("words");
    if (storedWords) {
      setWords(JSON.parse(storedWords));
    }
  }, []);

  useEffect(() => {
    if (words.length > 0) {
      localStorage.setItem("words", JSON.stringify(words));
    }
  }, [words]);

  const addWord = (word: string, translation: string, difficulty: number) => {
    setWords([...words, { word, translation, difficulty, learned: false }]);
  };

  const toggleLearned = (index: number) => {
    setWords(words.map((w, i) => (i === index ? { ...w, learned: !w.learned } : w)));
  };

  const deleteWord = (index: number) => {
    const updatedWords = words.filter((_, i) => i !== index);
    setWords(updatedWords);
    localStorage.setItem("words", JSON.stringify(updatedWords));
  };

  const learnedWordsCount = words.filter((word) => word.learned).length;

  return (
    <div className="max-w-lg mx-auto mt-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Изучение языков</h1>
      <AddWordForm addWord={addWord} />

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ваши слова</h2>
      <p className="text-gray-600 mb-4">
        Выучено: {learnedWordsCount}/{words.length}
      </p>

      {words.length > 0 ? (
        words.map((word, index) => (
          <WordCard
            key={index}
            word={word.word}
            translation={word.translation}
            difficulty={word.difficulty}
            learned={word.learned}
            toggleLearned={() => toggleLearned(index)}
            deleteWord={() => deleteWord(index)}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">Добавьте свои первые слова для изучения</p>
      )}
      {words.length > 0 && <Quiz words={words} />}
    </div>
  );
};

export default App;
