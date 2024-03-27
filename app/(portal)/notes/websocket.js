// hooks/useWebSocket.js
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const useWebSocket = (url) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        let userID = "PTW12";
        let password = "Ywms230#2H";
        let publicKey = "f5c57c8071b08536";
        let publishFormat = "JSON";
        let broadcastFormat = "Full";
        let authUrl = url + "/auth/login";

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "secretKey": "Vvyn078$Gx",
            "appKey": "8ca0a3a846d9989e45f705",
            "source": "WebAPI"
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const fetchData = async () => {
            const response = await fetch(authUrl, requestOptions);

            if (!response.ok) {
                console.log(response)
                console.log("Failed to authenticate")
                throw new Error('Failed to authenticate');
            }

            const body = await response.json();

            console.log(body);

            if (body.type === "success" && body.result.token) {
                const token = body.result.token;

                const socket = new WebSocket(`wss://symphony.acagarwal.com:3000/apimarketdata/socket.io/?token=${token}&userID=${userID}&publishFormat=${publishFormat}&broadcastMode=${broadcastFormat}&transport=websocket&EIO=3`);

                socket.onopen = () => {
                    // socket.send('40["1501-json-full"]')
                    console.log('WebSocket connected');
                };
                socket.onmessage = (event) => {
                    // Handle incoming messages
                    console.log(event)
                    setMessages(prevMessages => [...prevMessages, event.data]);
                };
                socket.onclose = () => {
                    console.log('WebSocket connection closed');
                };
            } else {
                throw new Error(body.description);
            }
        }

        fetchData();

    }, [url]);

    return messages;
};

export default useWebSocket;