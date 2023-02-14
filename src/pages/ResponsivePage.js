import React from "react";
import DescriptionSection from "../components/responsive-page/DescriptionSection";
import Header from "../components/responsive-page/Header";
import MainSection from "../components/responsive-page/MainSection";
import TextBorderLine from "../components/responsive-page/TextBorderLine";
import { ResponsivePageWrap, PageInnerWrap } from "./ResponsivePage.styled";

// SendBird 랜딩페이지 예시로 진행
function ResponsivePage() {
  return (
    <ResponsivePageWrap>
      <PageInnerWrap>
        <Header />
        <MainSection />
        <TextBorderLine />
        <DescriptionSection />
        <DescriptionSection />
        <DescriptionSection />
        <DescriptionSection />
      </PageInnerWrap>
    </ResponsivePageWrap>
  );
}

export default ResponsivePage;
