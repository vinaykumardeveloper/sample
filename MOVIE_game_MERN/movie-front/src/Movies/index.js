import {useEffect,useState} from 'react'
import './index.css'




const Movies=()=>{
    const [data,setData]=useState([])
    const [randomValue,setRandomValue]=useState(0)
    const [hero,setHero]=useState('')
    const [heroin,setHeroin]=useState('')
    const [director,setDirector]=useState('')
    const [movie,setSelectMovie]=useState('')
    const [suggestion,setSuggestions]=useState([])
    const [selectedHero,setSelectedHero]=useState('')
    const [selectedHeroin,setSelectedHeroin]=useState('')
    const [selectedDirector,setSelectedDirector]=useState('')
    const [selectedMovie,setSelectedMovie]=useState('')
    const [showQuestions,setShowQuestions]=useState(false)
    const [ShowStart,setShowStart]=useState(true)
    const [showCorrectHero,setShowCorrectHero]=useState('')
    const [showHeroin,setShowHeroin]=useState('')
    const [showDirector,setShowDirector]=useState('')
    const [showMovie,setShowMovie]=useState('')
    const [showImage,setShowImage]=useState(false)


    const urls='http://localhost:5006'
    useEffect(()=>{
        const dataFun=async()=>{
            try{
                const response=await fetch(`${urls}/getMovies`)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  const result = await response.json();
                  //console.log(result)
                  setData(result); 
                } catch (error) {
                  console.log(error); // Handle errors
                  
                }
        }
        const suggestionFun=async()=>{
            try{
                const response=await fetch(`${urls}/getSugges`)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  const result = await response.json();
                  //console.log(result)
                  setSuggestions(result); 
                   
                  
                } catch (error) {
                  console.log(error); // Handle errors
                  
                }
        }
        dataFun()
        suggestionFun()
    },[])

    

   const randomData=()=>{
    const lengths=data.length
    const randomMovie=Math.floor(Math.random() * lengths);
    console.log(data[randomMovie])
    setRandomValue(randomMovie)
    
    const totalHeroName=(data[randomMovie].heroName)
    const totalHeroinName=(data[randomMovie].heroineName)
    const totaldirectorName=(data[randomMovie].directorName)
    const totalMovieName=(data[randomMovie].movieName)
    const firstLetterOfHeroName=totalHeroName[0].toUpperCase() 
    const firstLetterOfHeroinName=totalHeroinName[0].toUpperCase()
    const firstLetterOfdirectorName=totaldirectorName[0].toUpperCase()
    const firstLetterOfMovieName=totalMovieName[0].toUpperCase()
    setHero(firstLetterOfHeroName)
    setHeroin(firstLetterOfHeroinName)
    setDirector(firstLetterOfdirectorName)
    setSelectMovie(firstLetterOfMovieName)
    setShowQuestions(true)
    setShowStart(false)
   }
 
   
   const onClickRandumData=()=>{
    setSelectedHero('')
    setSelectedHeroin('')
    setSelectedDirector('')
    setSelectedMovie('')
    setShowImage(false)
    
    randomData()
   }
   
   const checkTheAnswers=()=>{
    const totalHeroName=(data[randomValue].heroName)
    const totalHeroinName=(data[randomValue].heroineName)
    const totaldirectorName=(data[randomValue].directorName)
    const totalMovieName=(data[randomValue].movieName)
    console.log(totalHeroName)
    console.log(selectedHero)
    if(totalHeroName===selectedHero){
      setShowCorrectHero('https://www.shutterstock.com/shutterstock/photos/1265668276/display_1500/stock-vector-checkmark-icon-vector-on-white-background-editable-eps-1265668276.jpg')
    }else{
        setShowCorrectHero('https://e7.pngegg.com/pngimages/385/780/png-clipart-red-x-illustration-x-mark-check-mark-wrong-sign-angle-symmetry.png')
    }
    if(totalHeroinName===selectedHeroin){
        setShowHeroin('https://www.shutterstock.com/shutterstock/photos/1265668276/display_1500/stock-vector-checkmark-icon-vector-on-white-background-editable-eps-1265668276.jpg')
        setShowImage(true) 
      }else{
        setShowHeroin('https://e7.pngegg.com/pngimages/385/780/png-clipart-red-x-illustration-x-mark-check-mark-wrong-sign-angle-symmetry.png')
        setShowImage(true) 
      }
      if(totaldirectorName===selectedDirector){
        setShowDirector('https://www.shutterstock.com/shutterstock/photos/1265668276/display_1500/stock-vector-checkmark-icon-vector-on-white-background-editable-eps-1265668276.jpg')
        setShowImage(true) 
      }else{
        setShowDirector('https://e7.pngegg.com/pngimages/385/780/png-clipart-red-x-illustration-x-mark-check-mark-wrong-sign-angle-symmetry.png')
        setShowImage(true) 
      }
      if(totalMovieName===selectedMovie){
        setShowMovie('https://www.shutterstock.com/shutterstock/photos/1265668276/display_1500/stock-vector-checkmark-icon-vector-on-white-background-editable-eps-1265668276.jpg')
        setShowImage(true) 
      }else{
        setShowMovie('https://e7.pngegg.com/pngimages/385/780/png-clipart-red-x-illustration-x-mark-check-mark-wrong-sign-angle-symmetry.png')
        setShowImage(true) 
      }
      
   }

   const onChangingHero=(event)=>{
    setSelectedHero(event.target.value)
   }
    
   const onChangingHeroin=(event)=>{
    setSelectedHeroin(event.target.value)
   }
  const onChangingDirector=(event)=>{
    setSelectedDirector(event.target.value)
  }
  const onChangingMovie=(event)=>{
    setSelectedMovie(event.target.value)
  }

return(
    <div className='main'>
        <div className='mainImage'>
            
        {showQuestions && (
            <div>
            <img src='https://i.ibb.co/1nxc8GF/cooltext470298824516536-1.png' alt='imagegame' className='logos' />
            <div className='fields-horiz'>
                <div>
                <div className='spec-field'>
                   {hero}
                </div>
                <select id='heroName' value={selectedHero} onChange={onChangingHero} className='selections'>
                
                        {suggestion.map((each)=>(
                            <option key={each.id}>
                                {each.movieSugg}
                            </option>
                        ))}
                    
                </select>
                <div className='selectedAns'>{selectedHero}</div>
                {showImage &&(
                    <div>
                    <img src={showCorrectHero} alt='correct' className='rightorwrong' />
                </div>

                )}
                
                </div>
                <div>
                    
                <div className='spec-field'>
                   {heroin}
                </div>
                <select id='heroName' value={selectedHeroin} onChange={onChangingHeroin} className='selections'>
                
                        {suggestion.map((each)=>(
                            <option key={each.id}>
                                {each.movieSugg}
                            </option>
                        ))}
                    
                </select>
                <div className='selectedAns'>{selectedHeroin}</div>
                {showImage &&(
                <div>
                    <img src={showHeroin} alt='correct' className='rightorwrong' />
                </div>
                )}
                </div>

                <div>
                <div className='spec-field'>
                   {director}
                </div>
                <select id='heroName' value={selectedDirector} onChange={onChangingDirector} className='selections'>
                
                        {suggestion.map((each)=>(
                            <option key={each.id}>
                                {each.movieSugg}
                            </option>
                        ))}
                    
                </select>
                <div className='selectedAns'>{selectedDirector}</div>
                {showImage &&(
                <div>
                    <img src={showDirector} alt='correct' className='rightorwrong' />
                </div>
                )}
                </div>
                
                <div>
                <div className='spec-field'>
                   {movie}
                </div>
                <select id='heroName' value={selectedMovie} onChange={onChangingMovie} className='selections'>
                
                        {suggestion.map((each)=>(
                            <option key={each.id}>
                                {each.movieSugg}
                            </option>
                        ))}
                    
                </select>
                <div className='selectedAns'>{selectedMovie}</div>
                {showImage &&(
                <div>
                    <img src={showMovie} alt='correct' className='rightorwrong' />
                </div>
                )}
                </div>
                
            </div>
            <div className='buttons'>
            <button onClick={checkTheAnswers} className='btns'>Check</button>
            <button onClick={onClickRandumData} className='btn'>Next</button>
            </div>
            
            
            </div>)}
            
                <div>
                {ShowStart &&(
                <button onClick={randomData} className='btn'>Start</button>
            
            )}
            </div>

            
            
            
        </div>
        
    </div>
)
}

export default Movies