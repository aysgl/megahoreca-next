import { Col, Row } from "react-bootstrap";
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    EmailShareButton
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon, TelegramIcon, EmailIcon } from "react-share";

export default function SocialShare({ url, title, hashtag, desc }) {
    return (
        <Row className="d-flex align-items-center">
            <Col className="col-auto">
                <p className="text-muted mb-0 small">you can share!</p>
            </Col>
            <Col>
                {console.log(url)}
                <FacebookShareButton
                    url={url}
                    hashtag={hashtag}
                    description={desc}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                    title={title}
                    url={url}
                    hashtags={hashtag}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <TelegramShareButton
                    title={title}
                    url={url}
                    hashtags={hashtag}>
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
                <WhatsappShareButton
                    title={title}
                    url={url}
                    hashtags={hashtag}
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <EmailShareButton
                    title={title}
                    url={url}
                    hashtags={hashtag}>
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </Col>
        </Row>
    )
}
