export const TitleButton = ({titleObj, titleIndex, buttonFunction, buttonText}) => {
    return <div>
        <button id={`title-button-${titleIndex}`} onClick={() => buttonFunction(titleIndex)} >{buttonText}</button>
        <h2 className="job-title">{titleObj.properties.singular_name}</h2>
    </div>
}