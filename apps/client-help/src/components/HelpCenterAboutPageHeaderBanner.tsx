import { styled } from "../lib/stitches.config"
import ShareButton from "../ui/ShareButton"
import TetraText from "../ui/TetraText"


const WrapperContent = styled("div", {
    $$height : "300px",
    backgroundImage : "linear-gradient($primary,transparent 80%)"
})

const WrapperBanner = styled("div", {
    borderBottomLeftRadius : "20px",
    borderBottomRightRadius : "20px",
    backgroundColor : "$primary",
    height : "$$height",
    width : "$content-center-10",
    mx : "auto",
    display : "flex",
    flexDirection : "column",
    alignItems : "flex-end",
    padding : "30px",
    boxSizing : "border-box"
})

const WrapperFooterBanner = styled("div", {
    display : "flex",
    width : "100%",
    alignItems : "center",
    justifyContent : "space-between"
})

const TitleBanner = styled("h2", {
    color : "$textWhite",
    fontSize : "1.6rem"
})

const ImageBanner = styled("img", {
    height : "160px",
    display : "block",
    margin : "auto",
})

type HelpCenterAboutPageHeaderBannerProps = {
    pageTitle : string;
    bannerURL : string;
}

const HelpCenterAboutPageHeaderBanner = (props : HelpCenterAboutPageHeaderBannerProps) => {
    return (
        <WrapperContent>
            <WrapperBanner>
                <ImageBanner src={props.bannerURL} alt="banner image" />
                <WrapperFooterBanner>
                    <TitleBanner>{props.pageTitle}</TitleBanner>
                    <ShareButton/>
                </WrapperFooterBanner>
            </WrapperBanner>
        </WrapperContent>
    )
}

export default HelpCenterAboutPageHeaderBanner
