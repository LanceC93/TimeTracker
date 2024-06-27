import "../global.css"
//localhost:3000/auth

export default function Times() {
    return (
        <div className="login">
            <h1>Sign In</h1>
            <form>
                <label>User Name</label>
                <input type="username" />
                <label>Password</label>
                <input type="password" />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}