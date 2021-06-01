import { TitleButton } from "./title-button";

export const TitlesList = ({sectionClass, sectionTitle, titles, buttonFunction, buttonText}) => {
    let buttonsArray = titles.map((titleObj, titleIndex) => <TitleButton titleIndex={titleIndex} titleObj={titleObj} buttonFunction={buttonFunction} buttonText={buttonText} />)
    return <div className={`titles-box ${sectionClass}`}>
        <h1 className="section-header" >{sectionTitle} ({titles.length}) </h1>
        {buttonsArray}
    </div>
}