function Links({links}){
    return (
        <div className="links-section"> 
        {links.map((ele,index)=>{
            return (
                <a className="link-element btn btn-primary" key={index} href={ele.link}>
                    {ele.title}
                </a>
            )
        })}
        </div>
    )
}

export default Links;