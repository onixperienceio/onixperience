import { createContext, useContext, useState} from 'react';

const AppContext = createContext(null);

export function AppWrapper({ children }) {
   const values = {
   }

   return (
      <AppContext.Provider value={values}>
         {children}
      </AppContext.Provider>
   );
}

export function useAppContext() {
   const context = useContext(AppContext);

   if(!context){
   console.error('Error deploying App Context!!!');
   }

   return context;
}

export default useAppContext;