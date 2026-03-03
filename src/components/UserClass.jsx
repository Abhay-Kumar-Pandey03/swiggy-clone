import { Component } from "react";

class UserClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "John Doe",
                email: "",
                location: "",
                // avatar_url: "",
            }
        }
        // console.log("ChildC");
    }

    async componentDidMount() {
        // console.log("ChildCDM");
        const data = await fetch("https://api.github.com/users/Abhay-Kumar-Pandey03");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
    }

    render() {
        // const { count, count2 } = this.state;
        // const { name, email, location } = this.props;
        const { name, location, email, avatar_url } = this.state.userInfo;

        // console.log("ChildR");

        return (
            <div className="user-card">
                <img src={avatar_url} alt="profile-image" />
                <h2>Name : {name}</h2>
                <h3>Email : {email}</h3>
                <h4>Location : {location}</h4>
                
            </div>
        )
    }
}

export default UserClass;