export const TitleButton = ({titleObj, titleIndex, buttonFunction, buttonText}) => {
    if(titleIndex < 50){
        return <div className="title-button-box">
            <button id={`title-button-${titleIndex}`} onClick={() => buttonFunction(titleIndex)} >{buttonText}</button>
            <h2 className="job-title">{titleObj.properties.singular_name}</h2>
        </div>}
    else return null;
}