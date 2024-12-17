import React, { createContext, useState } from "react";
//createContext crée un nouvel objet de contexte nommé DataContext.
// Ce contexte permettra à tous les composants qui y sont abonnés d’accéder aux données qui y sont stockées.
export const DataContext = createContext();
//Le DataContext permet à tous les composants enfants de DataProvider d’accéder aux mêmes données (par exemple clientData dans ce cas) et de les mettre à jour.

export function DataProvider({ children }) {
  const [clientData, setClientData] = useState({});
  const [machineData, setMachineData] = useState({});

  return (
    <DataContext.Provider value={{ clientData, setClientData, machineData, setMachineData }}>
      {children}
    </DataContext.Provider>
  );
}
