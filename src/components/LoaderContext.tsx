// components/LoaderContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

const LoaderContext = createContext<(show: boolean) => void>(() => {});

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <LoaderContext.Provider value={setVisible}>
      {children}
      {visible && (
        <>
          {/* Transparent blur overlay */}
          <div
            className="fixed inset-0 backdrop-blur-md z-40 pointer-events-none"
            aria-hidden="true"
          />
  
          {/* Loader on top */}
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            aria-label="Loading indicator"
            role="status"
          >
            <div className="relative w-16 h-16">
              <span
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-black rounded-full"
                style={{
                  marginTop: "-0.5rem",
                  marginLeft: "-0.5rem",
                  animation: "orbit 1.5s linear infinite",
                  animationDelay: "0s",
                }}
              />
              <span
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-600 rounded-full"
                style={{
                  marginTop: "-0.5rem",
                  marginLeft: "-0.5rem",
                  animation: "orbit 1.5s linear infinite",
                  animationDelay: "0.5s",
                }}
              />
              <span
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-black rounded-full"
                style={{
                  marginTop: "-0.5rem",
                  marginLeft: "-0.5rem",
                  animation: "orbit 1.5s linear infinite",
                  animationDelay: "1s",
                }}
              />
            </div>
  
            <style>{`
              @keyframes orbit {
                0% {
                  transform: rotate(0deg) translateX(24px) rotate(0deg);
                }
                100% {
                  transform: rotate(360deg) translateX(24px) rotate(-360deg);
                }
              }
            `}</style>
          </div>
        </>
      )}
    </LoaderContext.Provider>
  );
  
  
};
