import Col from "react-bootstrap/Col";
import bannerResponsive from "../../images/bannerresponsive.jpg"
import bannerResponsiveText from "../../images/bannerresponsivetext.jpg"
import Image from "next/image";

export default function BannerRight() {
    return <Col xl={2} lg={3} md={12} className="d-flex align-content-stretch">
        <div className="d-none d-lg-block">
            <div className="d-flex align-content-between flex-wrap h-100 bg-light rounded">
                <div>
                    <Image className="img-fluid p-3" src={bannerResponsiveText} placeholder="blur" alt="" width={250} height={100} />
                </div>
                <div>
                    <Image className="img-fluid" src={bannerResponsive} width={200} height={300} placeholder="blur" alt="" />
                </div>
            </div>
        </div>
    </Col>
}