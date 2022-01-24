import React from "react";
import FooterSectionTop from "./FooterSectionTop";
import FooterSectionBottom from "./FooterSectionBottom";
import Seperate from "../stuff/Seperate";
import SmallBanner from "../advertisement/SmallBanner";
export default function Footer() {
    return (
        <>
            <SmallBanner />
            <FooterSectionTop />
            <Seperate />
            <FooterSectionBottom />
        </>
    )
}