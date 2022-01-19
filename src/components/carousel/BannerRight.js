import Col from "react-bootstrap/Col";
import bannerResponsive from "../../images/banner-responsive.png"
import bannerResponsiveText from "../../images/banner-responsive-text.png"
import Image from "next/image";

export default function BannerRight() {
    return <Col xl={2} lg={3} md={12} className="d-flex align-content-stretch">
        <div className="d-none d-lg-block">
            <div className="d-flex align-content-between flex-wrap h-100 bg-light rounded">
                <div>
                    <Image className="img-fluid p-3" src={bannerResponsiveText} alt="" />
                </div>
                <div>
                    <Image className="img-fluid" src={bannerResponsive} alt="" />
                </div>
            </div>
        </div>
    </Col>
}