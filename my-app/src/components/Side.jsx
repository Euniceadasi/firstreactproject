const Side = ({sidebar}) => {
    return ( 
        <>
            {
                sidebar.map(sidebar => (
                    <div className="side__container">
                        <h2>{sidebar.title}</h2>
                        <article>{sidebar.description}</article>
                    </div>
                ))
            }
        </>
     );
}
 
export default Side;