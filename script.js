body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    text-align: center;
}

h1 {
    color: #333;
}

p {
    color: #666;
}

.games-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
}

.game-box {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    width: 300px;
    height: 200px;
    cursor: pointer;
    transition: transform 0.3s;
}

.game-box:hover {
    transform: scale(1.05);
}

.hidden {
    display: none;
}

#game-area {
    margin: 20px auto;
    width: 500px;
    height: 500px;
    border: 1px solid #ccc;
    padding: 20px;
}

#reward {
    margin-top: 50px;
}

#reward a {
    font-size: 20px;
    color: white;
    background-color: #28a745;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
}

#reward a:hover {
    background-color: #218838;
}
