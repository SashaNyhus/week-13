export const ImperialAd = ({posterData, posterIndex}) => {
    let imgObj = posterData["images"][posterIndex];
    console.log(imgObj.url)
    return <div className="ad-box">
        <img src="images/protecting-peace-ad.jpg" alt={imgObj.altText} height="100px"/>
        <p>Art by <a href={posterData.source.artistSiteURL}>{posterData.source.artistName}</a></p>
    </div>
}