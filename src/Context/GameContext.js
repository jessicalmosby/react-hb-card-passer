import { useContext, createContext, useState } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState();

  return (
    <GameContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const gameContext = useContext(GameContext);
  return gameContext;
};
export { GameProvider, useGameContext };
