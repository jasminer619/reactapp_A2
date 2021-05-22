import './App.css';

function App() {

  return (
  <>
    <main>
      <div className ="content">
        <h1>Learn to code by <br/> watching others</h1> 
        <p> See how experienced developers solve problems in real time. <br/> 
                Watching scipted tutorials is great, but understanding how <br/> 
                developers think is invaluable. </p>
      </div>
      <div className = "box">
        <button class = "first"> 
              <strong>
              <span class="bold">Try it free 7 days </span> 
              </strong>
              <span class="nobold"> then $20/mo. thereafter</span>
        </button> <br/>
                <form>
                    <input type="text" placeholder="First Name"/> <br/>
                    <input type="text" placeholder="Last Name"/> <br/>
                    <input type="text" placeholder="Email Address"/> <br/>
                    <input type="text" placeholder="Password"/> <br/>
                  <button class="second">
                        CLAIM YOUR FREE TRIAL
                  </button>
                    <h6>
                        By clicking the button, you are agreeing to our  
                        <span class="pink"> Terms and Services</span>
                    </h6>
                </form>
      </div>
    </main>
  </>
  );
}

export default App;
