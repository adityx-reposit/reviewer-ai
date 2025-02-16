import "prismjs/themes/prism-tomorrow.css"
import editor from 'react-simple-code-editor'
import prism from "prismjs"
import './App.css'
import { useEffect, useState } from "react"
import Editor from "react-simple-code-editor"
import axios from 'axios'
import markdown from 'react-markdown'
import Markdown from "react-markdown"
import rehypeHightlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'

function App() {

    const [code, setcode]=useState(`function sum(){
      return 1+1
      }`)
      const[review , setreview]=useState(``)

    useEffect(()=>{
      prism.highlightAll()
    },[])

    async function reviewCode(){
         
    const response= await axios.post('http://localhost:3000/ai/get-review',{
      code:code
    });
        setreview(response.data)
        console.log(response.data);
        
    
         
    }
  return (
    <>
       <main>
            
           <div className="left"> 
            <div className="code">
              <Editor
              value={code}
              onValueChange={code=>setcode(code)}
              highlight={code=>prism.highlight(code,prism.languages.javascript,"javascript")}
                padding={10}
                style={{
                  fontFamily:`"Fira code" ,"Fira Mono" ,"monospace"`,
                  fontSize:15,
                   backgroundColor: "#2d2d2d", // Dark background
                   color: "#f8f8f2",           // Light text
                  border:"1px solid #ddd",
                  borderRadius:"5px",
                  height:"100%",
                  width:"100%"
                }}
              />
            </div>
            <div className="review" onClick={reviewCode}>Review</div>
            
           </div>
          
           <div className="right">
           <div className="review">
                <Markdown rehypePlugins={[rehypeHightlight]}>
                     
                      {review}
                  
                  </Markdown>
              </div>
           </div>
              
       </main>
    </>
  )
}

export default App
