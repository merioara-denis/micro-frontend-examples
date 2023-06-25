import React, { Suspense } from "react";

//@ts-ignore
const MicrofrontApp = React.lazy(() => import("microfront/application"));

function App() {
  console.log("MicrofrontApp", MicrofrontApp);
  return (
    <div className="App">
      Core
      <hr />
      <Suspense fallback="loading...">
        <MicrofrontApp />
      </Suspense>
    </div>
  );
}

export default App;
