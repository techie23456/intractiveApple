import { useState} from 'react'


export default function App() {

  const [image, setImage] = useState("https://static.vecteezy.com/system/resources/thumbnails/012/086/172/small/green-apple-with-green-leaf-isolated-on-white-background-vector.jpg")
  const handleClick = (e) => {

    console.log("<<------------>>  ",e.clientX, e.clientY)
    console.log("Mouse clicked");

    if ((e.clientX >= 55 && e.clientX<= 444)&&(e.clientY>= 94 && e.clientY<= 463) ){

      console.log("I am here");
    setImage("https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=")
  }
  else{
    setImage("https://static.vecteezy.com/system/resources/thumbnails/012/086/172/small/green-apple-with-green-leaf-isolated-on-white-background-vector.jpg")
  }
  };

  const handleMouseMove = (e) => {
    console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
 return 
  };

  return (
    <div
      onClick={handleClick}

      style={{ backgroundColor: "lightblue", width:520, height:510 }}
      // onMouseMove={handleMouseMove}
      // onMouseEnter={() => console.log("Mouse entered")}
      // onMouseLeave={() => console.log("Mouse left")}
    >

    <img src = {image} width="500" height="500" />
      
    </div>
  );
}
