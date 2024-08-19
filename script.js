/* Body and General Styles */
body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
    color: #333;
    text-align: center;
    margin: 0;
    overflow: hidden;
}
/* Header Styles */
header {
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid #8bb1c7;
    border-radius: 15px;
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    animation: fadeIn 2s;
}

/* Headings */
h1, h2 {
    color: #1e3a5f;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

h1 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
}

h2 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
}


/* Header Styles */
header {
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid #8bb1c7;
    border-radius: 15px;
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    animation: fadeIn 2s;
}

/* Headings */
h1, h2 {
    color: #1e3a5f;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Buttons */
button {
    background: linear-gradient(45deg, #6fb1fc, #4f9ae4);
    border: none;
    padding: 12px 25px;
    margin: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

button:active {
    transform: translateY(1px);
}

/* Activity Section */
#activity {
    margin: 20px auto;
    padding: 20px;
    border: 2px solid #8bb1c7;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}



/* Map Container */
#mapContainer {
    height: 400px;
    width: 100%;
    border: 2px solid #8bb1c7;
    border-radius: 15px;
    margin: 20px auto;
}

/* Stickers Section */
#stickers img {
    width: 100px;
    height: 100px;
    transition: transform 0.2s, box-shadow 0.2s;
}

#stickers img:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Motivation Section */
#motivation {
    margin: 20px auto;
    padding: 20px;
    border: 2px solid #8bb1c7;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    animation: fadeIn 2s;
}

/* Goals Section */
#goals {
    margin: 20px auto;
    padding: 20px;
    border: 2px solid #8bb1c7;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.8);
    max-width: 600px;
}

#goalInput {
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #6fb1fc;
    margin-right: 10px;
    color: #333;
    font-size: 16px;
}

#goalStatus {
    color: #1e3a5f;
    font-size: 18px;
    margin-top: 10px;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
