import "../UserNumber/UserNumber.css"


function UserNumber() {
  return (
    <div className="user-number">

        <h1>User Page </h1>
        <label for="id">Your id number:</label>

        <input type="number" id="id" name="id" required
        min="1" max="18"></input>
    </div>
  )
}

export default UserNumber