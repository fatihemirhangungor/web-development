import * as ContactHelper from "../helpers/ContactHelper";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {ContactHelper.ListContacts()}
    </div>
  );
}

export default App;
