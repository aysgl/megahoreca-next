import React from 'react'
import { useSelector } from "react-redux"
import { Card, Col, Container, Row } from 'react-bootstrap'
import CartItem from '../components/cart/CartItem'
const Cart = () => {
    const { cart } = useSelector(state => state.products)
    if (cart.length === 0) return <p className="display-4 text-center">You cart is empty</p>

    const totalProducts = cart.map(i => i.count).reduce((a, b) => a + b, 0)
    const totalPrice = cart.map(i => i.totalPrice).reduce((a, b) => a + b, 0)

    return (
        <Container>
            <Row className="row">
                <Col md={8}>
                    {cart.map(item => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            count={item.count}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            totalPrice={item.totalPrice}
                            quantity={item.quantity}
                        />
                    ))}
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Title className="card-header">Sub total</Card.Title>
                        <Card.Body className="card-body">
                            <p>
                                Total Products: {totalProducts}
                            </p>
                            <p>
                                Total Price: {totalPrice}
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart
