function Skills({skills}){

    return (
            <div className="skills-section">
                <p className="mb-0 fw-bold skills-title">Skills</p>
                {skills.map((ele,index)=>{
                    return (
                        <div className="skills-element" key={index}>
                            {ele}
                        </div>
                    )
                })}
            </div>
    )
}

export default Skills;