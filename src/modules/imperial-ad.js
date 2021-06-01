export const ImperialAd = ({posterData, posterIndex}) => {
    console.log(posterData)
    let imgObj = posterData["images"][posterIndex];
    console.log(imgObj.url)
    return <div className="ad-box">
        <img src={imgObj.url} alt={imgObj.altText} width="100%"/>
        <p>Art by <a href={posterData.source.artistSiteURL}>{posterData.source.artistName}</a></p>
    </div>
}