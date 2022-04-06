* {
  box-sizing: border-box;
}

body {
  background-image: url("backgroundimage.jpg");
  background-repeat: no-repeat;
  background-size: 1366px 768px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.wrapper{
  width: 700px;
  margin: 0 auto;
  border-radius: 10px;
}

header{
  background-color: rgb(102, 238, 238);
  width: 100%;
  height: 50px;
  display: flex;
  font-family: Snell Roundhand, cursive;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 250%;
  
}

.quiz-container {
  background-color: rgb(195, 109, 245);
  border-radius: 20px;
  box-shadow: 0 0 10px 2px rgba(278, 134, 145, 0.4);
  width: 700px;
  overflow: hidden;
}

.quiz-header {
  padding: 3rem;
  font-family: "Lucida Console", "Courier New", monospace;
  color: rgb(44, 0, 4);
  font-style: oblique;
}

h2 {
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 0;
}
nav{
  float: right;
  margin-left: 1.5em;
 
    font-size: medium;
   background-color: rgb(193, 252, 252);
    color: rgb(0, 0, 0);
  

}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  font-size: 1.2rem;
  margin: 1rem 0;
}

ul li label {
  cursor: pointer;
}

button {
    background-color: rgb(160, 0, 152);
  color: rgb(8, 177, 255);
  border: none;
  display: block;
  width: 100%;
  cursor: pointer;
  font-size: 1.6rem;
  font-family: Georgia, serif;
  padding: 1.2rem;
}

button:hover {
  background-color: #060008;
}

button:focus {
  outline: none;
  background-color: #4d2626;
}
