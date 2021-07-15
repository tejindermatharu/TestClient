import * as React from "react";
import {useEffect, useState} from "react";
import {HubConnection} from "signalr-client-react";
import {HubConnectionBuilder} from "@microsoft/signalr";
import "./style.scss";

function TopBar() {
    // useEffect(() => {
    //     setInterval(function () {
    //         fetch("http://34.88.55.60/notify")
    //             .then((response) => response.json())
    //             .then((data) => console.log(data));
    //     }, 10000);
    // });

    // useEffect(() => {
    //     let connection = new HubConnection("http://localhost:39157/hubs/notify");

    //     connection.on("ReceiveMessage", (data) => {
    //         console.log(data);
    //     });

    //     connection.start();
    // });

    const [connection, setConnection] = useState(null);

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl("http://localhost:39157/hubs/notify")
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection
                .start()
                .then((result) => {
                    console.log("Connected!");

                    connection.on("ReceiveMessage", (message) => {
                        console.log(message);
                    });
                })
                .catch((e) => console.log("Connection failed: ", e));
        }
    }, [connection]);

    return (
        <div className="top-bar__container">
            <span className="title__span">Test App</span>
        </div>
    );
}

export default TopBar;
