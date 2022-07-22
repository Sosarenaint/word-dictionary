import React from 'react'
import uuid from 'react-uuid'

const Definations = ({ word, catagory, meanings, lightMode }) => {
    return (
        <div className="meanings">
        {meanings[0] && word && catagory === "en" && (
            <audio
                style={{ 
                    backgroundColor: "#fff", 
                    borderRadius: 10,
                    outline: "none"
                }}
                src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                controls
            >
                Your browser does not support the audio element.
            </audio>
        )}
            {word === ""
                ? (<span className="sub-title">Start by typing a word in search</span>)
                : (
                    meanings.map(meaning => (
                        meaning.meanings.map(item => (
                            item.definitions.map(def => (
                                <div 
                                    className="single-meaning" 
                                    key={uuid()} 
                                    style={{
                                        backgroundColor: lightMode ? "#000" : "#fff",
                                        color: lightMode ? "#fff" : "#000"
                                    }}
                                >
                                    <b>{def.definition}</b>
                                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                                    {def.example && (
                                        <span>
                                            <b>Example :</b> {def.example}
                                        </span>
                                    )}
                                    {def.synonyms && (
                                        <span>
                                            <b>Synonyms :</b> {def.synonyms.map((syn) => `${syn}, `)}
                                        </span>
                                    )}
                                </div>
                            ))
                        ))
                    ))
                )
            }
        </div>
    )
}

export default Definations
