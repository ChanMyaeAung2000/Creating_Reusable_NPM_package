

import { MyButton, MyTestComponent } from '@chanmyaeoung/react_library';

function App() {
  const handleClick = () => {
    alert("ကိုယ့် Library ထဲက Button အလုပ်လုပ်နေပါပြီဗျာ!");
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>React + Tailwind v4 Library Test</h1>
      
      <hr style={{ margin: '20px 0' }} />

   
      <h3 style={{ marginBottom: '10px' }}>1. Testing MyTestComponent:</h3>
      <MyTestComponent />

      <hr style={{ margin: '20px 0' }} />

  
      <h3 style={{ marginBottom: '10px' }}>2. Testing MyButton (Tailwind):</h3>
      <MyButton onClick={handleClick} bgColor="#ae2d56" hoverBgColor="#7e61c1" textColor = "#292b92" hoverTextColor = "#a1c84e">
        Click Me!
      </MyButton>
    </div>
  );
}

export default App;