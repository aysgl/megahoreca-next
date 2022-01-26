import { Accordion, Form, Row, Col } from "react-bootstrap"
import { useRouter } from "next/router";
import { catdata } from "../../data/catdata";
import { prodata } from "../../data/prodata";

export default function Filtering() {
    const router = useRouter();
    const { category, subcategory } = router.query;

    return (
        <>
            {catdata.filter(x => x.slug === "category/" + category).map(cat =>
                <Accordion key={cat.id} defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <>
                            <Accordion.Header>Category filter
                                {/* <strong className="ps-2">{category}</strong> */}
                            </Accordion.Header>
                            <Accordion.Body>
                                <>
                                    {cat.subcategory.map(sub =>
                                        <Form.Check key={sub.id} type="checkbox" id={sub.title} label={sub.title} />
                                    )}
                                </>

                                {/* {catdata.map(cat =>
                                <>
                                    {cat.subcategory.filter(x => x.slug === "category/" + category + "/" + subcategory).map(sub =>
                                        <Form.Check type="checkbox" id={sub.title} label={sub.title} />
                                    )}
                                </>
                            )} */}
                            </Accordion.Body>
                        </>

                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Pick Color</Accordion.Header>
                        <Accordion.Body>
                            <Row className="g-2">
                                {prodata.filter(x => x.catId == cat.id ? x.catId : null).map(pro =>
                                    <Col key={pro.id} md={2}>
                                        <div style={{ backgroundColor: pro.color }} className="p-1 rounded d-flex align-items-center justify-content-center">
                                            <Form.Check
                                                type="checkbox"
                                                // label="primary"
                                                id="primary"
                                            />
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )}
        </>
    )
}
