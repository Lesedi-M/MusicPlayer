import React, { Component } from "react";
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import { BrowserRouter as Router, Routes, Route, Navigate , Link} from "react-router-dom";
import { Grid, Button, ButtonGroup, Typography } from "@mui/material";
import RoomWithParams from "./Room";
import Info from "./info";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCode: null,
        };
        this.clearRoomCode = this.clearRoomCode.bind(this);
    }

    async componentDidMount() {
        window.addEventListener('storage', this.handleStorageChange);
        fetch("/api/user-in-room")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    roomCode: data.code,
                });
            });
    }

    componentWillUnmount() {
        window.removeEventListener('storage', this.handleStorageChange);
    }

    handleStorageChange = (e) => {
        if (e.key === 'roomLeft') {
            // Optional: Check the room code or other conditions if necessary
            this.props.navigate('/'); // Assuming you're using navigate from useNavigate() passed as a prop
        }
    };

    renderHomePage() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} align="center">
                    <Typography variant="h3" compact="h3">
                        House Party
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button color="primary" to="/join" component={Link}>
                            Join a Room
                        </Button>

                        <Button color="success" to="/info" component={Link}>
                            Info
                        </Button>
                        <Button color="secondary" to="/create" component={Link}>
                            Create a Room
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        );
    }

    clearRoomCode(){
        this.setState({
            roomCode:null,
        });
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route 
                        path="/" 
                        element={this.state.roomCode ? <Navigate replace to={`/room/${this.state.roomCode}`} /> : this.renderHomePage()} 
                    />
                    <Route path="/join" element={<RoomJoinPage />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/create" element={<CreateRoomPage />} />
                    <Route path="/room/:roomCode" element={<RoomWithParams leaveRoomCallback={this.clearRoomCode} />} />
                </Routes>
            </Router>
        );
    }
}
