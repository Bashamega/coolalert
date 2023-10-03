// default_alert_styles.js

export const default_alert_css = `
.coolalert-pop-alert {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: white;
    width: 300px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    z-index: 9999;
    text-align: center;
}

.coolalert-pop-alert p {
    font-size: 18px;
    margin-bottom: 20px;
}

.coolalert--button {
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}

.coolalert--ok {
    background-color: #007BFF;
    color: white;
}

.coolalert--ok:hover {
    background-color: #0056b3;
}

.coolalert--cancel {
    background-color: #FF3333;
    color: white;
}

.coolalert--cancel:hover {
    background-color: #CC0000;
}


`;
